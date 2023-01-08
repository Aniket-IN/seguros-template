import ProfilePicture from "@/components/ProfilePicture";
import Table from "@/components/Table";
import InputGroup from "@/components/utility/InputGroup";
import Modal from "@/components/utility/Modal";
import useAxios from "@/hooks/useAxios";
import { format } from "date-fns";
import React, { createElement, useState } from "react";
import { useQuery } from "react-query";

const LocationHistoryBtn = ({ as = "button", member, ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };



  const { axios } = useAxios()


  const fetchData = () => {
    return axios.get(`/api/shield/shield-members-locations/`, {
      params: {
        member_id: member.id
      }
    });
  }

  // React-query for data fetching
  const { isLoading, isError, refetch, isRefetching, isSuccess, data: response, error } = useQuery(
    `shield-member-${member.id}-location-history`,
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: open
    }
  );

  const items = response?.data ?? []

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
              <ProfilePicture
                src={member.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${member.image}` : null}
                className="inline-block h-11 w-11 rounded-full"
              />
              <div>
                <dd>{member.full_name}</dd>
                <dd>{member.id}</dd>
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
            <Table
              wrapperClassName="bg-accent px-4"
              dataCount={items.length}
              isLoading={isLoading}
              isError={isError}
              error={error}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Horario</Table.Th>
                  <Table.Th>Ubicación</Table.Th>
                  <Table.Th>Coordenada</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {!isLoading && !isError &&
                  items?.map((item) => (
                    <Table.Tr key={item.id}>
                      <Table.Td>
                        <dd>{format(new Date(item.created_at), 'p')}</dd>
                        <dd>{format(new Date(item.created_at), 'dd/MM/yyyy')}</dd>
                      </Table.Td>
                      <Table.Td className="!whitespace-normal">
                        {item.location}
                      </Table.Td>
                      <Table.Td className="font-semibold">
                        {item.lat_long}
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
