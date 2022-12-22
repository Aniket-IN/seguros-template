import React from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { DocumentTextIcon } from "@heroicons/react/24/outline"
import SectionHeading from "@/components/SectionHeading"
import TopCardsSection from "@/components/home/TopCardsSection"
import UserCountLineChart from "@/components/home/charts/UserCountLineChart"
import UserCountBarChart from "@/components/home/charts/UserCountBarChart"

const Home = () => {
  return (
    <Admin pageTitle="Dashboard" headerTitle="Bienvenido, Lucas">
      <div className="bg-neutral">
        <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center justify-end gap-3">
          <div className="text-secondary-3 text-sm">Visualizar información del mes</div>
          <div className="flex justify-end items-center gap-3">
            <button
              type="button"
              className="w-1/2 sm:w-auto sm:min-w-[150px] gap-2 inline-flex items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-white text-black "
            >
              Febrero
              <ChevronDownIcon className="w-5 h-5 ml-auto" />
            </button>
            <button
              type="button"
              className="w-1/2 sm:w-auto sm:min-w-[150px] gap-2 inline-flex items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-success text-white"
            >
              <DocumentTextIcon className="w-5 h-5" />
              Descargar Excel
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <TopCardsSection />

        <div className="container-padding">
          <SectionHeading className="py-5">Métricas de crecimiento</SectionHeading>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">

            <div className="bg-white p-4 flex flex-col gap-2">
              <div className="font-semibold text-sm">
                <h3>N°. de Usuarios registrados por mes</h3>
                <h3 className="text-right">Total Usuarios: 20 541</h3>
              </div>
              <div className="bg-white flex-grow aspect-video">
                <UserCountLineChart />
              </div>
            </div>

            <div className="bg-white p-4 flex flex-col gap-2">
              <div className="font-semibold text-sm">
                <h3>N°. de Usuarios registrados por mes</h3>
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