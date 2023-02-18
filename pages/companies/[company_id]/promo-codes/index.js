import React from "react";
import Table from "@/components/Table";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import useTableData from "@/hooks/useTableData";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import classNames from "classnames";

const pageSize = 1;

export default function PromoCodes() {
  const router = useRouter();
  const { company_id } = router.query;

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
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    noAuth: true,
    dataCallback: (data) => data?.data,
    dataUrl: `/api/admin/promo-code/?company_id=${company_id}`,
    pageSize: pageSize,
    queryKeys: [`promocodes`, { company_id }],
    enabled: !!company_id,
  });

  return (
    <CompanyLayout pageTitle="Empresas" headerTitle="Empresas">
      <div className="mt-5">
        <Table
          dataCount={currentTableData.length}
          isLoading={isLoading}
          isError={isError}
          error={error}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID de código</Table.Th>
              <Table.Th>Código de promo</Table.Th>
              <Table.Th>Membresia</Table.Th>
              <Table.Th>% de descuento</Table.Th>
              <Table.Th>Stock total</Table.Th>
              <Table.Th>Etiqueta</Table.Th>
              <Table.Th>Estado</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isSuccess &&
              currentTableData?.map((promocode, index) => (
                <Table.Tr key={promocode.id}>
                  <Table.Td>{promocode.code_id}</Table.Td>
                  <Table.Td>{promocode.promo_code}</Table.Td>
                  <Table.Td>{promocode.membership}</Table.Td>
                  <Table.Td>{promocode.discount}%</Table.Td>
                  <Table.Td>{promocode.stocks}</Table.Td>
                  <Table.Td>{promocode.label}</Table.Td>
                  <Table.Td>
                    <span
                      className={classNames(
                        "inline-flex items-center rounded-full  px-3 py-1.5 text-sm font-semibold",
                        promocode.state
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      )}
                    >
                      <svg
                        className={classNames(
                          "mr-1.5 h-2 w-2",
                          promocode.state ? "text-green-600" : "text-red-600"
                        )}
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx={5} cy={4} r={3} />
                      </svg>
                      {promocode.state ? "Activo" : "Inactivo"}
                    </span>
                  </Table.Td>
                </Table.Tr>
              ))}
          </Table.Tbody>
        </Table>
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
    </CompanyLayout>
  );
}
