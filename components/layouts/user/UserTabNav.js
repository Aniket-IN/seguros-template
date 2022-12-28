import InputGroup from "@/components/utility/InputGroup"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { Fragment } from 'react'
import { Menu, Transition } from "@headlessui/react"

const UserTabNav = () => {

  const router = useRouter();

  const tabs = [
    {
      title: 'Historial de ubicaciones',
      href: "/users/1",
      activePaths: [
        "/users/[user_id]",
      ],
    },
    {
      title: 'Escudos',
      href: "/users/1/shields",
      activePaths: [
        "/users/[user_id]/shields",
      ],
    },
    {
      title: 'Alertas y SOS',
      href: "/users/1/sos",
      activePaths: [
        "/users/[user_id]/sos",
      ],
    },
    {
      title: 'Membresía',
      href: "/users/1/membership",
      activePaths: [
        "/users/[user_id]/membership",
      ],
    },
    {
      title: 'Biométrico',
      href: "/users/1/biometric",
      activePaths: [
        "/users/[user_id]/biometric",
      ],
    },
  ]

  const handleChange = (e) => {
    router.push(e.target.value)
  }

  return (
    <nav className="flex gap-5 items-center mt-6 2xl:mt-0">

      {/* Mobile Only */}
      <div className="flex-grow xl:hidden">
        <InputGroup>
          <InputGroup.Input as="select" onChange={handleChange}>
            {tabs.map((tab) => (
              <option key={tab.title} value={tab.href}>{tab.title}</option>
            ))}
          </InputGroup.Input>
        </InputGroup>
      </div>

      {/* Desktop Only */}
      <div className="hidden xl:block overflow-auto no-scrollbar">
        <ul className="flex gap-9 whitespace-nowrap flex-nowrap">
          {tabs.map((tab) => (
            <Item key={tab.title} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="text-right ml-auto">
        {/* <button className="inline-flex items-center justify-center text-sm">
          <span>Acción</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button> */}
        <ActionBtn />
      </div>

    </nav>
  )
}


const Item = ({ tab }) => {
  const router = useRouter();
  const isActive = tab.activePaths?.includes(router.pathname)

  return (
    <li
      key={tab.title}
    >
      <Link
        href={tab.href}
        className={
          classNames(
            "font-semibold text-lg py-1.5 block",
            isActive ? "text-black border-b-2 border-b-black" : "text-secondary"
          )
        }
      >
        {tab.title}
      </Link>
    </li>
  )
}

const ActionBtn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={classNames(
              "w-full capitalize gap-2 inline-flex justify-between items-center px-2 sm:px-4 py-2 border border-transparent text-sm leading-4 font-normal rounded-md focus:outline-none",
              open ? "text-white bg-primary" : "text-black",
            )}
          >
            Acción
            <ChevronDownIcon
              className={classNames("-mr-1 ml-2 h-5 w-5 duration-300 transition-transform", open ? 'rotate-180' : '')}
              aria-hidden="true"
            />
          </Menu.Button>


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
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm capitalize'
                      )}
                    >
                      Ver detalles
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm capitalize'
                      )}
                    >
                      Suspender cuenta
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default UserTabNav