import useAxios from "@/hooks/useAxios"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import React from 'react'
import { useQuery } from "react-query"

const RegisteredUsersCountCard = ({ selectedMonth }) => {

  const { axios } = useAxios()

  const fetchData = () => {
    return axios.get('/api/dashboard/registered-users/', {
      params: {
        month: selectedMonth.value,
      },
    })
  };

  const { isLoading, data: response, isError, error } = useQuery(['registered-users-count', selectedMonth.value], fetchData, {
    refetchOnWindowFocus: false
  })

  const data = {
    total_users: 2750,
    last_month: 2500,
    items: [
      {
        id: 1,
        title: "Particulares",
        count: 100,
      },
      {
        id: 2,
        title: "Empresas",
        count: 100,
      },
      {
        id: 3,
        title: "Suspendidos",
        count: 75,
      },
    ],
  }

  return (
    <div className="bg-white divide-y flex flex-col">
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-sm mb-2">Usuarios registrados</h3>

        <div className="flex justify-between items-center">
          <span className="text-5xl">2750</span>
          <div className="text-right space-y-1">
            <dd className="text-secondary text-xs">Mes pasado</dd>
            <dd className="text-2xl">2500</dd>
          </div>
        </div>

        <ul className="mt-3 space-y-1.5">
          {
            data.items.map((item) => {
              return (
                <li key={item.id} className="py-2.5 px-4 text-sm flex justify-between bg-accent text-secondary-4">
                  <span>{item.title}</span>
                  <span>{item.count}</span>
                </li>
              )
            })
          }
        </ul>
      </div>

      <Link href="/users" className="flex justify-between items-center px-4 py-2.5 text-primary text-sm">
        <span>Ver Usuarios</span>
        <ChevronRightIcon className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default RegisteredUsersCountCard