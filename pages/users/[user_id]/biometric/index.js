import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import InputGroup from "@/components/utility/InputGroup";
import Table from "@/components/Table";
import Link from "next/link";
import ViewPhotoBtn from "@/components/ViewPhotoBtn";

const Biometric = () => {
  return (
    <UserLayout pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="mt-5 space-y-6">
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
          <button className="self-stretch rounded bg-primary px-3 font-medium text-white ring-offset-2 focus:ring-2">
            Buscar
          </button>
        </div>

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>Horario</Table.Th>
              <Table.Th>Ubicación</Table.Th>
              <Table.Th>Tipo</Table.Th>
              <Table.Th>Archivo adjunto</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(10)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td className="font-semibold">#E12341RF2</Table.Td>
                <Table.Td className="flex items-center gap-4">
                  <img
                    src="/assets/img/sample/user-2.png"
                    alt=""
                    className="block aspect-square w-11 rounded-full object-cover"
                  />
                  <div>
                    <p>Carlos Pérez Guerrero</p>
                    <p>UI123123</p>
                  </div>
                </Table.Td>
                <Table.Td>
                  <dd>10:00 hrs</dd>
                  <dd>11/03/2022</dd>
                </Table.Td>
                <Table.Td>
                  <dd>Av. Navarrete 403</dd>
                  <dd className="font-semibold">-12.091307, -77.042053</dd>
                </Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1.5 text-sm font-semibold text-black">
                    <svg
                      className="mr-1.5 h-2 w-2 text-black"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    SALIDA
                  </span>
                </Table.Td>
                <Table.Td>
                  <ViewPhotoBtn
                    headerTitle="Ruta #E12341RF212"
                    user={{
                      id: "UI123123",
                      name: "Carlos Pérez Guerrero",
                      avatar: "/assets/img/sample/user-3.png",
                    }}
                    className="font-semibold text-primary hover:underline"
                  >
                    Ver foto
                  </ViewPhotoBtn>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default Biometric;
