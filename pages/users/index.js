import React from 'react'
import Admin from "@/components/layouts/Admin"
import UsersTable from "@/components/users/UsersTable"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { DocumentTextIcon } from "@heroicons/react/24/outline"
import InputGroup from "@/components/utility/InputGroup"

const Users = () => {
  return (
    <Admin pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="bg-neutral">
        <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div>
              <InputGroup>
                <InputGroup.Input
                  id="search"
                  type="search"
                  name="search"
                />
              </InputGroup>
            </div>

            <button
              type="button"
              className="self-stretch w-1/2 sm:w-auto sm:min-w-[150px] gap-2 inline-flex items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-success text-white"
            >
              <DocumentTextIcon className="w-5 h-5" />
              Descargar Excel
            </button>
          </div>
          <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div>
        </div>
      </div>


      <div className="container-padding">
        <UsersTable />
      </div>

    </Admin>
  )
}

export default Users