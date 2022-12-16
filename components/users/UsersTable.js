import React from 'react'
import Table from "../Table"

const UsersTable = () => {
  const headers = [
    'ID Usuario',
    'Nombre',
    'Teléfono',
    'Correo',
    'Fecha de Creación',
    'Tipo',
    'Estado',
    'Acción',
  ];

  return (
    <Table>
      <Table.Thead>
        {
          headers.map((header) => (
            <Table.Th key={header}>{header}</Table.Th>
          ))
        }
      </Table.Thead>
      <Table.Tbody>
        {[...Array(20)].map((user, index) => {
          return (
            <Table.Tr key={index}>
              <Table.Td>
                UI123123
              </Table.Td>
              <Table.Td>
                Carlos Pérez
              </Table.Td>
              <Table.Td>
                +593 987 654 321
              </Table.Td>
              <Table.Td>
                ejemplo@gmail.com
              </Table.Td>
              <Table.Td>
                25/05/22
              </Table.Td>
              <Table.Td>
                Corporativo
              </Table.Td>
              <Table.Td>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                  <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx={5} cy={4} r={3} />
                  </svg>
                  Badge
                </span>
              </Table.Td>
              <Table.Td>

              </Table.Td>
            </Table.Tr>
          )
        })}
      </Table.Tbody>
    </Table>
  )
}

export default UsersTable