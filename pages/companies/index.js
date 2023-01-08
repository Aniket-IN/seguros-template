import React from "react";
import Admin from "@/components/layouts/Admin";
import CompaniesTable from "@/components/companies/CompaniesTable";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import useTableData from "@/hooks/useTableData";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import Pagination from "@/components/Pagination";

const pageSize = 1
const Companies = () => {
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
    resetPage,
    refetch
  } = useTableData({
    dataUrl: "/api/company/all-companies/",
    pageSize: pageSize,
    queryKeys: ["companies-table-data"]
  })

  return (
    <Admin pageTitle="Empresas" headerTitle="Empresas">
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
              onApply={applyFilters}
              filters={tempFilters}
              setFilters={setTempFilters}
              groups={[
                {
                  id: 1,
                  title: "Status",
                  options: [
                    {
                      id: 1,
                      name: "suspended",
                      label: "Active",
                      value: false,
                    },
                    // {
                    //   id: 2,
                    //   name: "suspended",
                    //   label: "Inactive",
                    //   value: "Inactive",
                    // },
                    {
                      id: 3,
                      name: "suspended",
                      label: "Suspended",
                      value: true,
                    },
                  ],
                },
              ]}
            />

            {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
          </div>
        </div>
      </div>

      <div className="container-padding">
        <CompaniesTable
          refetch={refetch}
          companies={currentTableData}
          isLoading={isLoading}
          isError={isError}
          error={error}
          sort={sort}
          setSort={setSort}
          isSuccess={isSuccess}
        />
        {/* <SamplePagination /> */}
        {isSuccess && (
          <div className="mt-3.5 -translate-y-28">
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
};

export default Companies;
