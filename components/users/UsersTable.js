import React, { Fragment } from "react";
import Table from "../Table";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const UsersTable = () => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID Usuario</Table.Th>
          <Table.Th>Nombre</Table.Th>
          <Table.Th>Teléfono</Table.Th>
          <Table.Th>Correo</Table.Th>
          <Table.Th className="flex cursor-pointer items-center justify-between gap-4">
            <span>Fecha de Creación</span>
            <ChevronDownIcon className="h-5 w-5" />
          </Table.Th>
          <Table.Th>Tipo</Table.Th>
          <Table.Th>Estado</Table.Th>
          <Table.Th>Acción</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {[...Array(20)].map((user, index) => {
          return (
            <Table.Tr key={index}>
              <Table.Td>UI123123</Table.Td>
              <Table.Td>Carlos Pérez</Table.Td>
              <Table.Td>+593 987 654 321</Table.Td>
              <Table.Td>ejemplo@gmail.com</Table.Td>
              <Table.Td>25/05/22</Table.Td>
              <Table.Td>Corporativo</Table.Td>
              <Table.Td>
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-600">
                  <svg
                    className="mr-1.5 h-2 w-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx={5} cy={4} r={3} />
                  </svg>
                  Activo
                </span>
              </Table.Td>
              <Table.Td>
                <ActionBtn />
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
  );
};

const ActionBtn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-2 rounded-md  bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-primary">
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
        <Menu.Items className="absolute right-0 z-[1]  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/users/1"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
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
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
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
  );
};

export default UsersTable;
