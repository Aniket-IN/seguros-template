import React, { createElement, Fragment, useState } from "react";
import Table from "../Table";
import classNames from "classnames";
import { StarIcon } from "@heroicons/react/20/solid";
import EvidenceModalBtn from "../shields/EvidenceModalBtn";
import CommentsModalBtn from "./CommentsModalBtn";
import ModificationHistoryModalBtn from "./ModificationHistoryModalBtn";
import QualificationModalBtn from "./QualificationModalBtn";
import { Popover, Transition } from "@headlessui/react";
import ConfirmationModal from "../utility/ConfirmationModal";

const AlertsSOSTable = ({ alerts = [], isLoading, isSuccess, isError, error, sort, setSort }) => {
  return (
    <Table
      dataCount={alerts.length}
      isLoading={isLoading}
      isError={isError}
      error={error}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID Alerta</Table.Th>
          <Table.Th>Usuario</Table.Th>
          <Table.Th>Ubicación</Table.Th>
          <Table.Th>Horario</Table.Th>
          <Table.Th>Estado</Table.Th>
          <Table.Th>Evidencia</Table.Th>
          <Table.Th>Comentario</Table.Th>
          <Table.Th>Historial modif.</Table.Th>
          <Table.Th>Calificación</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {isSuccess && alerts?.map((alert, index) => <Row alert={alert} key={alert.id} />)}
      </Table.Tbody>
    </Table>
  );
};

const Row = ({ alert }) => {
  const type = alert?.category?.startsWith('alert') ? 'alert' : 'sos'

  return (
    <Table.Tr>
      <Table.Td>
        {!!(type == 'alert') && (
          <div>
            <dd className="font-semibold capitalize">{alert.category}</dd>
            <dd>Alert#{alert.id}</dd>
          </div>
        )}

        {!!(type == 'sos') && (
          <div>
            <dd className="font-semibold text-danger">SOS</dd>
            <dd>SOS#{alert.id}</dd>
          </div>
        )}
      </Table.Td >
      <Table.Td>
        <dd className="capitalize">{alert.userprofile.full_name}</dd>
        <dd>{alert.userprofile.id}</dd>
      </Table.Td>
      <Table.Td>{alert.userprofile.lat}, {alert.userprofile.long}</Table.Td>
      <Table.Td>
        <dd>{alert.alert_date}</dd>
        <dd>{alert.alert_time}</dd>
      </Table.Td>
      <Table.Td>
        <StatusToggleBtn
          status={alert.status}
          text="Pendiente"
        />
      </Table.Td>
      <Table.Td className="font-semibold">
        <EvidenceModalBtn alert={alert} className="hover:text-primary hover:underline">
          Evidencia#{alert.evidence_number}
        </EvidenceModalBtn>
      </Table.Td>
      <Table.Td className="font-semibold">
        <CommentsModalBtn alert={alert} className="hover:text-primary hover:underline">
          Ver comentarios
        </CommentsModalBtn>
      </Table.Td>
      <Table.Td className="font-semibold">
        <ModificationHistoryModalBtn alert={alert} className="hover:text-primary">
          Ver historial
        </ModificationHistoryModalBtn>
      </Table.Td>
      <Table.Td className="font-semibold">
        <QualificationModalBtn alert={alert} className="group flex items-center gap-2 hover:text-primary hover:underline">
          <StarIcon className="h-6 w-6 text-warning group-hover:text-primary" />
          <span>{alert.rating}</span>
        </QualificationModalBtn>
      </Table.Td>
    </Table.Tr >
  )
}

const StatusToggleBtn = ({
  as = "button",
  className = "",
  status,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const statusesMapping = {
    "resolve": {
      text: "Resuelto",
      className: "text-primary bg-primary",
    },
    "help sent": {
      text: "Ayuda enviada",
      className: "text-warning bg-warning",
    },
    "earning": {
      text: "Pendiente",
      className: "text-danger bg-danger",
    },
  }

  const initChangeStatus = ({ close }) => {
    setOpen(true);

    // close()
  };

  const changeStatus = () => {
    setOpen(false);
  };

  return (
    <>
      <ConfirmationModal
        open={open}
        close={() => setOpen(false)}
        type="warning"
        caption="¿Estás seguro que deseas modificar el estado?"
        confirmBtn={{
          show: true,
          text: "Modificar",
          className: "w-1/2",
          onClick: changeStatus,
        }}
        closeBtn={{
          show: true,
          text: "Cancelar",
          className: "w-1/2",
          onClick: () => setOpen(false),
        }}
      />
      <Popover as="div" className="relative inline-block text-left">
        {createElement(Popover.Button, {
          ...props,
          as: as,
          className: classNames(
            className,
            statusesMapping[status]?.className,
            "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-opacity-20"
          ),
          children: (
            <>
              <svg
                className="mr-1.5 h-2 w-2 "
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={5} cy={4} r={3} />
              </svg>
              {statusesMapping[status]?.text ?? status}
            </>
          ),
        })}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel className="absolute left-0 z-[1] mt-2 origin-top-left rounded-md border bg-white shadow-2xl  focus:outline-none">
            {({ close }) => (
              <div className="min-w-[300px] divide-y whitespace-normal py-1 text-xs">
                <button
                  onClick={() => initChangeStatus({ close })}
                  className="space-y-2 px-4 py-2.5 text-left hover:bg-slate-100"
                >
                  <StatusBadge
                    as="span"
                    className="bg-danger text-danger"
                    text="Pendiente"
                  />
                  <p>
                    Alerta nueva y requiere atención para enviar ayuda al
                    usuario.
                  </p>
                </button>
                <button
                  onClick={() => initChangeStatus({ close })}
                  className="space-y-2 px-4 py-2.5 text-left hover:bg-slate-100"
                >
                  <StatusBadge
                    as="span"
                    className="bg-warning text-warning"
                    text="Ayuda enviada"
                  />
                  <p>
                    Alerta nueva y requiere atención para enviar ayuda al
                    usuario.
                  </p>
                </button>
                <button
                  onClick={() => initChangeStatus({ close })}
                  className="space-y-2 px-4 py-2.5 text-left hover:bg-slate-100"
                >
                  <StatusBadge
                    as="span"
                    className="bg-primary text-primary"
                    text="Resuelto"
                  />
                  <p>
                    Alerta nueva y requiere atención para enviar ayuda al
                    usuario.
                  </p>
                </button>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

const StatusBadge = ({
  as = "button",
  className = "",
  text = "",
  ...props
}) => {
  return createElement(as, {
    ...props,
    className: classNames(
      className,
      "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-opacity-20"
    ),
    type: "button",
    children: (
      <>
        <svg className="mr-1.5 h-2 w-2 " fill="currentColor" viewBox="0 0 8 8">
          <circle cx={5} cy={4} r={3} />
        </svg>
        {text}
      </>
    ),
  });
};

export default AlertsSOSTable;
