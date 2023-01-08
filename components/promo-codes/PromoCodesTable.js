import React, { Fragment, useState } from "react";
import Table from "../Table";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PromoCodeFormModal from "./PromoCodeFormModal";
import ConfirmationModal from "../utility/ConfirmationModal";
import Badge from "../Badge";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";
import { toast } from "react-hot-toast";

const PromoCodesTable = ({ promoCodes = [], isLoading, isError, error, sort, setSort, refetch }) => {
  return (
    <div>
      <Table
        wrapperClassName="pb-96 no-scrollbar"
        dataCount={promoCodes.length}
        isLoading={isLoading}
        isError={isError}
        error={error}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="code_id">ID de código</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="promo_code">Código de promo</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="start_duration">Duración</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="membership">Membresia</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="discount">% de descuento</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="stocks">Stock total</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="Etiquette">Etiqueta</Table.Th>
            <Table.Th sort={sort} setSort={setSort} sortable={true} name="state">Estado</Table.Th>
            <Table.Th>Acción</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {!isLoading &&
            !isError &&
            promoCodes?.map((promoCode) => (
              <Row refetch={refetch} promoCode={promoCode} key={promoCode.id} />
            ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

const Row = ({ promoCode, refetch }) => {
  return (
    <Table.Tr>
      <Table.Td>{promoCode.code_id}</Table.Td>
      <Table.Td>{promoCode.promo_code}</Table.Td>
      <Table.Td>
        {promoCode.start_duration} - {promoCode.end_duration}
      </Table.Td>
      <Table.Td>{promoCode.membership}</Table.Td>
      <Table.Td>{promoCode.discount}%</Table.Td>
      <Table.Td>125</Table.Td>
      <Table.Td>{promoCode.Etiquette}</Table.Td>
      <Table.Td>
        <Badge.Md
          text={promoCode.state ? "Activo" : "Vencido"}
          className={
            promoCode.state
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-black"
          }
        />
      </Table.Td>
      <Table.Td>
        <ActionBtn refetch={refetch} promoCode={promoCode} />
      </Table.Td>
    </Table.Tr>
  );
};

const ActionBtn = ({ promoCode, refetch }) => {
  const { axios } = useAxios()

  const [editOpen, setEditOpen] = useState(false);

  const [activateOpen, setActivateOpen] = useState(false);
  const [activateAlertOpen, setActivateAlertOpen] = useState(false);

  const [suspendOpen, setSuspendOpen] = useState(false);
  const [suspendAlertOpen, setSuspendAlertOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: promoCode,
  })

  const edit = handleSubmit((data) => {
    axios.patch(`/api/admin/promo-cod/${promoCode.id}/`, data)
      .then((response) => {
        toast.success("Promocode edited successfuly!")
        refetch()
        setEditOpen(false)
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
  })

  const activate = () => {

    axios.patch(`/api/admin/promo-cod/${promoCode.id}/`, { state: true, stocks: promoCode.stocks })
      .then((response) => {
        toast.success("Promocode activated!")
        refetch()
        setActivateOpen(false);
        setTimeout(() => {
          setActivateAlertOpen(true);
        }, 300);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
  };

  const suspend = () => {
    axios.patch(`/api/admin/promo-cod/${promoCode.id}/`, { state: false, stocks: promoCode.stocks })
      .then((response) => {
        toast.success("Promocode suspended!")
        refetch()
        setSuspendOpen(false);
        setTimeout(() => {
          setSuspendAlertOpen(true);
        }, 300);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
  };

  const deleteCode = () => {

    axios.delete(`/api/admin/promo-cod/${promoCode.id}/`)
      .then((response) => {
        toast.success("Promocode deleted!")
        refetch()
        setDeleteOpen(false);
        setTimeout(() => {
          setDeleteAlertOpen(true);
        }, 500);
      })
  };

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

      {/* Edit form modal */}
      <PromoCodeFormModal
        {...{ register, errors }}
        mode="edit"
        submit={edit}
        open={editOpen}
        setOpen={setEditOpen}
      />

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center gap-2 rounded-md  bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-primary">
            Acción
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
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
                  <button
                    onClick={() => setEditOpen(true)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Activar
                  </button>
                )}
              </Menu.Item>
              {!!promoCode.state && (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSuspendOpen(true)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Suspender
                    </button>
                  )}
                </Menu.Item>
              )}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setEditOpen(true)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
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
  );
};

export default PromoCodesTable;
