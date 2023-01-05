import React from "react";
import Table from "../Table";
import Link from "next/link";
import { format } from "date-fns";
import classNames from "classnames";

const PaymentMembershipsTable = ({
  memberships = [],
  isLoading,
  isError,
  error,
  sort,
  setSort
}) => {

  return (
    <Table
      dataCount={memberships.length}
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th sort={sort} setSort={setSort} sortable={true} name="order_id">ID Orden</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable={true} name="date">Fecha</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable={true} name="transaction_id">ID transacción</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable={true} name="membership">Membresía</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable={true} name="total_amount">Monto</Table.Th>
          <Table.Th>ID usuario</Table.Th>
          <Table.Th sort={sort} setSort={setSort} sortable={true} name="conditions">Estado</Table.Th>
          <Table.Th>Acción</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {!isLoading &&
          !isError &&
          memberships?.map((membership) => (
            <Row membership={membership} key={membership.id} />
          ))}
      </Table.Tbody>
    </Table>
  );
};
const Row = ({ membership }) => {
  return (
    <Table.Tr>
      <Table.Td>{membership.order_id}</Table.Td>
      <Table.Td>{format(new Date(membership.date), "d/MM/yy")}</Table.Td>
      <Table.Td>{membership.transaction_id}</Table.Td>
      <Table.Td>{membership.membership}</Table.Td>
      <Table.Td>$ {membership.total_amount}</Table.Td>
      <Table.Td>{membership.userprofile.id}</Table.Td>
      <Table.Td className={classNames(
        "font-semibold",
        membership.conditions?.toLowerCase() == 'effected' && "text-success",
        membership.conditions?.toLowerCase() == 'failed' && 'text-danger'
      )}>
        {membership.conditions}
      </Table.Td>
      <Table.Td className="font-semibold">
        <Link
          href={`/payment-memberships/${membership.id}`}
          className="font-semibold text-primary hover:underline"
        >
          Ver detalles
        </Link>
      </Table.Td>
    </Table.Tr>
  );
};

export default PaymentMembershipsTable;
