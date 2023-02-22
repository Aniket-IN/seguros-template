import React, { Fragment } from "react";
import Table from "../Table";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { format } from "date-fns";
import Badge from "../Badge";

const ShieldsTable = ({
  shields = [],
  isLoading,
  isError,
  error,
  sort,
  setSort,
}) => {
  return (
    <Table
      wrapperClassName="pb-24 no-scrollbar"
      dataCount={shields.length}
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th
            sort={sort}
            setSort={setSort}
            sortable={true}
            name="shield_name"
          >
            Escudo
          </Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable={false} name="">
            Administrador
          </Table.Th>
          <Table.Th
            sort={sort}
            setSort={setSort}
            sortable={true}
            name="shield_type"
          >
            Tipo de Escudo
          </Table.Th>
          <Table.Th
            sort={sort}
            setSort={setSort}
            sortable={true}
            name="participent_count"
          >
            N° de miembros
          </Table.Th>
          <Table.Th
            sort={sort}
            setSort={setSort}
            sortable={true}
            name="created_at"
          >
            Fecha de Creación
          </Table.Th>
          <Table.Th
            sort={sort}
            setSort={setSort}
            sortable={true}
            name="condition"
          >
            Estado
          </Table.Th>
          <Table.Th sort={sort} setSort={setSort}>
            Acción
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {!isLoading &&
          !isError &&
          shields?.map((shield) => <Row shield={shield} key={shield.id} />)}
      </Table.Tbody>
    </Table>
  );
};

const Row = ({ shield = {} }) => {
  const lastAdmin = shield?.admin[shield.admin.length - 1] ?? {};

  return (
    <Table.Tr>
      <Table.Td>
        <div className="flex items-center">
          <div className="h-12 w-12 flex-shrink-0">
            <img
              className="h-full w-full rounded-full object-cover"
              src={shield.logo_url}
              alt={shield.shield_name}
            />
          </div>
          <div className="ml-4">
            <div className="font-semibold capitalize text-black">
              {shield.shield_name}
            </div>
            <div className="text-black">{shield.shield_code}</div>
          </div>
        </div>
      </Table.Td>
      <Table.Td>
        <dd className="capitalize">{lastAdmin.full_name}</dd>
        <dd>{lastAdmin.id}</dd>
      </Table.Td>
      <Table.Td>{shield.shield_type}</Table.Td>
      <Table.Td>{shield.members?.length}</Table.Td>
      <Table.Td>
        {shield.created_at
          ? format(new Date(shield.created_at), "dd/MM/yy")
          : ""}
      </Table.Td>
      <Table.Td>
        <Badge.Md
          text={shield.condition ? "Activo" : "Vencido"}
          className={
            shield.condition
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-black"
          }
        />
      </Table.Td>
      <Table.Td>
        <ActionBtn shield={shield} />
      </Table.Td>
    </Table.Tr>
  );
};

const ActionBtn = ({ shield }) => {
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
                  href={`/shields/${shield.id}`}
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
                  Suspender escudo
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ShieldsTable;
