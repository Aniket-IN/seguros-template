import Badge from "@/components/Badge";
import { format } from "date-fns";
import React from "react";

const CompanyCard = ({ company = {}, isSuccess = false }) => {

  const data = [
    {
      key: "Nº de escudos",
      value: company.shields,
    },
    {
      key: "Asesor comercial",
      value: company?.super_admin?.userprofile?.full_name,
    },
    {
      key: "ID Asesor",
      value: company?.super_admin?.userprofile?.id,
    },
    {
      key: "Teléfono asesor",
      value: company?.super_admin?.userprofile?.phone,
    },
    {
      key: "Fecha de creación",
      value: company.created_at ? format(new Date(company.created_at), 'dd/MM/yy') : '',
    },
    {
      key: "Tipo de usuario",
      value: company?.super_admin?.userprofile?.user_type,
    },
  ];

  if (isSuccess) {
    return (
      <div className="items-center gap-7 bg-white px-5 py-10 sm:flex 2xl:block">
        <div className="text-center">
          <img
            className="mx-auto aspect-square w-24 rounded-full object-cover"
            src={company.image ? `${process.env.NEXT_PUBLIC_HOSTNAME}${company.image}` : null}
          />
          <h4 className="mt-3 text-lg font-semibold capitalize">{company.name}</h4>
          <p className="text-secondary">{company.company_code}</p>
          <div className="mt-1.5">
            {!!company.suspended ? (
              <Badge.Md text="Suspended" className="text-warning bg-warning bg-opacity-20" />
            ) : (
              <Badge.Md text="Activo" className="text-success bg-green-100" />
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
      </div>
    );
  }

  return <div className="items-center gap-7 bg-white px-5 py-10 sm:flex 2xl:block" />

};

export default CompanyCard;
