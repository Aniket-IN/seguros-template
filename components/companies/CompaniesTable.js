import React, { Fragment } from "react";
import Table from "../Table";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Badge from "../Badge";
import { format } from "date-fns";

const CompaniesTable = ({ companies = [], isLoading, isError, isSuccess, error, sort, setSort, refetch }) => {

  return (
    <Table
      dataCount={companies.length}
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Empresas</Table.Th>
          <Table.Th>Usuario Admin</Table.Th>
          <Table.Th>N° de escudos</Table.Th>
          <Table.Th>N° de usuarios</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable name="created_at">Fecha de Creación</Table.Th>
          <Table.Th>Estado</Table.Th>
          <Table.Th>Acción</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {isSuccess && companies.map((company) => <Row key={company.id} company={company} />)}
      </Table.Tbody>
    </Table>
  );
};

const Row = ({ company }) => {
  return (
    <Table.Tr>
      <Table.Td>
        <div className="flex items-center">
          <div className="h-12 w-12 flex-shrink-0">
            <img
              className="h-full w-full rounded-full object-cover"
              src={company.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${company.image}` : null}
              alt={company.name}
            />
          </div>
          <div className="ml-4">
            <div className="font-semibold text-black capitalize">{company.name}</div>
            <div className="text-black">{company.company_code}</div>
          </div>
        </div>
      </Table.Td>
      <Table.Td>
        <dd className="capitalize">{company.super_admin.userprofile.full_name}</dd>
        <dd>{company.super_admin.userprofile.id}</dd>
      </Table.Td>
      <Table.Td>
        <dd>{company.shields}</dd>
      </Table.Td>
      <Table.Td>{company.users}</Table.Td>
      <Table.Td>{format(new Date(company.created_at), 'dd/MM/yy')}</Table.Td>
      <Table.Td>
        {!!company.suspended ? (
          <Badge.Md text="Suspended" className="text-warning bg-warning bg-opacity-20" />
        ) : (
          <Badge.Md text="Activo" className="text-green-600 bg-green-100" />
        )}

      </Table.Td>
      <Table.Td>
        <ActionBtn company={company} />
      </Table.Td>
    </Table.Tr>
  )
}

const ActionBtn = ({ company }) => {
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
                  href={`/companies/${company.id}`}
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
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Suspender cuenta
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CompaniesTable;
