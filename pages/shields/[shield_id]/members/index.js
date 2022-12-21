import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"
import SamplePagination from "@/components/SamplePagination"
import LocationHistoryBtn from "@/components/shields/shield/LocationHistoryBtn"

export default function index() {
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
                <Table.Td >
                  <div className="flex items-center gap-4 min-w-fit">
                    <img src="/assets/img/sample/companies/fanta.png" className="block w-11 aspect-square object-cover rounded-full" alt="" />
                    <div>
                      <p>Carlos Pérez Guerrero</p>
                      <p>UI123123</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>25/05/22</Table.Td>
                <Table.Td>Estandar</Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-warning bg-opacity-20 text-warning">
                    <svg className="mr-1.5 h-2 w-2 text-warning" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Colaborativo
                  </span>
                </Table.Td>
                <Table.Td>
                  <LocationHistoryBtn type="button" className="text-primary font-semibold hover:underline">
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
  )
}

