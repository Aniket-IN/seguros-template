import React from "react";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import Link from "next/link";
import useTableData from "@/hooks/useTableData";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Pagination from "@/components/Pagination";

const pageSize = 1

export default function index() {
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
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_2,
    dataUrl: `/api/company/company-shields/?id=${company_id}`,
    pageSize: pageSize,
    queryKeys: [`company-${company_id}-shields-table-data`],
    enabled: !!company_id,
    noAuth: true,
  })


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
              <Table.Th>Nombre</Table.Th>
              <Table.Th>N° de miembros</Table.Th>
              <Table.Th>Fecha de Creación</Table.Th>
              <Table.Th>Membresía</Table.Th>
              <Table.Th>Admin</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isSuccess && currentTableData.map((shield, index) => (
              <Table.Tr key={shield.id}>
                <Table.Td>
                  <div className="flex min-w-fit items-center gap-4">
                    <img
                      src={process.env.NEXT_PUBLIC_BACKEND_URL + shield.logo}
                      className="aspect-square w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold capitalize">{shield.shield_name}</p>
                      <p>{shield.shield_code}</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>8</Table.Td>
                <Table.Td>
                  {format(new Date(shield.created_at), 'dd/MM/yyyy')}
                </Table.Td>
                <Table.Td>
                  {/* Nivel 1 */}
                </Table.Td>
                <Table.Td className="text-secondary">
                  <p className="capitalize">{shield.admin?.full_name}</p>
                  <p>ID {shield.admin?.id}</p>
                </Table.Td>
                <Table.Td>
                  <Link
                    href={`/shields/${shield.id}`}
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
