import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

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
  };

  return (
    <div className="flex flex-col divide-y bg-white">
      <div className="flex-grow overflow-auto p-4">
        <h3 className="mb-2 text-sm font-semibold">Membresías adquiridas</h3>

        <ul className="mt-3 space-y-1.5">
          <li className="grid grid-cols-3 items-center gap-3 py-1 px-4 text-xs text-secondary">
            <dd>Tipo</dd>
            <dd>Esté mes</dd>
            <dd>Mes pasado</dd>
          </li>
          {data.items.map((item) => {
            return (
              <li
                key={item.id}
                className="grid grid-cols-3 items-center gap-3 bg-accent py-2.5 px-4 text-sm text-secondary-4"
              >
                <span>{item.title}</span>
                <span>{item.this_month_count}</span>
                <span>{item.last_month_count}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <Link
        href="/memberships"
        className="flex items-center justify-between px-4 py-2.5 text-sm text-primary"
      >
        <span>Ver membresías</span>
        <ChevronRightIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default MembershipsCountCard;
