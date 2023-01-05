import keyify from "@/helpers/keyify";
import { orderBy } from "lodash";
import { useEffect, useMemo, useState } from 'react'
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import useAxios from "./useAxios";
import Fuse from "fuse.js";


const useTableData = ({ dataUrl = '', queryKeys = [], pageSize = 10 } = {}) => {
  // Custom Axios instance
  const { axios } = useAxios();
  
  // States
  const [tempFilters, setTempFilters] = useState({});
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ field: 'order_id', direction: 'desc' });

  console.log(filters);

  // function to fetch data
  const fetchData = () => {
    return axios.get(dataUrl);
  };

  // React-query for data fetching
  const { isLoading, isError, isRefetching, isSuccess, data: responseData, error } = useQuery(
    queryKeys,
    fetchData,
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError]);


  // filtering
  const allDataUnsorted = useMemo(() => {
    setCurrentPage(1)
    let items = responseData?.data ?? [];
    items = items.filter((item) => {
      let passingFilters = []
      Object.entries(filters).forEach(([filterKey, filter]) => {
        if (filter.length > 0) {
          if (item[filterKey] && filter.map(fltr => fltr.toLowerCase().replace(/_/g, "").replace(/ +/g, '')).includes(item[filterKey].toLowerCase().replace(/_/g, "").replace(/ +/g, ''))) {
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