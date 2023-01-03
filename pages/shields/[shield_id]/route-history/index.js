import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import Table from "@/components/Table";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import DownloadRoutesBtn from "@/components/shields/shield/DownloadRoutesBtn";
import RouteDetailsModalBtn from "@/components/shields/shield/RouteDetailsModalBtn";

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      {/* TODO: Design page (shields/1/route-history)
      XD Link: https://xd.adobe.com/view/258a5967-33a7-4223-b884-a052f322a683-70d9/screen/cf3baed5-8183-4510-8037-d7828fe0d793/specs/
      */}
      <div className="mt-4 flex flex-col gap-5 xl:flex-row">
        <div className="h-[800px] w-full xl:max-w-md">
          <Table wrapperClassName="h-full no-scrollbar" className="relative">
            <Table.Thead className="sticky top-0 bg-accent">
              <Table.Tr>
                <Table.Th className="pl-5">Nombre</Table.Th>
                <Table.Th className="pr-5">Jerarquía</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {[...Array(20)].map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td className="pl-5">
                    <div className="flex gap-3">
                      <dl>
                        <dd>Juan Jesús Ledesma</dd>
                        <dd>ID-U1231231</dd>
                      </dl>
                    </div>
                  </Table.Td>
                  <Table.Td className="pr-5">
                    <div className="flex items-center justify-between gap-4">
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
                      <label>
                        <input type="radio" name="radio" className="h-4 w-4" />
                      </label>
                    </div>
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
                {[...Array(20)].map((item, index) => (
                  <Table.Tr key={index}>
                    <Table.Td className="font-semibold">
                      Ruta #E12341RF212
                    </Table.Td>
                    <Table.Td>
                      <dd>10:00 hrs - 19:20 hrs</dd>
                      <dd>11/03/2022</dd>
                    </Table.Td>
                    <Table.Td>
                      <RouteDetailsModalBtn className="font-semibold text-primary hover:underline">
                        Ver Detalles
                      </RouteDetailsModalBtn>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </ShieldLayout>
  );
}
