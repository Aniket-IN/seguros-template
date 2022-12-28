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

const Home = () => {

  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  const [SelectedMonth, setSelectedMonth] = useState('febrero')

  return (
    <Admin pageTitle="Dashboard" headerTitle="Bienvenido, Lucas">
      <div className="bg-neutral">
        <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center justify-end gap-3">
          <div className="text-secondary-3 text-sm">Visualizar información del mes</div>
          <div className="flex max-w-sm justify-end items-center gap-3">

            <Menu as="div" className="sm:w-auto sm:min-w-[150px] relative inline-block text-left">
              <div>
                <Menu.Button className="w-full capitalize gap-2 inline-flex justify-between items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-white text-black ">
                  {SelectedMonth}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {months.map((month) => (
                      <Menu.Item key={month}>
                        {({ active }) => (
                          <a
                            onClick={() => setSelectedMonth(month)}
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm capitalize'
                            )}
                          >
                            {month}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>


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