import React from "react";
import SectionHeading from "../SectionHeading";
import MembershipsCountCard from "./MembershipsCountCard";
import RegisteredUsersCountCard from "./RegisteredUsersCountCard";
import SmallAnalyticsCard from "./SmallAnalyticsCard";

const TopCardsSection = ({ selectedMonth }) => {
  return (
    <div className="container-padding">
      <SectionHeading className="py-5">Métricas del mes</SectionHeading>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
        <RegisteredUsersCountCard selectedMonth={selectedMonth} />
        <MembershipsCountCard selectedMonth={selectedMonth} />
        <div className="flex flex-col gap-4">
          <SmallAnalyticsCard
            title="Escudos creados"
            items={[
              {
                title: "Particulares",
                count: 250,
              },
              {
                title: "Empresas",
                count: 32,
              },
            ]}
            footer={{
              title: "Ver escudos",
              href: "/shields",
            }}
          />
          <SmallAnalyticsCard
            title="Tickets de soporte"
            items={[
              {
                title: "Total",
                count: 250,
              },
              {
                title: "Resueltos",
                count: 32,
              },
            ]}
            footer={{
              title: "Ver soporte",
              href: "/support",
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <SmallAnalyticsCard
            title="Alertas generadas"
            items={[
              {
                title: "Alertas",
                count: 250,
              },
              {
                title: "SOS",
                count: 32,
              },
            ]}
            footer={{
              title: "Ver Alertas",
              href: "/alerts-and-sos",
            }}
          />
          <SmallAnalyticsCard
            title="Código de promoción"
            items={[
              {
                title: "Total",
                count: 250,
              },
              {
                title: "Vencidos",
                count: 32,
              },
            ]}
            footer={{
              title: "Ver códigos",
              href: "/promo-codes",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopCardsSection;
