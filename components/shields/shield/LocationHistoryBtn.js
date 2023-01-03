import Table from "@/components/Table";
import InputGroup from "@/components/utility/InputGroup";
import Modal from "@/components/utility/Modal";
import React, { createElement, useState } from "react";

const LocationHistoryBtn = ({ as = "button", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-2xl overflow-hidden rounded bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Historial de Ubicaciones</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <div className="flex justify-between gap-3 p-5">
            <div className="flex gap-3 text-sm">
              <img
                src="/assets/img/sample/user-2.png"
                className="inline-block h-11 w-11 rounded-full"
              />
              <div>
                <dd>Carlos Pérez Guerrero</dd>
                <dd>UI123123</dd>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Buscar</span>
              <div>
                <InputGroup>
                  <InputGroup.Input
                    type="date"
                    className="!border-none bg-accent"
                  />
                </InputGroup>
              </div>
              <button className="rounded bg-primary py-1.5 px-3 font-medium text-white ring-offset-2 focus:ring-2">
                Buscar
              </button>
            </div>
          </div>
          <Modal.Body className="space-y-7 py-5">
            <Table wrapperClassName="bg-accent px-4">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Horario</Table.Th>
                  <Table.Th>Ubicación</Table.Th>
                  <Table.Th>Coordenada</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {[...Array(20)].map((item, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <dd>10:00 hrs</dd>
                      <dd>11/03/2022</dd>
                    </Table.Td>
                    <Table.Td className="!whitespace-normal">
                      P.º de las Jacarandas 375, Col del Gas, Azcapotzalco,
                      Ciudad de México.
                    </Table.Td>
                    <Table.Td className="font-semibold">
                      -12.091307, -77.042053
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Aceptar
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        ...props,
        onClick: () => setOpen(true),
      })}
    </>
  );
};

export default LocationHistoryBtn;
