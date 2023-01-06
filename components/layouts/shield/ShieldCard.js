import classNames from "classnames";
import React, { createElement } from "react";

const CardWrapper = ({ as = 'div', className = '', ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames("items-center gap-7 bg-white px-5 py-10 sm:flex 2xl:block", className),
  })
}

const ShieldCard = () => {
  const data = [
    {
      key: "Administradores",
      value: (
        <>
          Juan Jesús Ledesma
          <br />
          Lucia Candiotti
        </>
      ),
    },
    {
      key: "N° de Miembros",
      value: "08",
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

  if (true) {
    return (
      <CardWrapper>
        <div className="text-center">
          <img
            className="mx-auto aspect-square w-24 rounded-full"
            src="/assets/img/sample/companies/fanta.png"
            alt="Fanta"
          />
          <h4 className="mt-3 text-lg font-semibold">Familia</h4>
          <p className="text-secondary">ID UI123123</p>
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

  return <CardWrapper />

};

export default ShieldCard;
