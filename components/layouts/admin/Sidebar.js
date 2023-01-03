import React from "react";
import Link from "next/link";
import Nav from "./Sidebar/Nav";

const toggle = () => {
  document.documentElement.classList.toggle("sidebar-expanded");
};

const Sidebar = () => {
  return (
    <>
      <div className="fixed z-20 flex h-screen w-64 -translate-x-full flex-col overflow-auto bg-neutral-2 duration-300 ease-in-out sidebar-expanded:translate-x-0 md:static md:translate-x-0">
        {/* Sidebar Header */}
        <div className="p-4">
          <Link href="/dashboard" className="mb-3 block px-7 py-4">
            <img
              className="w-full"
              src="/assets/img/logo-white-text.svg"
              alt="Company Logo"
            />
          </Link>
        </div>

        {/* Sidebar Navigation Buttons */}
        <Nav />

        {/* Sidebar footer */}
        <div></div>
      </div>

      {/* Sidebar Backdrop */}
      <div
        onClick={toggle}
        className="sidebar-backdrop invisible fixed inset-0 z-[11] bg-black bg-opacity-40 opacity-0 sidebar-expanded:visible sidebar-expanded:opacity-100 md:hidden"
      />
    </>
  );
};

export { toggle };
export default Sidebar;
