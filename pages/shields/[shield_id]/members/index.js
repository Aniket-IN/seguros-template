import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import LocationHistoryBtn from "@/components/shields/shield/LocationHistoryBtn";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function index() {
  const { axios } = useAxios()
  const router = useRouter();

  const { shield_id } = router.query;

  const fetchData = () => {
    return axios.get("/api/shield/shield-alert-and-sos/", {
      params: {
        id: shield_id
      }
    });
  }

  // React-query for data fetching
  const { isLoading, isError, refetch, isRefetching, isSuccess, data: response, error } = useQuery(
    `shield-${shield_id}-members`,
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: !!shield_id
    }
  );

  const members = response?.data ?? []


  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="mt-5">
        <Table>
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
            {[...Array(11)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <div className="flex min-w-fit items-center gap-4">
                    <img
                      src="/assets/img/sample/companies/fanta.png"
                      className="block aspect-square w-11 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p>Carlos Pérez Guerrero</p>
                      <p>UI123123</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>25/05/22</Table.Td>
                <Table.Td>Estandar</Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center rounded-full bg-warning bg-opacity-20 px-3 py-1.5 text-sm font-semibold text-warning">
                    <svg
                      className="mr-1.5 h-2 w-2 text-warning"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Colaborativo
                  </span>
                </Table.Td>
                <Table.Td>
                  <LocationHistoryBtn
                    type="button"
                    className="font-semibold text-primary hover:underline"
                  >
                    Historial de Ubicaciones
                  </LocationHistoryBtn>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <SamplePagination />
      </div>
    </ShieldLayout>
  );
}
