import React, { Fragment } from "react";
import Table from "../Table";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Badge from "../Badge";
import { format } from "date-fns";

const UsersTable = ({
  users = [],
  isLoading,
  isError,
  error,
  sort,
  setSort
}) => {
  return (
    <Table
      dataCount={users.length}
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th sort={sort} setSort={setSort} sortable name="id">ID Usuario</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable name="full_name">Nombre</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable name="phone">Teléfono</Table.Th>
          <Table.Th>Correo</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable name="created_at">Fecha de Creación</Table.Th>
          <Table.Th>Tipo</Table.Th>
          <Table.Th>Estado</Table.Th>
          <Table.Th>Acción</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {!isLoading &&
          !isError &&
          users?.map((user) => (
            <Row user={user} key={user.id} />
          ))}
      </Table.Tbody>
    </Table>
  );
};


const Row = ({ user }) => {
  return (
    <Table.Tr>
      <Table.Td>{user.id}</Table.Td>
      <Table.Td className="capitalize">{user.full_name}</Table.Td>
      <Table.Td>{user.phone}</Table.Td>
      <Table.Td>{user?.user?.email}</Table.Td>
      <Table.Td>{format(new Date(user.created_at), 'dd/MM/yy')}</Table.Td>
      <Table.Td>{user.user_type}</Table.Td>
      <Table.Td>
        {
          user.suspended ? (
            <Badge.Md text="Suspended" className="bg-red-100 text-danger" />
          )
            : (
              <Badge.Md text="Activo" className="bg-green-100 text-green-600" />
            )
        }
      </Table.Td>
      <Table.Td>
        <ActionBtn user={user} />
      </Table.Td>
    </Table.Tr>
  )
}

const ActionBtn = ({ user }) => {
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
                  href={`/users/${user.id}`}
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
