import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import LocationHistoryBtn from "@/components/shields/shield/LocationHistoryBtn";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Pagination from "@/components/Pagination";
import useTableData from "@/hooks/useTableData";
import { format } from "date-fns";
import ProfilePicture from "@/components/ProfilePicture";

const pageSize = 1;

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
    resetPage,
  } = useTableData({
    dataUrl: `/api/shield/shield-members/?id=${shield_id}`,
    pageSize: pageSize,
    queryKeys: [`shield-${shield_id}-members-table-data`],
    enabled: !!shield_id,
    dataCallback: (resp) => resp?.data?.data ?? [],
  });

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
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Fecha de Creación</Table.Th>
              <Table.Th>Tipo</Table.Th>
              <Table.Th>Jerarquía</Table.Th>
              <Table.Th>Ubicaciones</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {!isLoading &&
              !isError &&
              currentTableData?.map((member) => (
                <Row member={member} key={member.member.id} />
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

const Row = ({ member = {} }) => {
  return (
    <Table.Tr>
      <Table.Td>
        <div className="flex min-w-fit items-center gap-4">
          <ProfilePicture
            src={
              member.member.image
                ? `${process.env.NEXT_PUBLIC_HOSTNAME}${member.member.image}`
                : null
            }
            className="block aspect-square w-11 rounded-full object-cover"
            alt=""
          />
          <div>
            <p>{member.member.full_name}</p>
            <p>{member.member.id}</p>
          </div>
        </div>
      </Table.Td>
      <Table.Td>
        {format(new Date(member.member.created_at), "dd/MM/yy")}
      </Table.Td>
      <Table.Td>{member.member.user_type}</Table.Td>
      <Table.Td>
        <span className="inline-flex items-center rounded-full bg-warning bg-opacity-20 px-3 py-1.5 text-sm font-semibold capitalize text-warning">
          <svg
            className="mr-1.5 h-2 w-2 text-warning"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={5} cy={4} r={3} />
          </svg>
          {member.hierarchy}
        </span>
      </Table.Td>
      <Table.Td>
        <LocationHistoryBtn
          member={member.member}
          type="button"
          className="font-semibold text-primary hover:underline"
        >
          Historial de Ubicaciones
        </LocationHistoryBtn>
      </Table.Td>
    </Table.Tr>
  );
};
