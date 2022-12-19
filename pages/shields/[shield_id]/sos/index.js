import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"
import SamplePagination from "@/components/SamplePagination"
import InputGroup from "@/components/utility/InputGroup"

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
              <Table.Th>Tipo</Table.Th>
              <Table.Th>Ubicación</Table.Th>
              <Table.Th>Horario</Table.Th>
              <Table.Th>Evidencia</Table.Th>
              <Table.Th>Miembro</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td >
                <p className="font-semibold text-danger">SOS</p>
                <p>SOS#1231231</p>
              </Table.Td>
              <Table.Td className="font-semibold">-12.091307, -77.042053</Table.Td>
              <Table.Td>
                <dd>23/09/2022</dd>
                <dd>10:30 Hrs</dd>
              </Table.Td>
              <Table.Td>
                <button type="button" className="text-primary font-semibold hover:underline">
                  Evidencia#123123
                </button>
              </Table.Td>
              <Table.Td>
                Juan Jesús Ledesma
              </Table.Td>
            </Table.Tr>
            {[...Array(9)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td >
                  <p className="font-semibold">Alerta - Policial</p>
                  <p>Alerta#1231231</p>
                </Table.Td>
                <Table.Td className="font-semibold">-12.091307, -77.042053</Table.Td>
                <Table.Td>
                  <dd>23/09/2022</dd>
                  <dd>10:30 Hrs</dd>
                </Table.Td>
                <Table.Td>
                  <button type="button" className="text-primary font-semibold hover:underline">
                    Evidencia#123123
                  </button>
                </Table.Td>
                <Table.Td>
                  Fiorella Gaspar Iparraguirre
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

