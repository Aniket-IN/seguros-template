import PaymentMembershipsTable from "@/components/payment-memberships/PaymentMembershipsTable";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useMemo, useState } from "react";
import InputGroup from "@/components/utility/InputGroup";
import Pagination from "@/components/Pagination";
import Admin from "@/components/layouts/Admin";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import keyify from "@/helpers/keyify";
import { orderBy } from "lodash";
import Fuse from "fuse.js";

const PageSize = 1

export default function PaymentMemberships() {
  const { axios } = useAxios();
  const [tempFilters, setTempFilters] = useState({});
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ field: 'order_id', direction: 'desc' });

  const fetchData = () => {
    return axios.get("/api/Membership/payments/");
  };

  const { isLoading, data, isError, isSuccess, error } = useQuery(
    ["payment-memberships"],
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

  const allMembershipsUnsorted = useMemo(() => {
    setCurrentPage(1)
    let items = data?.data ?? [];
    items = items.filter((item) => {
      let passingFilters = []
      Object.entries(filters).forEach(([filterKey, filter]) => {
        if (filter.length > 0) {
          if (item[filterKey] && filter.map(fltr => fltr.toLowerCase().replace(/_/g, "")).includes(item[filterKey].toLowerCase().replace(/_/g, ""))) {
            passingFilters.push(filterKey)
          }
        } else {
          passingFilters.push(filterKey)
        }
      });

      return passingFilters.length == Object.keys(filters).length
    })
    return items;
  }, [data?.data, filters])

  const allMemberships = useMemo(() => {
    let sortedProducts = [...allMembershipsUnsorted];
    const fieldsNames = Object.keys(allMembershipsUnsorted[0] ?? {});

    if (fieldsNames.length > 0 && fieldsNames.includes(sort.field)) {
      sortedProducts = orderBy(sortedProducts, sort.field, sort.direction);
    }

    return sortedProducts;
  }, [sort, allMembershipsUnsorted]);

  const fuse = useMemo(() => {
    return new Fuse(allMemberships, {
      keys: keyify(allMemberships[0] ?? {}),
    })
  }, [allMemberships])

  const memberships = useMemo(() => {
    if (search) {
      return fuse.search(search).map(membership => membership.item);
    }
    return allMemberships ?? [];
  }, [allMemberships, search, isSuccess, filters])


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return memberships.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, memberships]);

  return (
    <Admin pageTitle="Pagos Membresías" headerTitle="Pagos Membresías">
      <div className="bg-neutral">
        <div className="container-padding items-center gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
          <div className="w-full flex-shrink-0 sm:w-auto">
            <InputGroup className=" relative">
              <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
                <MagnifyingGlassIcon className="aspect-square w-full" />
              </div>
              <InputGroup.Input
                value={search}
                onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
                id="search"
                type="search"
                name="search"
                className="pl-9"
                placeholder="Buscar"
              />
            </InputGroup>
          </div>

          <div className="flex flex-grow items-center gap-3">
            <FilterDropDownBtn.Primary
              filters={tempFilters}
              setFilters={setTempFilters}
              onApply={() => setFilters(tempFilters)}
              groups={[
                {
                  id: 1,
                  title: "Membership",
                  options: [
                    {
                      id: 1,
                      label: "Nivel 1",
                      name: "membership",
                      value: "level1",
                    },
                    {
                      id: 2,
                      label: "Nivel 2",
                      name: "membership",
                      value: "level2",
                    },
                    {
                      id: 3,
                      label: "Nivel 3",
                      name: "membership",
                      value: "level3",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Status",
                  options: [
                    {
                      id: 1,
                      label: "Efectuado",
                      name: "conditions",
                      value: "effected",
                    },
                    {
                      id: 2,
                      label: "Pending",
                      name: "conditions",
                      value: "pending",
                    },
                    {
                      id: 3,
                      label: "Failed",
                      name: "conditions",
                      value: "failed",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="container-padding">
        <PaymentMembershipsTable
          sort={sort}
          setSort={setSort}
          isLoading={isLoading}
          isError={isError}
          error={error}
          memberships={currentTableData}
        />

        {isSuccess && (
          <Pagination
            className="mt-3.5"
            totalCount={memberships.length}
            currentPage={currentPage}
            pageSize={PageSize}
            onPageChange={setCurrentPage}
          />
        )}

      </div>
    </Admin>
  );
}
