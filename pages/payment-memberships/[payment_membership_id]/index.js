import PaymentMembershipLayout from "@/components/layouts/PaymentMembershipLayout"
import Table from "@/components/Table"
import React from 'react'

const index = () => {
  return (
    <PaymentMembershipLayout pageTitle="Pagos Membresías" headerTitle="Pagos Membresías">
      <div className="flex gap-5">
        <div className="w-2/3 bg-white p-5 space-y-5">
          <h2 className="font-bold text-lg">Orden #154875</h2>
          <div className="bg-accent px-4 pb-4">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Membresía</Table.Th>
                  <Table.Th>Cantidad</Table.Th>
                  <Table.Th>P. unitario</Table.Th>
                  <Table.Th>Total</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>Nivel 3</Table.Td>
                  <Table.Td>1</Table.Td>
                  <Table.Td>$ 85.00</Table.Td>
                  <Table.Td>$ 85.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td></Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Th>IVA(12%)</Table.Th>
                  <Table.Td>$ 85.00</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td></Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Th>TOTAL</Table.Th>
                  <Table.Th>$ 95.20</Table.Th>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </div>
        </div>

        <div className="w-1/3 bg-white p-5 space-y-7">
          <h2 className="font-bold text-lg">Orden #154875</h2>
          <div className="grid grid-cols-2 gap-y-7 gap-x-5 text-sm">
            <div>
              <dd className="font-semibold">ID de Transacción</dd>
              <dd>TR-1231231</dd>
            </div>
            <div>
              <dd className="font-semibold">Método de pago</dd>
              <dd>VISA-Online</dd>
            </div>
            <div>
              <dd className="font-semibold">Fecha</dd>
              <dd>23/09/2022 - 20:00hrs.</dd>
            </div>
            <div>
              <dd className="font-semibold">Dirección IP</dd>
              <dd>192.0.10.1</dd>
            </div>
            <div>
              <dd className="font-semibold">Dirección de pago</dd>
              <dd>México DF.</dd>
            </div>
            <div>
              <dd className="font-semibold">Cobro</dd>
              <dd className="font-bold text-success">Efectuado</dd>
            </div>
          </div>
        </div>
      </div>
    </PaymentMembershipLayout>
  )
}

export default index