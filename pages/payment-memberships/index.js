import React from 'react'
import Admin from "@/components/layouts/Admin"
import SamplePagination from "@/components/SamplePagination"
import TopBar from "@/components/promo-codes/TopBar"
import PaymentMembershipsTable from "@/components/payment-memberships/PaymentMembershipsTable"


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


