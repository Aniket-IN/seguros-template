import React from 'react'
import Admin from "@/components/layouts/Admin"
import SamplePagination from "@/components/SamplePagination"
import PaymentMembershipsTable from "@/components/payment-memberships/PaymentMembershipsTable"
import TopBar from "@/components/payment-memberships/TopBar"


export default function PaymentMemberships() {
  return (
    <Admin pageTitle="Pagos Membresías" headerTitle="Pagos Membresías">

      <TopBar />

      <div className="container-padding">
        <PaymentMembershipsTable />
        <SamplePagination />
      </div>
    </Admin>
  )
}


