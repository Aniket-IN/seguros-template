import Table from "@/components/Table";
import InputGroup from "@/components/utility/InputGroup";
import React from "react";

const LocationHistoryCard = () => {
  return (
    <div className="flex h-[800px]  flex-col bg-white p-5 lg:h-full">
      <h2 className="text-lg font-bold">Ubicación actual</h2>

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

      <div className="relative flex-grow">
        <Table
          wrapperClassName="mt-5 px-2.5 bg-accent absolute inset-0"
          className="relative"
        >
          <Table.Thead className="sticky top-0 bg-accent">
            <Table.Tr>
              <Table.Th className="w-1/2 ">Ubicación</Table.Th>
              <Table.Th className="w-1/2 ">Horario</Table.Th>
              <Table.Th className="w-1/2 text-right">Velocidad</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(50)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td className="!py-5 ">-12.091307, -77.042053</Table.Td>
                <Table.Td className="!py-5 ">11/03/2022, 10:30 Hrs.</Table.Td>
                <Table.Td className="!py-5 text-right">70km/h</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default LocationHistoryCard;
