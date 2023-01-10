import React from "react";
import Admin from "@/components/layouts/Admin";
import UsersTable from "@/components/users/UsersTable";
import TopBar from "@/components/users/TopBar";
import SamplePagination from "@/components/SamplePagination";
import useTableData from "@/hooks/useTableData";
import Pagination from "@/components/Pagination";

const pageSize = 1


const Users = () => {
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
  } = useTableData({
    dataUrl: "/api/dashboard/users/",
    pageSize: pageSize,
    queryKeys: ["users-table-data"],
    dataCallback: (data) => data?.data?.data
  })


  return (
    <Admin pageTitle="Usuarios" headerTitle="Usuarios">
      <TopBar
        search={search}
        setSearch={setSearch}
        tempFilters={tempFilters}
        setTempFilters={setTempFilters}
        applyFilters={applyFilters}
        resetPage={resetPage}
      />

      <div className="container-padding">
        <UsersTable
          users={currentTableData}
          isLoading={isLoading}
          isError={isError}
          error={error}
          sort={sort}
          setSort={setSort}
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

export default Users;
