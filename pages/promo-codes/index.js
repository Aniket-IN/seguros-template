import PromoCodesTable from "@/components/promo-codes/PromoCodesTable";
import TopBar from "@/components/promo-codes/TopBar";
import useTableData from "@/hooks/useTableData";
import Admin from "@/components/layouts/Admin";
import Pagination from "@/components/Pagination";


const pageSize = 4;

export default function PromoCodes() {

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
    dataUrl: "/api/admin/promo-code/",
    pageSize: pageSize,
    queryKeys: ["promo-codes-table-data"]
  })

  return (
    <Admin pageTitle="Códigos de Promo" headerTitle="Códigos de Promo">
      <TopBar
        search={search}
        setSearch={setSearch}
        tempFilters={tempFilters}
        setTempFilters={setTempFilters}
        applyFilters={applyFilters}
        resetPage={resetPage}
      />

      <div className="container-padding">
        <PromoCodesTable
          promoCodes={currentTableData}
          isLoading={isLoading}
          isError={isError}
          error={error}
          sort={sort}
          setSort={setSort}
        />
        {/* <SamplePagination /> */}
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
