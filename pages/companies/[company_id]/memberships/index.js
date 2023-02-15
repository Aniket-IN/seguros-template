import React from "react";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import Link from "next/link";
import useTableData from "@/hooks/useTableData";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import { format } from "date-fns";

const pageSize = 1;

export default function Memberships() {
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
    dataCallback: (data) => data?.data?.data,
    dataUrl: `/api/company/membership-company/?id=${company_id}`,
    pageSize: pageSize,
    queryKeys: [`company-${company_id}-memberships-table-data`],
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
              <Table.Th>Membresía</Table.Th>
              <Table.Th>Inicio</Table.Th>
              <Table.Th>Fin</Table.Th>
              <Table.Th>Pago</Table.Th>
              <Table.Th>Transacción</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isSuccess &&
              currentTableData?.map((item, index) => (
                <Table.Tr key={item.id}>
                  <Table.Td>{item.membership}</Table.Td>
                  <Table.Td>
                    {format(new Date(item.date), "dd/MM/yyyy")}
                  </Table.Td>
                  <Table.Td>
                    {format(new Date(item.membership_end_date), "dd/MM/yyyy")}
                  </Table.Td>
                  <Table.Td className="font-semibold">
                    Pago#{item.order_id}
                  </Table.Td>
                  <Table.Td>{item.order_id}</Table.Td>
                  <Table.Td>
                    <Link
                      href={`/payment-memberships/${item.id}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      Ver detalles
                    </Link>
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
