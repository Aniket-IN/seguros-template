import React, { Fragment } from 'react'
import Table from "../Table"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const ShieldsTable = () => {

  const headers = [
    'Escudo',
    'Administrador',
    'Tipo de Escudo',
    'N° de miembros',
    'Fecha de Creación',
    'Estado',
    'Acción',
  ];

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {
            headers.map((header) => (
              <Table.Th key={header}>{header}</Table.Th>
            ))
          }
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {[...Array(6)].map((user, index) => {
          return (
            <Fragment key={index}>
              <Table.Tr>
                <Table.Td>
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/assets/img/sample/companies/fanta.png" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-black">Familia</div>
                      <div className="text-black">ESC124587</div>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <dd>Juan Jesús Alvarez</dd>
                  <dd>U54872256</dd>
                </Table.Td>
                <Table.Td>
                  Corporativo
                </Table.Td>
                <Table.Td>
                  8
                </Table.Td>
                <Table.Td>
                  25/05/22
                </Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                    <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Activo
                  </span>
                </Table.Td>
                <Table.Td>
                  <ActionBtn />
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/assets/img/sample/companies/coca-cola.jpg" alt="Coca Cola" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-black">Coca cola</div>
                      <div className="text-black">ESC123123</div>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <dd>Juan Jesús Alvarez</dd>
                  <dd>U54872256</dd>
                </Table.Td>
                <Table.Td>
                  Corporativo
                </Table.Td>
                <Table.Td>
                  8
                </Table.Td>
                <Table.Td>
                  25/05/22
                </Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                    <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Activo
                  </span>
                </Table.Td>
                <Table.Td>
                  <ActionBtn />
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img className="h-full w-full rounded-full" src="/assets/img/sample/companies/hermes.png" alt="Hermes" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-black">Coca cola</div>
                      <div className="text-black">ESC123123</div>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <dd>Juan Jesús Alvarez</dd>
                  <dd>U54872256</dd>
                </Table.Td>
                <Table.Td>
                  Corporativo
                </Table.Td>
                <Table.Td>
                  8
                </Table.Td>
                <Table.Td>
                  25/05/22
                </Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
                    <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Activo
                  </span>
                </Table.Td>
                <Table.Td>
                  <ActionBtn />
                </Table.Td>
              </Table.Tr>
            </Fragment>
          )
        })}
      </Table.Tbody>
    </Table>
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
                  href="/shields/1"
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
                  Suspender escudo
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ShieldsTable