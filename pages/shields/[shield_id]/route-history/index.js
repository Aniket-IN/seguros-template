import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import DownloadRoutesBtn from "@/components/shields/shield/DownloadRoutesBtn"
import RouteDetailsModalBtn from "@/components/shields/shield/RouteDetailsModalBtn"

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      {/* TODO: Design page (shields/1/route-history)
      XD Link: https://xd.adobe.com/view/258a5967-33a7-4223-b884-a052f322a683-70d9/screen/cf3baed5-8183-4510-8037-d7828fe0d793/specs/
      */}
      <div className="flex flex-col xl:flex-row gap-5 mt-4">


        <div className="xl:max-w-md w-full h-[800px]">
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
                    <div className="flex gap-4 items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-warning bg-opacity-20 text-warning">
                        <svg className="mr-1.5 h-2 w-2 text-warning" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx={5} cy={4} r={3} />
                        </svg>
                        Colaborativo
                      </span>
                      <label>
                        <input
                          type="radio"
                          name="radio"
                          className="w-4 h-4"
                        />
                      </label>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>

        <div className="flex-grow flex flex-col h-[800px] bg-white p-5 space-y-3">
          <SectionHeading>Historial de Rutas</SectionHeading>
          <div className="flex items-center gap-4 justify-end">
            <div className="flex items-center gap-2 justify-end text-sm">
              <span>Buscar</span>
              <div>
                <InputGroup>
                  <InputGroup.Input
                    type="date"
                    className="bg-accent"
                  />
                </InputGroup>
              </div>
              <button className="self-stretch px-3 font-medium bg-primary text-white rounded focus:ring-2 ring-offset-2">
                Buscar
              </button>
            </div>
            <DownloadRoutesBtn className="bg-accent px-4 py-2.5 inline-flex gap-2.5 text-sm rounded border">
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span className="font-medium">Descargar Rutas</span>
            </DownloadRoutesBtn>
          </div>
          <div className="relative bg-accent flex-grow">
            <Table wrapperClassName="absolute inset-0 w-full h-full px-4 pb-4 overflow-auto" className="relative">
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
                    <Table.Td className="font-semibold">Ruta #E12341RF212</Table.Td>
                    <Table.Td>
                      <dd>10:00 hrs - 19:20 hrs</dd>
                      <dd>11/03/2022</dd>
                    </Table.Td>
                    <Table.Td>
                      <RouteDetailsModalBtn className="text-primary hover:underline font-semibold">
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
  )
}

