import React, { useEffect, useMemo, useState } from "react";
import Admin from "@/components/layouts/Admin";
import SamplePagination from "@/components/SamplePagination";
import PaymentMembershipsTable from "@/components/payment-memberships/PaymentMembershipsTable";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import InputGroup from "@/components/utility/InputGroup";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Fuse from "fuse.js";
import keyify from "@/helpers/keyify";
import Pagination from "@/components/Pagination";

const PageSize = 10

export default function PaymentMemberships() {
  const { axios } = useAxios();
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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



  const allMemberships = data?.data;

  const fuse = new Fuse(allMemberships ?? [], {
    keys: keyify(allMemberships ? allMemberships[0] : {}),
  });

  const memberships = (search ? fuse.search(search).map(membership => membership.item) : allMemberships) ?? [];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return memberships.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
                onChange={e => setSearch(e.target.value)}
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
              filters={filters}
              setFilters={setFilters}
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
                      name: "status",
                      value: "effected",
                    },
                    {
                      id: 2,
                      label: "Pending",
                      name: "status",
                      value: "pending",
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
          isLoading={isLoading}
          isError={isError}
          error={error}
          memberships={memberships}
        />
        {/* <SamplePagination /> */}
        {isSuccess && (
          <Pagination
            totalCount={1000}
            currentPage={currentPage}
            pageSize={10}
            onPageChange={(e) => { setCurrentPage(e); console.log(e) }}
            siblingCount={1}
          />
        )}

      </div>
    </Admin>
  );
}
