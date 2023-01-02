import React, { Fragment, useState } from 'react'
import Table from "../Table"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import PromoCodeFormModal from "./PromoCodeFormModal"
import ConfirmationModal from "../utility/ConfirmationModal"
import Badge from "../Badge"
import { ImSpinner2 } from "react-icons/im"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const PromoCodesTable = ({ promoCodes = [], isLoading, isError, error }) => {
  const headers = [
    'ID de código',
    'Código de promo',
    'Duración',
    'Membresia',
    '% de descuento',
    'Stock total',
    'Etiqueta',
    'Estado',
    'Acción',
  ];

  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            {headers.map((header) => (
              <Table.Th key={header}>{header}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {isLoading && (
            <Table.Tr>
              <Table.Td colSpan="9">
                <div className="flex justify-center items-center min-h-[200px] ">
                  <div className="text-center text-slate-500">
                    <ImSpinner2 className="w-9 h-9 mx-auto animate-spin" />
                    <p className="mt-5">
                      &nbsp;&nbsp;&nbsp;Loading...
                    </p>
                  </div>
                </div>
              </Table.Td>
            </Table.Tr>
          )}

          {isError && (
            <Table.Tr>
              <Table.Td colSpan="9">
                <div className="flex justify-center items-center min-h-[200px] ">
                  <div className="text-center text-red-500">
                    <ExclamationTriangleIcon className="w-9 h-9 mx-auto" />
                    <p className="mt-5">
                      {error.message}
                    </p>
                  </div>
                </div>
              </Table.Td>
            </Table.Tr>
          )}

          {!isLoading && !isError && promoCodes?.map((promoCode) => <Row promoCode={promoCode} key={promoCode.id} />)}
        </Table.Tbody>
      </Table>
    </div>

  )
}

const Row = ({ promoCode }) => {
  return (
    <Table.Tr>
      <Table.Td>{promoCode.code_id}</Table.Td>
      <Table.Td>{promoCode.promo_code}</Table.Td>
      <Table.Td>{promoCode.start_duration} - {promoCode.end_duration}</Table.Td>
      <Table.Td>{promoCode.membership}</Table.Td>
      <Table.Td>{promoCode.discount}%</Table.Td>
      <Table.Td>125</Table.Td>
      <Table.Td>{promoCode.Etiquette}</Table.Td>
      <Table.Td>
        <Badge.Md text={promoCode.state ? "Activo" : 'Vencido'} className={promoCode.state ? "bg-green-100 text-green-600" : 'bg-gray-200 text-black'} />
      </Table.Td>
      <Table.Td>
        <ActionBtn />
      </Table.Td>
    </Table.Tr>
  )
}


const ActionBtn = () => {
  const [editOpen, setEditOpen] = useState(false)

  const [activateOpen, setActivateOpen] = useState(false)
  const [activateAlertOpen, setActivateAlertOpen] = useState(false)

  const [suspendOpen, setSuspendOpen] = useState(false)
  const [suspendAlertOpen, setSuspendAlertOpen] = useState(false)

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false)

  // const [data, setData] = useState()

  const edit = () => {
    setEditOpen(false)
  }

  const activate = () => {
    setActivateOpen(false)
    setTimeout(() => {
      setActivateAlertOpen(true)
    }, 300);
  }

  const suspend = () => {
    setSuspendOpen(false)
    setTimeout(() => {
      setSuspendAlertOpen(true)
    }, 300);
  }

  const deleteCode = () => {
    setDeleteOpen(false)
    setTimeout(() => {
      setDeleteAlertOpen(true)
    }, 300);
  }

  return (
    <>

      {/* Activation Modals */}
      <ConfirmationModal
        open={activateOpen}
        close={() => setActivateOpen(false)}
        type="success"
        caption="¿Desea activar este cupón?"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: activate,
        }}
        closeBtn={{
          show: false,
        }}
      />
      <ConfirmationModal
        open={activateAlertOpen}
        close={() => setActivateAlertOpen(false)}
        type="success"
        caption="Cupón activado"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: () => setActivateAlertOpen(false),
        }}
        closeBtn={{
          show: false,
        }}
      />


      {/* Suspend Modals */}
      <ConfirmationModal
        open={suspendOpen}
        close={() => setSuspendOpen(false)}
        type="danger"
        caption="¿Desea suspender este cupón?"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: suspend,
        }}
        closeBtn={{
          show: false,
        }}
      />
      <ConfirmationModal
        open={suspendAlertOpen}
        close={() => setSuspendAlertOpen(false)}
        type="success"
        caption="Cupón suspendido"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: () => setSuspendAlertOpen(false),
        }}
        closeBtn={{
          show: false,
        }}
      />

      {/* Delete Modals */}
      <ConfirmationModal
        open={deleteOpen}
        close={() => setDeleteOpen(false)}
        type="danger"
        caption="¿Desea eliminar este cupón?"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: deleteCode,
        }}
        closeBtn={{
          show: false,
        }}
      />
      <ConfirmationModal
        open={deleteAlertOpen}
        close={() => setDeleteAlertOpen(false)}
        type="success"
        caption="Cupón eliminado"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: () => setDeleteAlertOpen(false),
        }}
        closeBtn={{
          show: false,
        }}
      />

      <PromoCodeFormModal mode="edit" submit={edit} open={editOpen} setOpen={setEditOpen} />
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
                  <button
                    onClick={() => setEditOpen(true)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full block text-left px-4 py-2 text-sm'
                    )}
                  >
                    Ver detalles
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setActivateOpen(true)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full block text-left px-4 py-2 text-sm'
                    )}
                  >
                    Activar
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setSuspendOpen(true)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full block text-left px-4 py-2 text-sm'
                    )}
                  >
                    Suspender
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setEditOpen(true)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full block text-left px-4 py-2 text-sm'
                    )}
                  >
                    Editar
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setDeleteOpen(true)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'w-full block text-left px-4 py-2 text-sm'
                    )}
                  >
                    Eliminar
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default PromoCodesTable