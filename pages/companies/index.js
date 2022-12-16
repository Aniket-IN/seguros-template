import React from 'react'
import Admin from "@/components/layouts/Admin"
import CompaniesTable from "@/components/companies/CompaniesTable"
import SamplePagination from "@/components/SamplePagination"
import TopBar from "@/components/companies/TopBar"

const Companies = () => {
  return (
    <Admin pageTitle="Empresas" headerTitle="Empresas">

      <TopBar />

      <div className="container-padding">
        <CompaniesTable />
        <SamplePagination />
      </div>
    </Admin>
  )
}

export default Companies