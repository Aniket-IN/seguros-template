import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState } from "react";
import Table from "../Table";

const ModificationHistoryModalBtn = ({
  as = "button",
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-2xl overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Historial de modificación</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="!p-0">
            <div className="grid grid-cols-3 gap-5 p-5 text-sm">
              <div>
                <dd className="font-semibold">ID Alerta</dd>
                <dd className="font-semibold text-danger">SOS</dd>
                <dd>SOS#1231231</dd>
              </div>
              <div>
                <dd className="font-semibold">Usuario</dd>
                <dd>Juan Jesús Ledesma</dd>
                <dd>ID. 7584566</dd>
              </div>
              <div>
                <dd className="font-semibold">Horario creación</dd>
                <dd>25/05/22</dd>
                <dd>12:00 Hrs</dd>
              </div>
            </div>
            <div className="bg-accent py-2.5 px-4">
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Estado</Table.Th>
                    <Table.Th>Modificado por</Table.Th>
                    <Table.Th>Horario</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <span className="inline-flex items-center rounded-full bg-warning bg-opacity-20 px-3 py-1.5 text-sm font-semibold text-warning">
                        <svg
                          className="mr-1.5 h-2 w-2 text-warning"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx={5} cy={4} r={3} />
                        </svg>
                        Ayuda enviada
                      </span>
                    </Table.Td>
                    <Table.Td>
                      <div className="inline-flex items-center gap-3.5">
                        <div className="h-11 w-11">
                          <img
                            src="/assets/img/sample/user-2.png"
                            className="h-11 w-11 rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <dd>Mario Lopez</dd>
                          <dd>ID-UI123123</dd>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <dd>25/05/22</dd>
                      <dd>12:00 Hrs</dd>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <span className="inline-flex items-center rounded-full bg-primary bg-opacity-20 px-3 py-1.5 text-sm font-semibold text-primary">
                        <svg
                          className="mr-1.5 h-2 w-2 text-primary"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx={5} cy={4} r={3} />
                        </svg>
                        Resuelto
                      </span>
                    </Table.Td>
                    <Table.Td>
                      <div className="inline-flex items-center gap-3.5">
                        <div className="h-11 w-11">
                          <img
                            src="/assets/img/sample/user-2.png"
                            className="h-11 w-11 rounded-full"
                            alt=""
                          />
                        </div>
                        <div>
                          <dd>Mario Lopez</dd>
                          <dd>ID-UI123123</dd>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <dd>25/05/22</dd>
                      <dd>12:00 Hrs</dd>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Cerrar
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: classNames(className, "font-semibold hover:underline"),
        ...props,
      })}
    </>
  );
};

export default ModificationHistoryModalBtn;
