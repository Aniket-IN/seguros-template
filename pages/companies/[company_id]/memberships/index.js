import React from "react";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import Link from "next/link";
import useTableData from "@/hooks/useTableData";
import { useRouter } from "next/router";

const pageSize = 1

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
    resetPage
  } = useTableData({
    dataUrl: `/api/company/company-members/?id=${company_id}`,
    pageSize: pageSize,
    queryKeys: [`company-${company_id}-memberships-table-data`],
    enabled: !!company_id,
  })


  return (
    <CompanyLayout pageTitle="Empresas" headerTitle="Empresas">
      <div className="mt-5">
        <Table>
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
            {[...Array(2)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>Nivel 0</Table.Td>
                <Table.Td>22/08/2022</Table.Td>
                <Table.Td>23/09/2022</Table.Td>
                <Table.Td className="font-semibold">Pago#123123</Table.Td>
                <Table.Td>T-1231231231</Table.Td>
                <Table.Td>
                  <Link
                    href="/payment-memberships/1"
                    className="font-semibold text-primary hover:underline"
                  >
                    Ver detalles
                  </Link>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <SamplePagination />
      </div>
    </CompanyLayout>
  );
}
