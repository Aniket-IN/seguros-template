import React, { Fragment, useState } from 'react'
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

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
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


  const { axios } = useAxios()

  const fetchData = () => {
    return axios.get('/api/dashboard/registered-users/', {
      data: selectedMonth.value
    })
  };

  const { isLoading, data, isError, error } = useQuery(['registered-users-count'], fetchData, {
    refetchOnWindowFocus: false
  })


  return (
    <Menu as="div" className="sm:w-auto sm:min-w-[150px] relative inline-block text-left">
      <div>
        <Menu.Button className="w-full capitalize gap-2 inline-flex justify-between items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none bg-white text-black ">
          {selectedMonth.month}
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
        <Menu.Items className="absolute origin-top-left left-0 lg:left-auto lg:origin-top-right lg:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {months.map((month, index) => (
              <Menu.Item key={month}>
                {({ active }) => (
                  <a
                    onClick={() => setSelectedMonth({ month: month, value: index + 1 })}
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
  )
}

export default MonthSelector