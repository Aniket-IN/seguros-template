import React, { Fragment } from 'react'
import Admin from "@/components/layouts/Admin"
import UserRoleCard from "@/components/roles/UserRoleCard"
import SectionHeading from "@/components/SectionHeading"
import Table from "@/components/Table"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import AdminCreateModalBtn from "@/components/roles/AdminCreateModalBtn"


function index() {
  return (
    <Admin>
      <div className="container-padding py-7 flex flex-col lg:flex-row gap-5">

        <div className="w-full lg:max-w-lg">
          <UserRoleCard />
        </div>

        <div className="flex-grow space-y-5">
          <div className="p-5 bg-white space-y-5">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <SectionHeading>Roles de Administradores</SectionHeading>
              <AdminCreateModalBtn className="px-4 py-2 bg-primary text-white rounded text-sm ml-auto">+ Crear Admin</AdminCreateModalBtn>
            </div>
            <Table wrapperClassName="bg-accent px-3 flex-grow overflow-auto max-h-[1024px]" className="relative">
              <Table.Thead className="bg-accent sticky top-0 z-[2]">
                <Table.Tr>
                  <Table.Th>Usuario</Table.Th>
                  <Table.Th>Tipo</Table.Th>
                  <Table.Th>Fecha Creación</Table.Th>
                  <Table.Th>Ult. Actividad</Table.Th>
                  <Table.Th>Acciones</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {[...Array(20)].map((item, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <div className="flex items-center gap-3">
                        <img src="/assets/img/sample/user-2.png" className="block w-11 aspect-square object-cover" />
                        <div>
                          <dd className="text-base">Mario Lopez</dd>
                          <dd className="text-sm">ID-UI123123</dd>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>Superadmin</Table.Td>
                    <Table.Td>23/09/2022</Table.Td>
                    <Table.Td>23/09/2022, 18:00 hrs</Table.Td>
                    <Table.Td>
                      <ActionBtn />
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>

        </div>
      </div>
    </Admin>
  )
}


const ActionBtn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex gap-2 items-center justify-center w-full rounded-md  px-4 py-2 bg-accent text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-primary">
          Acción
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right right-0 z-[1]  absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Ver detalles
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Suspender cuenta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Editar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Eliminar
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default index