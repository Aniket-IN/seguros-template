import ProfilePicture from "@/components/ProfilePicture";
import SectionHeading from "@/components/SectionHeading";
import Table from "@/components/Table";
import Modal from "@/components/utility/Modal";
import { format } from "date-fns";
import React, { createElement, useState } from "react";

const RouteDetailsModalBtn = ({ as = "button", route = {}, ...props }) => {
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
            <h2 className="text-lg font-medium">Ruta #{route.route_id}</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="flex gap-4 text-sm">
                <ProfilePicture
                  src={route.member?.image ? `${process.env.NEXT_PUBLIC_HOSTNAME}${route.member?.image}` : null}
                  className="inline-block h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <dd className="capitalize">{route.member?.full_name}</dd>
                  <dd>{route.member?.id}</dd>
                </div>
              </div>
              <div className="aspect-video w-full bg-accent"></div>
              <div>
                {/* <SectionHeading>10:00 hrs - 19:20 hrs</SectionHeading> */}
                {/* <SectionHeading>10:00 hrs - 19:20 hrs</SectionHeading> */}
                <dd className="mt-1">{format(new Date(route.created_at), 'dd/MM/yy')}</dd>
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
                <dd>{route.max_speed} km/h</dd>
                <dd>{route.minimum_phone_battery}%</dd>
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
                {route.location?.map((location, index) => (
                  <Table.Tr key={location.id}>
                    <Table.Td>
                      <dd>{format(new Date(location.created_at), 'p')}</dd>
                      <dd>{format(new Date(location.created_at), 'dd/MM/yyyy')}</dd>
                    </Table.Td>
                    <Table.Td className="!whitespace-normal">
                      {location.location}
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
