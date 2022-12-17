import Table from "@/components/Table"
import InputGroup from "@/components/utility/InputGroup"
import React from 'react'

const LocationHistoryCard = () => {
  return (
    <div className="p-5 bg-white ">
      <h2 className="font-bold text-lg">Ubicación actual</h2>

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

      <div className="flex-grow-0">
        <ul className="mt-5 px-2.5 bg-accent">
          <Table>
            <Table.Thead className="bg-accent">
              <Table.Tr>
                <Table.Th>Ubicación</Table.Th>
                <Table.Th>Horario</Table.Th>
                <Table.Th className="text-right">Velocidad</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {[...Array(10)].map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td className="!py-5 ">-12.091307, -77.042053</Table.Td>
                  <Table.Td className="!py-5 ">11/03/2022, 10:30 Hrs.</Table.Td>
                  <Table.Td className="!py-5 text-right">70km/h</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ul>
      </div>


    </div >
  )
}

export default LocationHistoryCard