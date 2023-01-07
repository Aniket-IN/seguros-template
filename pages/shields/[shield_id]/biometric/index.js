import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import InputGroup from "@/components/utility/InputGroup";
import ViewPhotoBtn from "@/components/ViewPhotoBtn";
import { useRouter } from "next/router";
import useTableData from "@/hooks/useTableData";
import Pagination from "@/components/Pagination";
import { format } from "date-fns";
import Badge from "@/components/Badge";

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
    dataUrl: `/api/shield/shield-biometrics/?id=${shield_id}`,
    pageSize: pageSize,
    queryKeys: [`shield-${shield_id}-biometrics-table-data`],
    enabled: !!shield_id,
  })


  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="mt-5">
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
          wrapperClassName="mt-6"
          dataCount={currentTableData.length}
          isLoading={isLoading}
          isError={isError}
          error={error}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Horario</Table.Th>
              <Table.Th>Ubicación</Table.Th>
              <Table.Th>Tipo</Table.Th>
              <Table.Th>Archivo adjunto</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isSuccess && currentTableData?.map((bio) => (
              <Table.Tr key={bio.id}>
                <Table.Td className="font-semibold">#{bio.biometric_code}</Table.Td>
                <Table.Td>
                  <div className="flex min-w-fit items-center gap-4">
                    <img
                      src="/assets/img/sample/user-1.png"
                      className="block aspect-square w-11 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p className="capitalize">{bio.userprofile.full_name}</p>
                      <p>{bio.userprofile.id}</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <dd>{format(new Date(bio.created_at), 'p')}</dd>
                  <dd>{format(new Date(bio.created_at), 'dd/MM/yyyy')}</dd>
                </Table.Td>
                <Table.Td>
                  {/* <dd>Av. Navarrete 403</dd> */}
                  <dd className="font-semibold">{bio.lat}, {bio.long}</dd>
                </Table.Td>
                <Table.Td>
                  <Badge.Md className="bg-gray-200 text-black" text={bio.type} />
                </Table.Td>
                <Table.Td>
                  <ViewPhotoBtn
                    headerTitle={`Biométrico #${bio.id}`}
                    user={{
                      id: bio.userprofile.id,
                      name: bio.userprofile.full_name,
                      dp: bio.userprofile.image ? process.env.NEXT_PUBLIC_BACKEND_URL + bio.userprofile.image : '',
                      avatar: bio.image ? process.env.NEXT_PUBLIC_BACKEND_URL + bio.image : ''
                    }}
                    className="font-semibold text-primary hover:underline"
                  >
                    Ver foto
                  </ViewPhotoBtn>
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
