import React, { createElement } from 'react'
import classNames from "classnames"
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="conitaner-padding flex items-center">

        {/* Heading */}
        <h1 className="font-bold text-2xl">Bienvenido, Lucas</h1>

        {/* Notifications Btn */}
        <HeaderBtn className="text-sm ml-auto">
          <BellIcon className="w-7 h-7 text-black text-opacity-80" />
          <span>Notificaciones</span>
          <span className="px-2.5 pr-3 py-1 rounded-full bg-primary text-white">+99</span>
        </HeaderBtn>

        {/* Account Dropdown Btn */}
        <HeaderBtn className="text-sm">
          <img src="/assets/img/sample/user-1.png" className="block w-9 h-9 rounded-full" alt="" />
          <span className="max-w-[150px] truncate">Lucas Rodrigue..</span>
          <ChevronDownIcon className="w-5 h-5 text-black text-opacity-80" />
        </HeaderBtn>
      </div>
    </header>
  )
}

const HeaderBtn = ({ as = 'button', className, ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames('py-3 px-4 self-stretch flex items-center gap-2 hover:bg-secondary-2', className)
  })
}

export default Header