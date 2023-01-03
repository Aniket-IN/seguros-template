import React, { Fragment, useState } from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { DocumentTextIcon } from "@heroicons/react/24/outline"
import SectionHeading from "@/components/SectionHeading"
import TopCardsSection from "@/components/home/TopCardsSection"
import UserCountLineChart from "@/components/home/charts/UserCountLineChart"
import UserCountBarChart from "@/components/home/charts/UserCountBarChart"
import classNames from "classnames"
import { Menu, Transition } from "@headlessui/react"
import useAxios from "@/hooks/useAxios"
import { useQuery } from "react-query"
import MonthSelector from "@/components/dashboard/MonthSelector"

const Home = () => {

  const [selectedMonth, setSelectedMonth] = useState({ month: 'enero', value: 1 })

  return (
    <Admin pageTitle="Dashboard" headerTitle="Bienvenido, Lucas">

      {/* Topbar */}
      <div className="bg-neutral">
        <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center justify-end gap-3">
          <p className="text-secondary-3 text-sm">Visualizar información del mes</p>
          <div className="flex max-w-sm justify-end items-center gap-3">

            <MonthSelector
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />

            <button
              type="button"
              className="flex-grow sm:w-auto sm:min-w-[150px] gap-2 inline-flex items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-success text-white"
            >
              <DocumentTextIcon className="w-5 h-5" />
              Descargar Excel
            </button>
          </div>
        </div>
      </div>



      {/* Main */}
      <div className="space-y-2">
        <TopCardsSection selectedMonth={selectedMonth} />

        {/* Graphcs Section */}
        <div className="container-padding">
          <SectionHeading className="py-5">Métricas de crecimiento</SectionHeading>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">

            {/* Left Graph */}
            <div className="bg-white p-4 flex flex-col gap-2">
              <div className="font-semibold text-sm">
                <h3>N°. de Usuarios registrados por mes</h3>
                <h3 className="text-right">Total Usuarios: 20 541</h3>
              </div>
              <div className="bg-white flex-grow aspect-video">
                <UserCountLineChart />
              </div>
            </div>

            {/* Right Graph */}
            <div className="bg-white p-4 flex flex-col gap-2">
              <div className="font-semibold text-sm">
                <h3>N°. de Escudos creados por mes</h3>
                <h3 className="text-right">Total Escudos: 2 541</h3>
              </div>
              <div className="bg-white flex-grow aspect-video">
                <UserCountBarChart />
              </div>
            </div>

          </div>
        </div>


      </div>
    </Admin>
  )
}

export default Home