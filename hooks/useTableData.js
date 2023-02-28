import keyify from "@/helpers/keyify";
import { orderBy } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import useAxios from "./useAxios";
import Fuse from "fuse.js";

const useTableData = ({
  enabled = true,
  dataUrl = "",
  dataCallback = (resp) => {
    return resp?.data ?? [];
  },
  baseURL = process.env.NEXT_PUBLIC_BACKEND_URL,
  queryKeys = [],
  pageSize = 10,
  noAuth = false,
  // initialSort = { field: "id", direction: "desc" },
  initialSort = { field: "alert_datetime", direction: "desc" },
}) => {
  // Custom Axios instance
  const { axios } = useAxios({
    baseURL: baseURL,
    noAuth: noAuth,
  });

  // States
  const [tempFilters, setTempFilters] = useState({});
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState(initialSort);

  // function to fetch data
  const fetchData = () => {
    console.log("dataurl", dataUrl);
    const data = axios.get(dataUrl);
    return data;
  };

  // React-query for data fetching
  const {
    isLoading,
    isError,
    refetch,
    isRefetching,
    isSuccess,
    data: responseData,
    error,
  } = useQuery(queryKeys, fetchData, {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    enabled: enabled,
  });

  console.log("response data", responseData);

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError]);

  const stringForCompare = (val) => {
    console.log("val", val);
    return val?.toString().toLowerCase().replace(/_/g, "").replace(/ +/g, "");
  };

  useEffect(() => {
    resetPage();
  }, [filters]);

  const dataItems = dataCallback(responseData) ?? [];

  // filtering
  const allDataUnsorted = useMemo(() => {
    console.log("dataitems", dataItems);
    if (typeof dataItems == "object" && responseData != undefined) {
      let items = dataItems.alerts
        ? [...dataItems.alerts, ...dataItems.sos]
        : dataItems;
      console.log("items", items);
      items =
        items.length != 0 &&
        items.filter((item) => {
          let passingFilters = [];
          Object.entries(filters).forEach(([filterKey, filter]) => {
            if (filter.length > 0) {
              let condition = filter
                .map((fltr) => stringForCompare(fltr))
                .includes(stringForCompare(item[filterKey]));
              if (
                !(item[filterKey] === undefined || item[filterKey] === null) &&
                condition
              ) {
                passingFilters.push(filterKey);
              }
            } else {
              passingFilters.push(filterKey);
            }
          });

          return passingFilters.length == Object.keys(filters).length;
         
        });
      console.log("items after filtering", items);
      return items;
    } else {
      return [];
    }
  }, [responseData?.data, filters]);

  // const allDataUnsorted = typeof(unsorted)==Boolean?unsorted:[];

  // Sorting
  const allData = useMemo(() => {
    console.log("alldata unsorted", allDataUnsorted);
    let sortedProducts = [...allDataUnsorted];
    const fieldsNames = Object.keys(allDataUnsorted[0] ?? {});

    if (fieldsNames.length > 0 && fieldsNames.includes(sort.field)) {
      console.log("sort field", sort.field, " sort.direction ", sort.direction);
      sortedProducts = orderBy(
        sortedProducts,
        [
          sort.field === "alert_datetime"
            ? (item) => new Date(item.alert_datetime)
            : sort.field,
        ],
        [sort.direction]
      );
      console.log("sorted products", sortedProducts);
    }

    return sortedProducts;
  }, [sort, allDataUnsorted]);

  // Fuse instance for searching
  const fuse = useMemo(() => {
    return new Fuse(allData, {
      keys: keyify(allData[0] ?? {}),
    });
  }, [allData]);

  // searching
  const data = useMemo(() => {
    if (search) {
      return fuse.search(search).map((dataItem) => dataItem.item);
    }
    return allData ?? [];
  }, [allData, search, isSuccess, filters]);

  // current data for the page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  // Apply filters
  const applyFilters = () => setFilters(tempFilters);

  // Reset to initial page
  const resetPage = () => setCurrentPage(1);

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

    resetPage,
  };
};

export default useTableData;
