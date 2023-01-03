import React from "react";
import Table from "@/components/Table";
import SamplePagination from "@/components/SamplePagination";
import CompanyLayout from "@/components/layouts/CompanyLayout";

export default function PromoCodes() {
  return (
    <CompanyLayout pageTitle="Empresas" headerTitle="Empresas">
      <div className="mt-5">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID de código</Table.Th>
              <Table.Th>Código de promo</Table.Th>
              <Table.Th>Membresia</Table.Th>
              <Table.Th>% de descuento</Table.Th>
              <Table.Th>Stock total</Table.Th>
              <Table.Th>Etiqueta</Table.Th>
              <Table.Th>Estado</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(1)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>XYZ123123</Table.Td>
                <Table.Td>FANTA2000</Table.Td>
                <Table.Td>Nivel 1</Table.Td>
                <Table.Td>20%</Table.Td>
                <Table.Td>125</Table.Td>
                <Table.Td>Código para Fanta - Lorem Ipsum</Table.Td>
                <Table.Td>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-600">
                    <svg
                      className="mr-1.5 h-2 w-2 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx={5} cy={4} r={3} />
                    </svg>
                    Activo
                  </span>
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
