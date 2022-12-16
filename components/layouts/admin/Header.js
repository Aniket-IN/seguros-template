import React, { createElement, Fragment } from 'react'
import classNames from "classnames"
import { ArrowLeftOnRectangleIcon, Bars3Icon, Bars4Icon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { toggle } from "./Sidebar"

const Header = ({ headerTitle = '' }) => {
  return (
    <header className="sticky top-0 bg-white z-10 border-b">
      <div className="sm:px-6 lg:px-8 flex items-center">

        {/* Heading */}
        <h1 className="font-bold text-2xl hidden lg:inline">{headerTitle}</h1>

        {/* Burger Icon */}
        <HeaderBtn onClick={toggle} className="text-sm md:hidden">
          <Bars3Icon className="w-7 h-7 text-black text-opacity-80" />
        </HeaderBtn>

        {/* Notifications Btn */}
        <HeaderBtn className="text-sm ml-auto">
          <BellIcon className="w-7 h-7 text-black text-opacity-80" />
          <span className="hidden xl:inline">Notificaciones</span>
          <span className="px-2.5 pr-3 py-1 rounded-full bg-primary text-white">+99</span>
        </HeaderBtn>


        {/* Account Dropdown Btn */}
        <Menu as="div" className="relative inline-block text-left">

          <Menu.Button className="py-3 px-4 self-stretch flex items-center gap-2 hover:bg-secondary-2">
            <img src="/assets/img/sample/user-1.png" className="block w-9 h-9 rounded-full" alt="user-1" />
            <span className="max-w-[150px] truncate hidden lg:inline">Lucas Rodrigue..</span>
            <ChevronDownIcon className="w-5 h-5 text-black text-opacity-80" />
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md overflow-hidden shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-3 flex items-center">
                <div className="w-1/3">
                  <img src="/assets/img/sample/user-1.png" className="block aspect-square rounded-full" alt="user-1" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg">Lucas Rodriguez</h4>
                  <p className=" text-secondary text-sm">ejemplo@gmail.com</p>
                  <div className="mt-2.5 text-sm font-semibold">
                    <Link href="/account" className="underline">Ver mi perfil</Link>
                  </div>
                </div>
              </div>


              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-[#E5E5E5]' : 'bg-accent',
                      'flex items-center gap-2.5 px-4 py-3 text-sm text-a'
                    )}
                  >
                    <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                    <span>Cerrar Sesión</span>
                  </a>
                )}
              </Menu.Item>

            </Menu.Items>
          </Transition>

        </Menu>
      </div>
    </header>
  )
}

const HeaderBtn = ({ as = 'button', className = '', ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames('py-3 px-4 self-stretch flex items-center gap-2 hover:bg-secondary-2', className)
  })
}

export default Header