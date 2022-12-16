import React from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { DocumentTextIcon } from "@heroicons/react/24/outline"
import SectionHeading from "@/components/SectionHeading"
import RegisteredUsersCountCard from "@/components/home/RegisteredUsersCountCard"
import MembershipsCountCard from "@/components/home/MembershipsCountCard"
import SmallAnalyticsCard from "@/components/home/SmallAnalyticsCard"
import TopCardsSection from "@/components/home/TopCardsSection"

const Home = () => {
  return (
    <Admin pageTitle="Dashboard" headerTitle="Bienvenido, Lucas">
      <div className="bg-neutral">
        <div className="container-padding py-2.5 flex items-center justify-end gap-3">
          <span className="text-secondary-3 text-sm">Visualizar información del mes</span>
          <button
            type="button"
            className="sm:min-w-[150px] gap-2 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-white text-black "
          >
            Febrero
            <ChevronDownIcon className="w-5 h-5 ml-auto" />
          </button>
          <button
            type="button"
            className="sm:min-w-[150px] gap-2 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-success text-white"
          >
            <DocumentTextIcon className="w-5 h-5" />
            Descargar Excel
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <TopCardsSection />

        <div className="container-padding">
          <SectionHeading className="py-5">Métricas de crecimiento</SectionHeading>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            
            <div className="bg-white p-4 flex flex-col gap-2 aspect-video">
              <div className="font-semibold text-sm">
                <h3>N°. de Usuarios registrados por mes</h3>
                <h3 className="text-right">Total Usuarios: 20 541</h3>
              </div>
              <div className="bg-white flex-grow">

              </div>
            </div>

            <div className="bg-white p-4 flex flex-col gap-2 aspect-video">
              <div className="font-semibold text-sm">
                <h3>N°. de Usuarios registrados por mes</h3>
                <h3 className="text-right">Total Escudos: 2 541</h3>
              </div>
              <div className="bg-white flex-grow">

              </div>
            </div>

          </div>
        </div>

      </div>


    </Admin>
  )
}

export default Home