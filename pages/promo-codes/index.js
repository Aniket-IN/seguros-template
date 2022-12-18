import React from 'react'
import Admin from "@/components/layouts/Admin"
import SamplePagination from "@/components/SamplePagination"
import TopBar from "@/components/companies/TopBar"
import PromoCodesTable from "@/components/promo-codes/PromoCodesTable"


export default function PromoCodes() {
  return (
    <Admin pageTitle="Códigos de Promo" headerTitle="Códigos de Promo">

      <TopBar />

      <div className="container-padding">
        <PromoCodesTable />
        <SamplePagination />
      </div>
    </Admin>
  )
}


