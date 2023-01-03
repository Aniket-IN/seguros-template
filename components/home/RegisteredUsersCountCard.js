import useAxios from "@/hooks/useAxios";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

const RegisteredUsersCountCard = ({ selectedMonth }) => {
  const { axios } = useAxios();

  const fetchData = ({ month, year }) => {
    return axios.get("/api/dashboard/registered-users/", {
      params: {
        month,
        year,
      },
    });
  };

  const now = new Date();

  function padWithZero(num, targetLength) {
    return String(num).padStart(targetLength, "0");
  }

  const selectedDate = new Date(
    `${now.getFullYear()}-${padWithZero(
      selectedMonth.value,
      2
    )}-15T14:10:28.570073Z`
  );

  const previousDate = new Date(
    selectedDate.setMonth(selectedDate.getMonth() - 1)
  );
  const currentDate = new Date(
    `${now.getFullYear()}-${padWithZero(
      selectedMonth.value,
      2
    )}-15T14:10:28.570073Z`
  );

  const currentMonthQuery = useQuery(
    [`registered-users-count-this-month-${selectedMonth.value}`],
    () =>
      fetchData({
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const prevMonthQuery = useQuery(
    [`registered-users-count-prev-month-${selectedMonth.value}`],
    () =>
      fetchData({
        month: previousDate.getMonth() + 1,
        year: previousDate.getFullYear(),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const currentMonthData = currentMonthQuery?.data?.data?.data ?? {};
  const prevMonthData = prevMonthQuery?.data?.data?.data ?? {};

  const data = {
    total_users: currentMonthData.total_users,
    last_month: prevMonthData.total_users,
    items: [
      {
        id: 1,
        title: "Particulares",
        count: currentMonthData.individuals_users,
      },
      {
        id: 2,
        title: "Empresas",
        count: currentMonthData.companies,
      },
      {
        id: 3,
        title: "Suspendidos",
        count: currentMonthData.suspended,
      },
    ],
  };

  return (
    <div className="flex flex-col divide-y bg-white">
      <div className="flex-grow p-4">
        <h3 className="mb-2 text-sm font-semibold">Usuarios registrados</h3>

        <div className="flex items-center justify-between">
          <span className="text-5xl">{data.total_users}</span>
          <div className="space-y-1 text-right">
            <dd className="text-xs text-secondary">Mes pasado</dd>
            <dd className="text-2xl">{data.last_month}</dd>
          </div>
        </div>

        <ul className="mt-3 space-y-1.5">
          {data.items.map((item) => {
            return (
              <li
                key={item.id}
                className="flex justify-between bg-accent py-2.5 px-4 text-sm text-secondary-4"
              >
                <span>{item.title}</span>
                <span>{item.count}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <Link
        href="/users"
        className="flex items-center justify-between px-4 py-2.5 text-sm text-primary"
      >
        <span>Ver Usuarios</span>
        <ChevronRightIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default RegisteredUsersCountCard;
