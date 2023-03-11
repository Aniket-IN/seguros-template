import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState } from "react";
import Table from "../Table";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { useEffect } from "react";
const ModificationHistoryModalBtn = ({
  as = "button",
  alert,
  className = "",
  id = null,
  ...props
}) => {
  console.log("alert data", alert);
  const { axios } = useAxios();
  const fetchData = () => {
    const data = axios.get(`/api/alert/getalertmodifyhistory/?id=${alert.id}`);
    return data;
  };

  

  const {
    isLoading,
    isError,
    refetch,
    isRefetching,
    isSuccess,
    data: responseData,
    error,
  } = useQuery([], fetchData, {
    refetchOnWindowFocus: true,
    cacheTime: 0,
    enabled: true,
  });

  
  const history = responseData?.data;
  console.log("history--",history);

  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };

useEffect(() => {
 refetch(); 
},[open])


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
                {alert.type ? (
                  <dd className="font-semibold">Alert</dd>
                ) : (
                  <dd className="font-semibold text-danger">SOS</dd>
                )}

                <dd>{alert.type ? `Alert#${alert.id}` : `SOS#${alert.id}`} </dd>
              </div>
              <div>
                <dd className="font-semibold">Usuario</dd>
                <dd></dd>
                <dd>ID. {alert.userprofile.ui_id}</dd>
              </div>
              <div>
                <dd className="font-semibold">Horario creación</dd>
                <dd>{alert.alert_date?.slice(0, 10)}</dd>
                <dd>{alert.alert_time}</dd>
              </div>
            </div>
            <div className="bg-accent py-2.5 px-4">
              <Table
                isLoading={isLoading}
                isError={isError}
                error={error}
                dataCount={history?.data?.length}
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Estado</Table.Th>
                    <Table.Th>Modificado por</Table.Th>
                    <Table.Th>Horario</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {history?.data?.map((record, index) => {
                    return <Row record={record} key={index} />;
                  }).reverse()}
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

const Row = ({ record }) => {
  return (
    <>
      <Table.Tr>
        <Table.Td>
          {record.status === "Alerta enviada" ? (
            <span className="inline-flex items-center rounded-full bg-danger bg-opacity-20 px-3 py-1.5 text-sm font-semibold text-danger">
              <svg
                className="mr-1.5 h-2 w-2 text-danger"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={5} cy={4} r={3} />
              </svg>
              Pendiente
            </span>
          ) : record.status === "Ayuda enviada" ? (
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
          ) : record.status === "Alerta resuelta" ? (
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
          ) : (
            <>Status not found</>
          )}
        </Table.Td>
        <Table.Td>
          <div className="inline-flex items-center gap-3.5">
            <div className="h-11 w-11">
              <img
                src={
                  record.userprofile.image_url!=null
                    ? record.userprofile.image_url
                    : "/assets/img/default-profile-pic-1.jpg"
                }
                className="h-11 w-11 rounded-full"
                alt="not found"
              />
            </div>
            <div>
              <dd>{record.full_name}</dd>
              <dd>ID-{record.userprofile.ui_id}</dd>
            </div>
          </div>
        </Table.Td>
        <Table.Td>
          <dd>{record.updated_at.slice(0, 10)}</dd>
          <dd>{record.updated_at.slice(11, 19)}</dd>
        </Table.Td>
      </Table.Tr>
    </>
  );
};
