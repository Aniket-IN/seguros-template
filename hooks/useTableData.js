import keyify from "@/helpers/keyify";
import { orderBy } from "lodash";
import { useEffect, useMemo, useState } from 'react'
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import useAxios from "./useAxios";
import Fuse from "fuse.js";


const useTableData = ({
  enabled = true,
  dataUrl = '',
  dataCallback = (resp) => {
    return resp?.data ?? []
  },
  queryKeys = [],
  pageSize = 10,
  initialSort = { field: 'id', direction: 'desc' }
}) => {
  // Custom Axios instance
  const { axios } = useAxios();

  // States
  const [tempFilters, setTempFilters] = useState({});
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState(initialSort);



  // function to fetch data
  const fetchData = () => {
    return axios.get(dataUrl);
  };

  // React-query for data fetching
  const { isLoading, isError, refetch, isRefetching, isSuccess, data: responseData, error } = useQuery(
    queryKeys,
    fetchData,
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      enabled: enabled,
    }
  );

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError]);


  const stringForCompare = (val) => val.toString().toLowerCase().replace(/_/g, "").replace(/ +/g, '')

  useEffect(() => {
    resetPage()
  }, [filters])

  const dataItems = dataCallback(responseData) ?? [];

  // filtering
  const allDataUnsorted = useMemo(() => {
    let items = [...dataItems];
    items = items.filter((item) => {
      let passingFilters = []
      Object.entries(filters).forEach(([filterKey, filter]) => {
        if (filter.length > 0) {
          let condition = filter.map((fltr) => stringForCompare(fltr)).includes(stringForCompare(item[filterKey]));
          if (!(item[filterKey] === undefined || item[filterKey] === null) && condition) {
            passingFilters.push(filterKey)
          }
        } else {
          passingFilters.push(filterKey)
        }
      });

      return passingFilters.length == Object.keys(filters).length
    })
    return items;
  }, [responseData?.data, filters])


  // Sorting
  const allData = useMemo(() => {
    let sortedProducts = [...allDataUnsorted];
    const fieldsNames = Object.keys(allDataUnsorted[0] ?? {});

    if (fieldsNames.length > 0 && fieldsNames.includes(sort.field)) {
      sortedProducts = orderBy(sortedProducts, sort.field, sort.direction);
    }

    return sortedProducts;
  }, [sort, allDataUnsorted]);


  // Fuse instance for searching
  const fuse = useMemo(() => {
    return new Fuse(allData, {
      keys: keyify(allData[0] ?? {}),
    })
  }, [allData])


  // searching
  const data = useMemo(() => {
    if (search) {
      return fuse.search(search).map(dataItem => dataItem.item);
    }
    return allData ?? [];
  }, [allData, search, isSuccess, filters])


  // current data for the page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  // Apply filters
  const applyFilters = () => setFilters(tempFilters)

  // Reset to initial page
  const resetPage = () => setCurrentPage(1)

  return {
    tempFilters,
    setTempFilters,

    filters,
    setFilters,

    applyFilters,

    search,
    setSearch,

    sort,
    setSort,

    isLoading,
    refetch,
    isRefetching,
    isError,
    isSuccess,
    error,

    allData,
    currentTableData,

    currentPage,
    setCurrentPage,

    resetPage
  }
}

export default useTableData