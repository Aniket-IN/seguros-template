import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import Link from "next/link";

const Shields = () => {
  return (
    <UserLayout pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="mt-5">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Escudo</Table.Th>
              <Table.Th>Administrador</Table.Th>
              <Table.Th>Fecha Creación</Table.Th>
              <Table.Th>Usuario en escudo</Table.Th>
              <Table.Th>Jerarquía</Table.Th>
              <Table.Th>N° Miembros</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(11)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <div className="flex min-w-fit items-center gap-4">
                    <img
                      src="/assets/img/sample/companies/fanta.png"
                      className="block aspect-square w-11 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p>Carlos Pérez Guerrero</p>
                      <p>UI123123</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <p>Nombre de Admin</p>
                  <p>ID 1231231</p>
                </Table.Td>
                <Table.Td>25/05/22</Table.Td>
                <Table.Td>Estandar</Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center rounded-full bg-warning bg-opacity-20 px-3 py-1.5 text-sm font-semibold text-warning">
                    <svg
                      className="mr-1.5 h-2 w-2 text-warning"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Colaborativo
                  </span>
                </Table.Td>
                <Table.Td>
                  <div className="flex items-center gap-5">
                    <span>7</span>
                    <Link
                      href="/shields/1"
                      className="font-semibold text-primary hover:underline"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <SamplePagination />
      </div>
    </UserLayout>
  );
};

export default Shields;
