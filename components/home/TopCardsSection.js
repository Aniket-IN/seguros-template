import useAxios from "@/hooks/useAxios";
import React from "react";
import { useQuery } from "react-query";
import SectionHeading from "../SectionHeading";
import MembershipsCountCard from "./MembershipsCountCard";
import RegisteredUsersCountCard from "./RegisteredUsersCountCard";
import SmallAnalyticsCard from "./SmallAnalyticsCard";

const TopCardsSection = ({ selectedMonth }) => {
  const { axios } = useAxios();

  const now = new Date();

  function padWithZero(num, targetLength) {
    return String(num).padStart(targetLength, "0");
  }

  const selectedDate = new Date(
    `${now.getFullYear()}-${padWithZero(
      selectedMonth.value,
      2
    )}-15T14:10:28.570073Z`
  );

  const fetchData = ({ url = "", month, year }) => {
    return axios.get(url, {
      params: {
        month,
        year,
      },
    });
  };

  const alertsQuery = useQuery(
    [`alerts-count-data-${selectedMonth.value}`],
    () =>
      fetchData({
        url: "/api/dashboard/generated-alerts-with-sos-according-months/",
        month: selectedDate.getMonth() + 1,
        year: selectedDate.getFullYear(),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const ticketsQuery = useQuery(
    [`tickets-count-data-${selectedMonth.value}`],
    () =>
      fetchData({
        url: "/api/dashboard/created-tickets-according-months/",
        month: selectedDate.getMonth() + 1,
        year: selectedDate.getFullYear(),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const shieldsQuery = useQuery(
    [`shields-count-data-${selectedMonth.value}`],
    () =>
      fetchData({
        url: "/api/dashboard/created-shields-according-months/",
        month: selectedDate.getMonth() + 1,
        year: selectedDate.getFullYear(),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const promocodesQuery = useQuery(
    [`promocodes-count-data-${selectedMonth.value}`],
    () =>
      fetchData({
        url: "/api/dashboard/created-promo-code-according-months/",
        month: selectedDate.getMonth() + 1,
        year: selectedDate.getFullYear(),
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const alertsData = alertsQuery.data?.data?.data ?? {}
  const ticketsData = ticketsQuery.data?.data?.data ?? {}
  const shieldsData = shieldsQuery.data?.data?.data ?? {}
  const promocodesData = promocodesQuery.data?.data?.data ?? {}


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
                count: shieldsData.individual_count,
              },
              {
                title: "Empresas",
                count: shieldsData.companies_count,
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
                count: ticketsData.support_tickets,
              },
              {
                title: "Resueltos",
                count: ticketsData.resolved_tickets,
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
                count: alertsData.generated_alerts_count,
              },
              {
                title: "SOS",
                count: alertsData.sos_count,
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
                count: promocodesData.total,
              },
              {
                title: "Vencidos",
                count: promocodesData.due,
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
