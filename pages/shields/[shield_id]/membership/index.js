import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import Table from "@/components/Table"
import SamplePagination from "@/components/SamplePagination"
import Link from "next/link"

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">

      <div className="mt-5">

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Membresía</Table.Th>
              <Table.Th>Inicio</Table.Th>
              <Table.Th>Fin</Table.Th>
              <Table.Th>Pago</Table.Th>
              <Table.Th>Transacción</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(2)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td className="font-semibold">Nivel 0</Table.Td>
                <Table.Td>22/08/2022</Table.Td>
                <Table.Td>23/09/2022</Table.Td>
                <Table.Td>Pago#123123</Table.Td>
                <Table.Td>T-1231231231</Table.Td>
                <Table.Td>
                  <Link href="/payment-memberships/1" className="text-primary font-semibold hover:underline">
                    Ver detalles
                  </Link>
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

