import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"
import SamplePagination from "@/components/SamplePagination"
import InputGroup from "@/components/utility/InputGroup"
import ViewPhotoBtn from "@/components/ViewPhotoBtn"

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">

      <div className="mt-5 space-y-6">

        <div className="flex items-center gap-2 text-sm">
          <span>Buscar</span>
          <div>
            <InputGroup>
              <InputGroup.Input
                type="date"
                className="bg-accent !border-none"
              />
            </InputGroup>
          </div>
          <button className="self-stretch px-3 font-medium bg-primary text-white rounded focus:ring-2 ring-offset-2">
            Buscar
          </button>
        </div>


        <Table>
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

            {[...Array(9)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td className="font-semibold">#E12341RF2</Table.Td>
                <Table.Td>
                  <div className="flex items-center gap-4 min-w-fit">
                    <img src="/assets/img/sample/user-1.png" className="block w-11 aspect-square object-cover rounded-full" alt="" />
                    <div>
                      <p>Carlos Pérez Guerrero</p>
                      <p>UI123123</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <dd>10:00 hrs</dd>
                  <dd>11/03/2022</dd>
                </Table.Td>
                <Table.Td>
                  <dd>Av. Navarrete 403</dd>
                  <dd className="font-semibold">-12.091307, -77.042053</dd>
                </Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-gray-200 text-black">
                    <svg className="mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    SALIDA
                  </span>
                </Table.Td>
                <Table.Td>
                  <ViewPhotoBtn
                    headerTitle="Biométrico #E12341RF212"
                    user={{
                      id: "UI123123",
                      name: "Carlos Pérez Guerrero",
                      avatar: "/assets/img/sample/user-3.png",
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Ver foto
                  </ViewPhotoBtn>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <SamplePagination />
      </div>
    </ShieldLayout>
  )
}

