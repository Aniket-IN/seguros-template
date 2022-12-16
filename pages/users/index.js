import React from 'react'
import Admin from "@/components/layouts/Admin"
import UsersTable from "@/components/users/UsersTable"

const Users = () => {
  return (
    <Admin pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="bg-neutral">
        <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center justify-end gap-3">

        </div>
      </div>


      <div className="container-padding">
        <UsersTable />
      </div>

    </Admin>
  )
}

export default Users