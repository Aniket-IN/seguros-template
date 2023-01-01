import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { toggle } from "./Sidebar"
import HeaderBtn from "../HeaderBtn"
import NotificationsBtn from "./NotificationsBtn"
import AccountDropdown from "./Header/AccountDropdown"

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
        <NotificationsBtn />


        {/* Account Dropdown Btn */}
        <AccountDropdown />
      </div>
    </header>
  )
}



export default Header