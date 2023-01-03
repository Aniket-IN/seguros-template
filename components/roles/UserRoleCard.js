import React, { Fragment } from "react";
import SectionHeading from "../SectionHeading";
import { PencilIcon } from "@heroicons/react/24/solid";
import AdminEditModalBtn from "./AdminEditModalBtn";
import PasswordFormModalBtn from "./PasswordFormModalBtn";

const UserRoleCard = () => {
  const data = [
    {
      key: "Nombre completo",
      value: "Mario Lopez",
    },
    {
      key: "N°. de Identificación",
      value: "9871454196",
    },
    {
      key: "Correo electrónico",
      value: "ejemplo@gmail.com",
    },
    {
      key: "País",
      value: "Ecuador",
    },
    {
      key: "Teléfono",
      value: "(+57) 1234 567 890",
    },
  ];

  return (
    <div className="bg-white p-5 pb-14">
      <div className="flex flex-col gap-6">
        <div className="flex gap-5">
          <div className="flex items-center justify-center">
            <div className="h-28 w-28 flex-shrink-0">
              <img
                className="block h-28 w-28 rounded-full object-cover"
                src="/assets/img/sample/user-1.png"
                alt="User"
              />
            </div>
          </div>
          <div className="space-y-2.5">
            <h3 className="text-xl font-semibold">Lucas Rodriguez</h3>
            <span className="inline-flex items-center rounded-full bg-primary bg-opacity-20 px-3 py-1.5 text-sm font-semibold text-primary">
              <svg
                className="mr-1.5 h-2 w-2"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={5} cy={4} r={3} />
              </svg>
              Administrador
            </span>
            <div className="flex gap-5">
              <div className="rounded border px-4 py-2.5">
                <dd className="text-xs text-secondary">Escudos de Empresa</dd>
                <dd className="text-xl">124</dd>
              </div>
              <div className="rounded border px-4 py-2.5">
                <dd className="text-xs text-secondary">Miembros creados</dd>
                <dd className="text-xl">120</dd>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <SectionHeading>Datos de Administrador</SectionHeading>
            <AdminEditModalBtn className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 font-medium">
              <PencilIcon className="h-4 w-4" />
              <span>Editar</span>
            </AdminEditModalBtn>
          </div>
          <hr className="my-2" />

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            {data.map((item) => (
              <Fragment key={item.key}>
                <dd className="font-semibold">{item.key}</dd>
                <dd>{item.value}</dd>
              </Fragment>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <SectionHeading>Contraseña</SectionHeading>
            <PasswordFormModalBtn className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 font-medium">
              <PencilIcon className="h-4 w-4" />
              <span>Editar</span>
            </PasswordFormModalBtn>
          </div>
          <hr className="my-2" />

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <dd className="text-secondary">Contraseña</dd>
            <dd>***********</dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleCard;
