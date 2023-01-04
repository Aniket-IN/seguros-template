import ProfilePicture from "@/components/ProfilePicture";
import { format } from "date-fns";
import React from "react";

const UserCard = ({ data, isSuccess }) => {
  const items = [
    {
      key: "ID Usuario",
      value: `ID-${data.userprofile.id}`,
    },
    {
      key: "Membresía",
      value: data.membership,
    },
    {
      key: "Teléfono",
      value: data.userprofile.phone,
    },
    {
      key: "Correo",
      value: data.userprofile.email,
    },
    {
      key: "Fecha de creación",
      value: !!data?.userprofile?.created_at && format(new Date(data.userprofile.created_at), "dd/MM/yy"),
    },
    {
      key: "Tipo de Usuario",
      value: data.userprofile.user_type ?? "User",
    },
  ];

  return (
    <div className="items-center gap-7 bg-white px-5 py-10 sm:flex 2xl:block">
      <div className="text-center">
        <ProfilePicture
          className="mx-auto aspect-square w-24 rounded-full"
          src={data.userprofile.image}
          alt="User 2"
        />
        <h4 className="mt-3 text-lg font-semibold">
          {data.userprofile.full_name}
        </h4>
        <p className="text-secondary">ID {data.userprofile.id}</p>
        <span className="mt-1.5 inline-flex items-center rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-600">
          <svg
            className="mr-1.5 h-2 w-2 text-green-600"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={5} cy={4} r={3} />
          </svg>
          Activo
        </span>
      </div>

      <div className="flex-grow">
        <h5 className="border-b pb-2 text-lg font-semibold">Detalles</h5>
        <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-5 text-sm sm:grid-cols-2 2xl:grid-cols-1">
          {items.map((item) => {
            return (
              <dl key={item.key}>
                <dd className="font-semibold">{item.key}</dd>
                <dd className="text-secondary">{item.value}</dd>
              </dl>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
