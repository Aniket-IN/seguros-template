import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import React from 'react'

const MembershipsCountCard = () => {
  const data = {
    items: [
      {
        id: 1,
        title: "Gratuito",
        count: 100,
        this_month_count: 100,
        last_month_count: 100,
      },
      {
        id: 2,
        title: "Básico",
        this_month_count: 100,
        last_month_count: 100,
      },
      {
        id: 3,
        title: "Profesional",
        this_month_count: 100,
        last_month_count: 100,
      },
      {
        id: 4,
        title: "Empresarial",
        this_month_count: 100,
        last_month_count: 100,
      },
    ],
  }

  return (
    <div className="bg-white divide-y flex flex-col">
      <div className="p-4 flex-grow overflow-auto">
        <h3 className="font-semibold text-sm mb-2">Membresías adquiridas</h3>


        <ul className="mt-3 space-y-1.5">
          <li className="py-1 px-4 text-xs grid grid-cols-3 gap-3 items-center text-secondary">
            <dd>Tipo</dd>
            <dd>Esté mes</dd>
            <dd>Mes pasado</dd>
          </li>
          {
            data.items.map((item) => {
              return (
                <li key={item.id} className="py-2.5 px-4 text-sm grid grid-cols-3 gap-3 items-center bg-accent text-secondary-4">
                  <span>{item.title}</span>
                  <span>{item.this_month_count}</span>
                  <span>{item.last_month_count}</span>
                </li>
              )
            })
          }
        </ul>
      </div>

      <Link href="/memberships" className="flex justify-between items-center px-4 py-2.5 text-primary text-sm">
        <span>Ver membresías</span>
        <ChevronRightIcon className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default MembershipsCountCard