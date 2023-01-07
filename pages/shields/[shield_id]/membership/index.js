import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import Link from "next/link";
import { useRouter } from "next/router";
import useTableData from "@/hooks/useTableData";
import Pagination from "@/components/Pagination";
import { format } from "date-fns";


const pageSize = 1

export default function index() {
  const router = useRouter();
  const { shield_id } = router.query;

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
    dataUrl: `/api/shield/sheild-membership/?id=${shield_id}`,
    pageSize: pageSize,
    queryKeys: [`shield-${shield_id}-members-table-data`],
    enabled: !!shield_id,
  })


  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
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
            {isSuccess && currentTableData?.map((membership) => (
              <Table.Tr key={membership.id}>
                <Table.Td className="font-semibold">{membership.membership}</Table.Td>
                <Table.Td>{format(new Date(membership.date), 'dd/MM/yyyy')}</Table.Td>
                <Table.Td>
                  {membership.membership_end_date ? format(new Date(membership.membership_end_date), 'dd/MM/yyyy') : null}
                </Table.Td>
                <Table.Td>
                  Pago#{membership.unitary_amount}
                </Table.Td>
                <Table.Td>
                  {membership.transaction_id}
                </Table.Td>
                <Table.Td>
                  <Link
                    href={`/payment-memberships/${membership.id}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    Ver detalles
                  </Link>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
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
    </ShieldLayout>
  );
}
