import React, { useState } from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import DownloadRoutesBtn from "@/components/shields/shield/DownloadRoutesBtn";
import RouteDetailsModalBtn from "@/components/shields/shield/RouteDetailsModalBtn";
import { useRouter } from "next/router";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import Badge from "@/components/Badge";
import { format } from "date-fns";

export default function index() {
  const { axios } = useAxios();
  const router = useRouter();
  const [memberId, setMemberId] = useState("");

  const { shield_id } = router.query;

  const fetchData = () => {
    return axios.get(`/api/shield/shield-members/?id=${shield_id}`);
  };

  // React-query for data fetching
  const {
    isLoading,
    isError,
    refetch,
    isRefetching,
    isSuccess,
    data: response,
    error,
  } = useQuery(`shield-${shield_id}-members`, fetchData, {
    refetchOnWindowFocus: false,
    enabled: !!shield_id,
  });

  const members = response?.data?.data ?? [];

  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="mt-4 flex flex-col gap-5 xl:flex-row">
        <div className="h-[800px] w-full xl:max-w-md">
          <Table wrapperClassName="h-full no-scrollbar" className="relative">
            <Table.Thead className="sticky top-0 bg-accent">
              <Table.Tr>
                <Table.Th className="w-1/2 pl-5">Nombre</Table.Th>
                <Table.Th className="w-1/2 pr-5">Jerarquía</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {members.map((member) => (
                <Table.Tr key={member.member.id}>
                  <Table.Td className="pl-5">
                    <div className="flex gap-3">
                      <dl>
                        <dd className="capitalize">
                          {member.member.full_name}
                        </dd>
                        <dd>ID-{member.member.id}</dd>
                      </dl>
                    </div>
                  </Table.Td>
                  <Table.Td className="flex items-center justify-between gap-4 pr-5">
                    <Badge.Md
                      text={member.hierarchy}
                      className="bg-warning bg-opacity-20 text-warning"
                    />
                    <label>
                      <input
                        checked={memberId == member.member.id}
                        onChange={() => setMemberId(member.member.id)}
                        type="radio"
                        name="radio"
                        className="h-4 w-4"
                      />
                    </label>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>

        <div className="flex h-[800px] flex-grow flex-col space-y-3 bg-white p-5">
          <SectionHeading>Historial de Rutas</SectionHeading>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center justify-end gap-2 text-sm">
              <span>Buscar</span>
              <div>
                <InputGroup>
                  <InputGroup.Input type="date" className="bg-accent" />
                </InputGroup>
              </div>
              <button className="self-stretch rounded bg-primary px-3 font-medium text-white ring-offset-2 focus:ring-2">
                Buscar
              </button>
            </div>
            <DownloadRoutesBtn className="inline-flex gap-2.5 rounded border bg-accent px-4 py-2.5 text-sm">
              <ArrowDownTrayIcon className="h-4 w-4" />
              <span className="font-medium">Descargar Rutas</span>
            </DownloadRoutesBtn>
          </div>
          <div className="relative flex-grow bg-accent">
            <RouteHistoryTable memberId={memberId} />
          </div>
        </div>
      </div>
    </ShieldLayout>
  );
}

const RouteHistoryTable = ({ memberId }) => {
  const { axios } = useAxios();
  const router = useRouter();

  const { shield_id } = router.query;

  const fetchData = () => {
    return axios.get(
      `/api/shield/shield-members-routes/?shield_id=${shield_id}&member_id=${memberId}`
    );
  };

  // React-query for data fetching
  const {
    isLoading,
    isError,
    refetch,
    isRefetching,
    isSuccess,
    data: response,
    error,
  } = useQuery(`shield-${shield_id}-member-${memberId}-routes`, fetchData, {
    refetchOnWindowFocus: false,
    enabled: !!shield_id && !!memberId,
  });

  const routes = response?.data ?? [];

  return (
    <Table
      wrapperClassName="absolute inset-0 w-full h-full px-4 pb-4 overflow-auto"
      className="relative"
    >
      <Table.Thead className="sticky top-0 bg-accent">
        <Table.Tr>
          <Table.Th>ID Ruta</Table.Th>
          <Table.Th>Velocidad</Table.Th>
          <Table.Th>Detalles de Ruta</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {routes?.map((route) => (
          <Table.Tr key={route.route_id}>
            <Table.Td className="font-semibold">
              Ruta #{route.route_id}
            </Table.Td>
            <Table.Td>
              {/* <dd>10:00 hrs - 19:20 hrs</dd> */}
              <dd>{format(new Date(route.schedule), "dd/MM/yy")}</dd>
            </Table.Td>
            <Table.Td>
              <RouteDetailsModalBtn
                route={route}
                className="font-semibold text-primary hover:underline"
              >
                Ver Detalles
              </RouteDetailsModalBtn>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
