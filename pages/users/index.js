import React, { Fragment } from 'react'
import Admin from "@/components/layouts/Admin"
import UsersTable from "@/components/users/UsersTable"
import TopBar from "@/components/users/TopBar"

const Users = () => {
  return (
    <Admin pageTitle="Usuarios" headerTitle="Usuarios">

      <TopBar />


      <div className="container-padding">
        <UsersTable />
      </div>

    </Admin>
  )
}

export default Users