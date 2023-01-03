import React from "react";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import CompanyLayout from "@/components/layouts/CompanyLayout";

export default function Members() {
  return (
    <CompanyLayout pageTitle="Empresas" headerTitle="Empresas">
      <div className="mt-5">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Miembro</Table.Th>
              <Table.Th>Fecha de Creación</Table.Th>
              <Table.Th>Nro de Escudos</Table.Th>
              <Table.Th>Membresía</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(11)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <div className="flex min-w-fit items-center gap-4">
                    <img
                      src="/assets/img/sample/user-1.png"
                      className="block aspect-square w-11 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p className="font-semibold">Carlos Pérez Guerrero</p>
                      <p>UI123123</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>23/09/2022</Table.Td>
                <Table.Td>3</Table.Td>
                <Table.Td>Nivel 4</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <SamplePagination />
      </div>
    </CompanyLayout>
  );
}
