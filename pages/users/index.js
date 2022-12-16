import React from 'react'
import Admin from "@/components/layouts/Admin"
import UsersTable from "@/components/users/UsersTable"
import TopBar from "@/components/users/TopBar"
import SamplePagination from "@/components/SamplePagination"

const Users = () => {
  return (
    <Admin pageTitle="Usuarios" headerTitle="Usuarios">
      
      <TopBar />

      <div className="container-padding">
        <UsersTable />
        <SamplePagination />
      </div>

    </Admin>
  )
}

export default Users