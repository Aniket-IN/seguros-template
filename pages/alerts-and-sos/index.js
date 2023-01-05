import React from "react";
import Admin from "@/components/layouts/Admin";
import SamplePagination from "@/components/SamplePagination";
import AlertsSOSTable from "@/components/alerts-and-sos/AlertsSOSTable";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import useTableData from "@/hooks/useTableData";
import Pagination from "@/components/Pagination";

const pageSize = 1;

export default function AlertsAndSOS() {

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
    dataUrl: "/api/alert/get-alert",
    pageSize: pageSize,
    queryKeys: ["alerts-and-sos-table-data"]
  })

  return (
    <Admin pageTitle="Alertas y SOS" headerTitle="Alertas y SOS">
      <div className="bg-neutral">
        <div className="container-padding items-center gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
          <div className="w-full flex-shrink-0 sm:w-auto">
            <InputGroup className=" relative">
              <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
                <MagnifyingGlassIcon className="aspect-square w-full" />
              </div>
              <InputGroup.Input
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
              groups={[
                {
                  id: 1,
                  title: "Type of Alert",
                  options: [
                    {
                      id: 1,
                      label: "SOS",
                      value: 1,
                    },
                    {
                      id: 2,
                      label: "Alert",
                      value: 2,
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Status",
                  options: [
                    {
                      id: 1,
                      label: "Pendent",
                      value: "Pendent",
                    },
                    {
                      id: 2,
                      label: "Help sent",
                      value: "Help sent",
                    },
                    {
                      id: 2,
                      label: "Solved",
                      value: "Solved",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="container-padding">
        <AlertsSOSTable
          alerts={currentTableData}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
          error={error}
          sort={sort}
          setSort={setSort}
        />
        {isSuccess && (
          <Pagination
            className="mt-3.5"
            totalCount={allData.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </Admin>
  );
}
