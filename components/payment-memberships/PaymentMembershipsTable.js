import React, { Fragment } from 'react'
import Table from "../Table"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const PaymentMembershipsTable = () => {
  const headers = [
    'ID Orden',
    'Fecha',
    'ID transacción',
    'Membresía',
    'Monto',
    'ID usuario',
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
        {[...Array(20)].map((user, index) => {
          return (
            <Fragment key={index}>
              <Table.Tr>
                <Table.Td>
                  Orden #154875
                </Table.Td>
                <Table.Td>
                  25/05/22
                </Table.Td>
                <Table.Td>
                  ID12473123
                </Table.Td>
                <Table.Td>
                  Nivel 2
                </Table.Td>
                <Table.Td>
                  $ 56.00
                </Table.Td>
                <Table.Td >
                  U2458796222
                </Table.Td>
                <Table.Td className="text-success font-semibold">
                  Efectuado
                </Table.Td>
                <Table.Td className="font-semibold">
                  <Link href="/payment-memberships/1" className="text-primary font-semibold hover:underline">
                    Ver detalles
                  </Link>
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
                  href="/users/1"
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
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default PaymentMembershipsTable