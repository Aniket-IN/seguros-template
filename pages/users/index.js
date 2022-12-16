import React, { Fragment } from 'react'
import Admin from "@/components/layouts/Admin"
import UsersTable from "@/components/users/UsersTable"
import InputGroup from "@/components/utility/InputGroup"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { FunnelIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

const Users = () => {
  return (
    <Admin pageTitle="Usuarios" headerTitle="Usuarios">

      <div className="bg-neutral">
        <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center gap-3">
          <div className="flex-shrink-0 sm:w-auto w-full">
            <InputGroup className=" relative">
              <div className="w-9 p-1 px-1.5 text-secondary pl-3 absolute inset-y-0 left-0 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-full aspect-square" />
              </div>
              <InputGroup.Input
                id="search"
                type="search"
                name="search"
                className="pl-9"
                placeholder="Buscar"
              />
            </InputGroup>
          </div>

          <div className="flex items-center gap-3 flex-grow">


            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex gap-2 items-center justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-primary">
                  <FunnelIcon className="w-5 h-5" />
                  Filtros
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Lorem Ipsum
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
                          Lorem Ipsum
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>


            <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div>
          </div>
        </div>
      </div>


      <div className="container-padding">
        <UsersTable />
      </div>

    </Admin>
  )
}

export default Users