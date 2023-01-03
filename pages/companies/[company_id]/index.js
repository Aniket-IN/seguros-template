import React from "react";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import CompanyLayout from "@/components/layouts/CompanyLayout";
import Link from "next/link";

export default function index() {
  return (
    <CompanyLayout pageTitle="Empresas" headerTitle="Empresas">
      <div className="mt-5">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nombre</Table.Th>
              <Table.Th>N° de miembros</Table.Th>
              <Table.Th>Fecha de Creación</Table.Th>
              <Table.Th>Membresía</Table.Th>
              <Table.Th>Admin</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(11)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <div className="flex min-w-fit items-center gap-4">
                    <div className="flex aspect-square w-11 items-center justify-center rounded-full bg-warning text-2xl text-white">
                      T
                    </div>
                    <div>
                      <p className="font-semibold">Nombre de Escudo</p>
                      <p>ESC123123</p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>8</Table.Td>
                <Table.Td>23/09/2022</Table.Td>
                <Table.Td>Nivel 1</Table.Td>
                <Table.Td className="text-secondary">
                  <p>Alexander Quiroz López</p>
                  <p>ID UI 2457896</p>
                </Table.Td>
                <Table.Td>
                  <Link
                    href="/shields/1"
                    className="font-semibold text-primary hover:underline"
                  >
                    Ver detalles
                  </Link>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <SamplePagination />
      </div>
    </CompanyLayout>
  );
}
