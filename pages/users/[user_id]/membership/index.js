import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import Table from "@/components/Table";
import Link from "next/link";

const Membership = () => {
  return (
    <UserLayout pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="mt-5">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Membresía</Table.Th>
              <Table.Th>Inicio</Table.Th>
              <Table.Th>Fin</Table.Th>
              <Table.Th>Pago</Table.Th>
              <Table.Th>Transacción</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(2)].map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <p className="font-semibold">Nivel 0</p>
                </Table.Td>
                <Table.Td>22/08/2022</Table.Td>
                <Table.Td>23/09/2022</Table.Td>
                <Table.Td className="font-semibold">Pago#123123</Table.Td>
                <Table.Td>T-1231231231</Table.Td>
                <Table.Td>
                  <Link
                    href="/payment-memberships/1"
                    className="font-semibold text-primary hover:underline"
                  >
                    Ver detalles
                  </Link>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default Membership;
