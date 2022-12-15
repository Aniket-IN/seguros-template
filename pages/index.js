import React from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { DocumentTextIcon } from "@heroicons/react/24/outline"

const Home = () => {
  return (
    <Admin headerTitle="Bienvenido, Lucas">
      <div className="bg-neutral">
        <div className="conitaner-padding py-2.5 flex items-center justify-end gap-3">
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
    </Admin>
  )
}

export default Home