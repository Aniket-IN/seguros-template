import PaymentMembershipsTable from "@/components/payment-memberships/PaymentMembershipsTable";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import InputGroup from "@/components/utility/InputGroup";
import Pagination from "@/components/Pagination";
import Admin from "@/components/layouts/Admin";
import useTableData from "@/hooks/useTableData";

const pageSize = 1

export default function PaymentMemberships() {

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
    dataUrl: "/api/Membership/payments/",
    pageSize: pageSize,
    queryKeys: ["payment-memberships-table-data"]
  })

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
          memberships={currentTableData}
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
