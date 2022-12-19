import React from 'react'
import Admin from "@/components/layouts/Admin"
import SamplePagination from "@/components/SamplePagination"
import TopBar from "@/components/promo-codes/TopBar"
import AlertsSOSTable from "@/components/alerts-and-sos/AlertsSOSTable"


export default function AlertsAndSOS() {
  return (
    <Admin pageTitle="Códigos de Promo" headerTitle="Códigos de Promo">

      <TopBar />

      <div className="container-padding">
        <AlertsSOSTable />
        <SamplePagination />
      </div>
    </Admin>
  )
}


