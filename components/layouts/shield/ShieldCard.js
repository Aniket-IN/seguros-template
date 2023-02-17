import Badge from "@/components/Badge";
import ProfilePicture from "@/components/ProfilePicture";
import classNames from "classnames";
import { format } from "date-fns";
import React, { createElement } from "react";

const CardWrapper = ({ as = "div", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(
      "items-center gap-7 bg-white px-5 py-10 sm:flex 2xl:block",
      className
    ),
  });
};

const ShieldCard = ({ shield, isSuccess }) => {
  const data = [
    {
      key: "Administradores",
      value: shield?.admin?.full_name,
    },
    {
      key: "N° de Miembros",
      value: shield?.members_count,
    },
    {
      key: "Fecha de creación",
      value: shield?.created_at
        ? format(new Date(shield.created_at), "dd/MM/yy")
        : "",
    },
    {
      key: "Tipo de Usuario",
      value: shield?.shield_type,
    },
  ];

  if (isSuccess) {
    return (
      <CardWrapper>
        <div className="text-center">
          <ProfilePicture
            className="mx-auto aspect-square w-24 rounded-full object-cover"
            src={
              shield.logo
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${shield.logo}`
                : null
            }
            alt={shield.shield_name}
          />
          <h4 className="mt-3 text-lg font-semibold capitalize">
            {shield.shield_name}
          </h4>
          <p className="text-secondary">ID {shield.id}</p>
          <div className="mt-1.5">
            {shield.condition ? (
              <Badge.Md className="bg-green-100 text-green-600" text="Activo" />
            ) : (
              <Badge.Md
                className="bg-green-100 text-green-600"
                text="Inactive"
              />
            )}
          </div>
        </div>

        <div className="flex-grow">
          <h5 className="border-b pb-2 text-lg font-semibold">Detalles</h5>
          <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-5 text-sm sm:grid-cols-2 2xl:grid-cols-1">
            {data.map((item) => {
              return (
                <dl key={item.key}>
                  <dd className="font-semibold">{item.key}</dd>
                  <dd className="text-secondary">{item.value}</dd>
                </dl>
              );
            })}
          </div>
        </div>
      </CardWrapper>
    );
  }

  return <CardWrapper />;
};

export default ShieldCard;
