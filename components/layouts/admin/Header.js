import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { toggle } from "./Sidebar";
import HeaderBtn from "../HeaderBtn";
import NotificationsBtn from "./NotificationsBtn";
import AccountDropdown from "./Header/AccountDropdown";

const Header = ({ headerTitle = "" }) => {
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="flex items-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="hidden text-2xl font-bold lg:inline">{headerTitle}</h1>

        {/* Burger Icon */}
        <HeaderBtn onClick={toggle} className="text-sm md:hidden">
          <Bars3Icon className="h-7 w-7 text-black text-opacity-80" />
        </HeaderBtn>

        {/* Notifications Btn */}
        <NotificationsBtn />

        {/* Account Dropdown Btn */}
        <AccountDropdown />
      </div>
    </header>
  );
};

export default Header;
