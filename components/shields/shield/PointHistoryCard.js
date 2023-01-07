import Table from "@/components/Table";
import InputGroup from "@/components/utility/InputGroup";
import { format } from "date-fns";
import React, { useMemo } from "react";

const PointHistoryCard = ({ pois }) => {

  const pohs = useMemo(() => {
    return pois.map((poi) => poi.admin)
  }, [pois])

  return (
    <div className="flex h-[800px] flex-col space-y-5 bg-white p-5">
      <h2 className="text-lg font-bold">Historial de Punto</h2>

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

      <Table
        wrapperClassName="px-3 bg-accent flex-grow overflow-auto"
        className="relative"
      >
        <Table.Thead className="sticky top-0 bg-accent">
          <Table.Tr>
            <Table.Th className="">Miembro</Table.Th>
            <Table.Th className="">Fecha</Table.Th>
            <Table.Th className="">Horario</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {pohs?.map((admin, index) => {
            return (
              <Table.Tr key={admin.id}>
                <Table.Td className="capitalize">{admin.full_name}</Table.Td>
                <Table.Td>{format(new Date(admin.updated_at), 'dd/MM/yy')}</Table.Td>
                <Table.Td>{format(new Date(admin.updated_at), 'p')}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default PointHistoryCard;
