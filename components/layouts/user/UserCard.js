import ProfilePicture from "@/components/ProfilePicture";
import { format } from "date-fns";
import React from 'react'

const UserCard = ({ data }) => {
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
      value: format(new Date(data.userprofile.created_at), 'dd/MM/yy'),
    },
    {
      key: "Tipo de Usuario",
      value: data.userprofile.user_type ?? 'User',
    },
  ];

  return (
    <div className="bg-white px-5 py-10 gap-7 sm:flex items-center 2xl:block">

      <div className="text-center">
        <ProfilePicture className="mx-auto w-24 aspect-square rounded-full" src={data.userprofile.image} alt="User 2" />
        <h4 className="mt-3 font-semibold text-lg">{data.userprofile.full_name}</h4>
        <p className="text-secondary">
          ID {data.userprofile.id}
        </p>
        <span className="mt-1.5 inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
          <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={5} cy={4} r={3} />
          </svg>
          Activo
        </span>
      </div>

      <div className="flex-grow">
        <h5 className="text-lg font-semibold pb-2 border-b">Detalles</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 gap-y-6 gap-x-5 text-sm mt-4">
          {
            items.map((item) => {
              return (
                <dl key={item.key}>
                  <dd className="font-semibold">{item.key}</dd>
                  <dd className="text-secondary">{item.value}</dd>
                </dl>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default UserCard