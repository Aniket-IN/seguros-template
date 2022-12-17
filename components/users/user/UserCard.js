import React from 'react'

const UserCard = () => {
  const data = [
    {
      key: "ID Usuario",
      value: "ID-UI123123",
    },
    {
      key: "Membresía",
      value: "Nivel 1",
    },
    {
      key: "Teléfono",
      value: "+52 987 654 321",
    },
    {
      key: "Correo",
      value: "ejemplo@gmail.com",
    },
    {
      key: "Fecha de creación",
      value: "25/05/22",
    },
    {
      key: "Tipo de Usuario",
      value: "Corporativo",
    },
  ];

  return (
    <div className="bg-white px-5 py-10">

      <div className="text-center">
        <img className="mx-auto w-24 aspect-square rounded-full" src="/assets/img/sample/user-2.png" alt="User 2" />
        <h4 className="mt-3 font-semibold text-lg">Carlos Pérez</h4>
        <p className="text-secondary">
          ID UI123123
        </p>
        <span className="mt-1.5 inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600">
          <svg className="mr-1.5 h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={5} cy={4} r={3} />
          </svg>
          Activo
        </span>
      </div>

      <div className="mt-7">
        <h5 className="text-lg font-semibold pb-2 border-b">Detalles</h5>
        <div className="space-y-6 text-sm mt-4">
          {
            data.map((item) => {
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