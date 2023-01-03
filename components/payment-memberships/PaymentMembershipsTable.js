import React, { Fragment } from 'react'
import Table from "../Table"
import Link from "next/link"
import { format } from "date-fns"

const PaymentMembershipsTable = ({ memberships = [], isLoading, isError, error }) => {
  const headers = [
    'ID Orden',
    'Fecha',
    'ID transacción',
    'Membresía',
    'Monto',
    'ID usuario',
    'Estado',
    'Acción',
  ];

  return (
    <Table dataCount={memberships.length} isLoading={isLoading} isError={isError} error={error}>
      <Table.Thead>
        <Table.Tr>
          {headers.map((header) => <Table.Th key={header}>{header}</Table.Th>)}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {!isLoading && !isError && memberships?.map((membership) => <Row membership={membership} key={membership.id} />)}
      </Table.Tbody>
    </Table>
  )
}
const Row = ({ membership }) => {
  return (
    <Table.Tr>
      <Table.Td>
        {membership.order_id}
      </Table.Td>
      <Table.Td>
        {format(new Date(membership.date), 'd/MM/yy')}
      </Table.Td>
      <Table.Td>
        {membership.transaction_id}
      </Table.Td>
      <Table.Td>
        {membership.membership}
      </Table.Td>
      <Table.Td>
        $ {membership.total_amount}
      </Table.Td>
      <Table.Td >
        {membership.userprofile.id}
      </Table.Td>
      <Table.Td className="text-success font-semibold">
        {membership.conditions}
      </Table.Td>
      <Table.Td className="font-semibold">
        <Link href="/payment-memberships/1" className="text-primary font-semibold hover:underline">
          Ver detalles
        </Link>
      </Table.Td>
    </Table.Tr>
  )
}

export default PaymentMembershipsTable