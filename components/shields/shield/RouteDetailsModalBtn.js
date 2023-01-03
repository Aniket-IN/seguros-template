import SectionHeading from "@/components/SectionHeading";
import Table from "@/components/Table";
import Modal from "@/components/utility/Modal";
import React, { createElement, useState } from "react";

const RouteDetailsModalBtn = ({ as = "button", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-screen-lg overflow-hidden rounded bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Ruta #E12341RF212</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="flex gap-4 text-sm">
                <img
                  src="/assets/img/sample/user-2.png"
                  className="inline-block h-11 w-11 rounded-full"
                />
                <div>
                  <dd>Carlos Pérez Guerrero</dd>
                  <dd>UI123123</dd>
                </div>
              </div>
              <div className="aspect-video w-full bg-accent"></div>
              <div>
                <SectionHeading>10:00 hrs - 19:20 hrs</SectionHeading>
                <dd className="mt-1">11/03/2022</dd>
              </div>

              <div>
                <div className="relative flex items-center">
                  <div className="w-4">
                    <div className="absolute inset-y-0 flex items-center">
                      <span className="z-[1] inline-block h-2 w-2 rounded-full bg-black " />
                      <span
                        className="absolute top-4 left-[3px] h-[calc(100%+4px)] w-0.5 bg-black"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="py-2">Casa</div>
                </div>
                <div className="relative flex items-center">
                  <div className="w-4">
                    <div className="absolute inset-y-0 flex items-center">
                      <span className="z-[1] inline-block h-2 w-2 rounded-full bg-primary " />
                    </div>
                  </div>
                  <div className="py-2">Oficina</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-5 text-sm">
                <dd className="font-semibold">Velocidad máx</dd>
                <dd className="font-semibold">Batería mínima</dd>
                <dd>70 km/h</dd>
                <dd>34%</dd>
              </div>
            </div>

            <Table wrapperClassName="bg-accent px-4 h-full lg:max-h-full h-fit lg:h-auto lg:overflow-auto">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Horario</Table.Th>
                  <Table.Th>Ubicación</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {[...Array(7)].map((item, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      <dd>10:00 hrs</dd>
                      <dd>11/03/2022</dd>
                    </Table.Td>
                    <Table.Td className="!whitespace-normal">
                      P.º de las Jacarandas 375, Col del Gas, Azcapotzalco,
                      Ciudad de México.
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white text-black">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Descargar Ruta
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

export default RouteDetailsModalBtn;
