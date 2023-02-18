import React from "react";
import Table from "@/components/Table";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import useTableData from "@/hooks/useTableData";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import ProfilePicture from "@/components/ProfilePicture";
import { format } from "date-fns";

const pageSize = 1;

export default function Members() {
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
    dataUrl: `/api/company/company-members/?id=${company_id}`,
    pageSize: pageSize,
    queryKeys: [`company-${company_id}-members-table-data`],
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
              <Table.Th>Miembro</Table.Th>
              <Table.Th>Fecha de Creación</Table.Th>
              <Table.Th>Nro de Escudos</Table.Th>
              <Table.Th>Membresía</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isSuccess &&
              currentTableData?.map((member, index) => (
                <Table.Tr key={index}>
                  <Table.Td>
                    <div className="flex min-w-fit items-center gap-4">
                      <ProfilePicture
                        src={member.image_url}
                        className="block aspect-square w-11 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{member.full_name}</p>
                        <p>{member.id}</p>
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    {format(new Date(member.created_at), "dd/MM/yyyy")}
                  </Table.Td>
                  <Table.Td>{member.number_of_shields}</Table.Td>
                  <Table.Td>{member.membership_level}</Table.Td>
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
