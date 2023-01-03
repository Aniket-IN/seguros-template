import PaymentMembershipLayout from "@/components/layouts/PaymentMembershipLayout"
import Table from "@/components/Table"
import useAxios from "@/hooks/useAxios"
import { format } from "date-fns"
import { useRouter } from "next/router"
import React from 'react'
import { useQuery } from "react-query"

const PaymentMembershipPage = () => {
  const router = useRouter()
  const { payment_membership_id } = router.query

  const { axios } = useAxios()

  const fetchData = () => {
    return axios.get(`/api/Membership/ship/${payment_membership_id}`)
  };

  const { isLoading, data: response, isError, error } = useQuery([`payment-membersip-${payment_membership_id}`], fetchData, {
    refetchOnWindowFocus: false
  })

  const data = response?.data?.data ?? {}

  return (
    <PaymentMembershipLayout data={data} pageTitle="Pagos Membresías" headerTitle="Pagos Membresías">
      <div className="flex-col md:flex-row flex gap-5">
        <div className="w-full md:w-2/3 bg-white p-5 space-y-5">
          <h2 className="font-bold text-lg">Orden #{data.order_id}</h2>
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
                  <Table.Td>{data.membership}</Table.Td>
                  <Table.Td>1</Table.Td>
                  <Table.Td>$ {data.unitary_amount}</Table.Td>
                  <Table.Td>$ {data.unitary_amount}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td></Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Th>IVA(12%)</Table.Th>
                  <Table.Td>$ {data.vat_amount}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td></Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Th>TOTAL</Table.Th>
                  <Table.Th>$ {data.total_amount}</Table.Th>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white p-5 space-y-7">
          <h2 className="font-bold text-lg">Orden #{data.order_id}</h2>
          <div className="grid grid-cols-2 gap-y-7 gap-x-5 text-sm">
            <div>
              <dd className="font-semibold">ID de Transacción</dd>
              <dd>{data.transaction_id}</dd>
            </div>
            <div>
              <dd className="font-semibold">Método de pago</dd>
              <dd>{data.payment_method}</dd>
            </div>
            <div>
              <dd className="font-semibold">Fecha</dd>
              <dd>
                {/* 23/09/2022 - 20:00hrs. */}
                {format(new Date(data.date), 'dd/MM/yyyy - p')}
              </dd>
            </div>
            <div>
              <dd className="font-semibold">Dirección IP</dd>
              <dd>{data.ipaddress}</dd>
            </div>
            <div>
              <dd className="font-semibold">Dirección de pago</dd>
              <dd>{data.payment_address}</dd>
            </div>
            <div>
              <dd className="font-semibold">Cobro</dd>
              <dd className="font-bold text-success">{data.conditions}</dd>
            </div>
          </div>
        </div>
      </div>
    </PaymentMembershipLayout>
  )
}

export default PaymentMembershipPage