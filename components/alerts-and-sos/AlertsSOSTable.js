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

const AlertsSOSTable = () => {
  const headers = [
    "ID Alerta",
    "Usuario",
    "Ubicación",
    "Horario",
    "Estado",
    "Evidencia",
    "Comentario",
    "Historial modif.",
    "Calificación",
  ];

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {headers.map((header) => (
            <Table.Th key={header}>{header}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {[...Array(20)].map((user, index) => {
          return (
            <Fragment key={index}>
              <Table.Tr>
                <Table.Td>
                  {index == 0 ? (
                    <div>
                      <dd className="font-semibold text-danger">SOS</dd>
                      <dd>SOS#1231231</dd>
                    </div>
                  ) : (
                    <div>
                      <dd className="font-semibold">Alerta - Policial</dd>
                      <dd>Alerta#1231231</dd>
                    </div>
                  )}
                </Table.Td>
                <Table.Td>
                  <dd>Juan Jesús Alvarez</dd>
                  <dd>U54872256</dd>
                </Table.Td>
                <Table.Td>-12.091307, -77.042053</Table.Td>
                <Table.Td>
                  <dd>25/05/22</dd>
                  <dd>12:00 Hrs</dd>
                </Table.Td>
                <Table.Td>
                  {!!(index == 0) && (
                    <StatusToggleBtn
                      className="bg-danger text-danger"
                      text="Pendiente"
                    />
                  )}
                  {!!(index == 1) && (
                    <StatusToggleBtn
                      className="bg-warning text-warning"
                      text="Ayuda enviada"
                    />
                  )}
                  {![0, 1].includes(index) && (
                    <StatusToggleBtn
                      className="bg-primary text-primary"
                      text="Resuelto"
                    />
                  )}
                </Table.Td>
                <Table.Td className="font-semibold">
                  <EvidenceModalBtn className="hover:text-primary hover:underline">
                    Evidencia#123123
                  </EvidenceModalBtn>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <CommentsModalBtn className="hover:text-primary hover:underline">
                    Ver comentarios
                  </CommentsModalBtn>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <ModificationHistoryModalBtn className="hover:text-primary">
                    Ver historial
                  </ModificationHistoryModalBtn>
                </Table.Td>
                <Table.Td className="font-semibold">
                  <QualificationModalBtn className="group flex items-center gap-2 hover:text-primary hover:underline">
                    <StarIcon className="h-6 w-6 text-warning group-hover:text-primary" />
                    <span>4</span>
                  </QualificationModalBtn>
                </Table.Td>
              </Table.Tr>
            </Fragment>
          );
        })}
      </Table.Tbody>
    </Table>
  );
};

const StatusToggleBtn = ({
  as = "button",
  className = "",
  text = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);

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
              {text}
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
