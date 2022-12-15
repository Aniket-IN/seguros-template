import { ChevronRightIcon } from "@heroicons/react/20/solid"
import React from 'react'

const RegisteredUsersCountCard = () => {
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
    <div className="bg-white divide-y">
      <div className="p-4">
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
                <li className="py-2.5 px-4 text-sm flex justify-between bg-accent text-secondary-4">
                  <span>{item.title}</span>
                  <span>{item.count}</span>
                </li>
              )
            })
          }
        </ul>
      </div>

      <a className="flex justify-between items-center px-4 py-2.5 text-primary text-sm">
        <span>Ver Usuarios</span>
        <ChevronRightIcon className="w-5 h-5" />
      </a>
    </div>
  )
}

export default RegisteredUsersCountCard