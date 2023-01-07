import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import InputGroup from "@/components/utility/InputGroup";
import EvidenceModalBtn from "@/components/shields/EvidenceModalBtn";
import useTableData from "@/hooks/useTableData";
import { useRouter } from "next/router";
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
    dataUrl: `/api/shield/shield-alert-and-sos/?id=${shield_id}`,
    pageSize: pageSize,
    enabled: !!shield_id,
    queryKeys: [`shield-${shield_id}-alerts-table-data`]
  })

  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="mt-5 space-y-6">
        <div className="flex items-center gap-2 text-sm">
          <span>Buscar</span>
          <div>
            <InputGroup>
              <InputGroup.Input
                type="date"
                className="!border-none bg-accent"
              />
            </InputGroup>
          </div>
          <button className="self-stretch rounded bg-primary px-3 font-medium text-white ring-offset-2 focus:ring-2">
            Buscar
          </button>
        </div>

        <Table
          dataCount={currentTableData.length}
          isLoading={isLoading}
          isError={isError}
          error={error}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tipo</Table.Th>
              <Table.Th>Ubicación</Table.Th>
              <Table.Th>Horario</Table.Th>
              <Table.Th>Evidencia</Table.Th>
              <Table.Th>Miembro</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {!isLoading && !isError &&
              currentTableData?.map((alert) => (
                <Table.Tr key={alert.id}>
                  <Table.Td>
                    {alert.category.name.startsWith('sos') ? (
                      <div>
                        <p className="font-semibold text-danger">SOS</p>
                        <p>SOS#{alert.category.id}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-semibold capitalize">{alert.category.name}</p>
                        <p><span className="capitalize">{alert.category.name}</span>#{alert.category.id}</p>
                      </div>
                    )}
                    {/* <div>
                  <p className="font-semibold">Alerta - Policial</p>
                  <p>Alerta#1231231</p>
                </div> */}
                  </Table.Td>
                  <Table.Td className="font-semibold">
                    {alert.userprofile.lat}, {alert.userprofile.long}
                  </Table.Td>
                  <Table.Td>
                    <dd>{format(new Date(alert.created_at), 'dd/MM/yy')}</dd>
                    <dd>{format(new Date(alert.created_at), 'p')}</dd>
                  </Table.Td>
                  <Table.Td>
                    <EvidenceModalBtn alert={alert} className="text-primary">
                      Evidencia#{alert.evidence_number}
                    </EvidenceModalBtn>
                  </Table.Td>
                  <Table.Td className="capitalize">{alert.userprofile.full_name}</Table.Td>
                </Table.Tr>
              ))}
            {/* {[...Array(9)].map((alert, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <p className="font-semibold">Alerta - Policial</p>
                  <p>Alerta#1231231</p>
                </Table.Td>
                <Table.Td className="font-semibold">
                  -12.091307, -77.042053
                </Table.Td>
                <Table.Td>
                  <dd>23/09/2022</dd>
                  <dd>10:30 Hrs</dd>
                </Table.Td>
                <Table.Td>
                  <button
                    type="button"
                    className="font-semibold text-primary hover:underline"
                  >
                    Evidencia#123123
                  </button>
                </Table.Td>
                <Table.Td>Fiorella Gaspar Iparraguirre</Table.Td>
              </Table.Tr>
            ))} */}
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
