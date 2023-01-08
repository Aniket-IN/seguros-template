import React from "react";
import Admin from "@/components/layouts/Admin";
import SamplePagination from "@/components/SamplePagination";
import ShieldsTable from "@/components/shields/ShieldsTable";
import useTableData from "@/hooks/useTableData";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Pagination from "@/components/Pagination";


const pageSize = 1

export default function Shields() {
  const {
    search,
    setSearch,
    currentTableData,
    tempFilters,
    setTempFilters,
    applyFilters,
    isLoading,
    isError,
    error,
    sort,
    setSort,
    allData,
    currentPage,
    setCurrentPage,
    isSuccess,
    resetPage
  } = useTableData({
    dataUrl: "/api/shield/all-shields/",
    pageSize: pageSize,
    queryKeys: ["shields-table-data"]
  })

  return (
    <Admin pageTitle="Escudos" headerTitle="Escudos">
      <div className="bg-neutral">
        <div className="container-padding items-center gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
          <div className="w-full flex-shrink-0 sm:w-auto">
            <InputGroup className=" relative">
              <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
                <MagnifyingGlassIcon className="aspect-square w-full" />
              </div>
              <InputGroup.Input
                value={search}
                onChange={e => { setSearch(e.target.value); resetPage() }}
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
              onApply={applyFilters}
              groups={[
                {
                  id: 1,
                  title: "Type of Shield",
                  options: [
                    {
                      id: 1,
                      label: "Corporate",
                      name: "shield_type",
                      value: "Corporate",
                    },
                    {
                      id: 2,
                      label: "Individual",
                      name: "shield_type",
                      value: "Individual",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Status",
                  options: [
                    {
                      id: 1,
                      label: "Active",
                      name: "condition",
                      value: true,
                    },
                    {
                      id: 2,
                      label: "Inactive",
                      name: "condition",
                      value: false,
                    },
                    // {
                    //   id: 3,
                    //   label: "Suspended",
                    //   name: "condition",
                    //   value: "suspended",
                    // },
                  ],
                },
              ]}
            />

            {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
          </div>
        </div>
      </div>

      <div className="container-padding">
        <ShieldsTable
          shields={currentTableData}
          isLoading={isLoading}
          isError={isError}
          error={error}
          sort={sort}
          setSort={setSort}
        />
        {/* <SamplePagination /> */}
        {isSuccess && (
          <div className="mt-3.5 -translate-y-24">
            <Pagination
              totalCount={allData.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </Admin>
  );
}
