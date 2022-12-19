import Table from "@/components/Table"
import InputGroup from "@/components/utility/InputGroup"
import React from 'react'

const PointHistoryCard = () => {
  return (
    <div className="bg-white p-5">
      <h2 className="font-bold text-lg">Historial de Punto</h2>

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

      <div className="mt-5 px-3 bg-accent">
        <Table>
          <Table.Thead>
            <Table.Tr className="font-semibold">
              <Table.Td>Miembro</Table.Td>
              <Table.Td>Fecha</Table.Td>
              <Table.Td>Horario</Table.Td>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(10)].map((item, index) => {
              return (
                <Table.Tr key={index}>
                  <Table.Td>Juan Jesús Ledesma</Table.Td>
                  <Table.Td>25/05/22</Table.Td>
                  <Table.Td>10:30 Hrs.</Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      </div>

    </div>
  )
}

export default PointHistoryCard