import React from 'react'
import Link from "next/link"
import Nav from "./Sidebar/Nav"

const toggle = () => {
  document.documentElement.classList.toggle('sidebar-expanded')
}

const Sidebar = () => {

  return (
    <>
      <div className="z-20 w-64 fixed md:static -translate-x-full sidebar-expanded:translate-x-0 md:translate-x-0 bg-neutral-2 overflow-auto flex flex-col h-screen duration-300 ease-in-out">

        {/* Sidebar Header */}
        <div className="p-4">
          <Link href="/" className="mb-3 px-7 py-4 block">
            <img className="w-full" src="/assets/img/logo.svg" alt="Company Logo" />
          </Link>
        </div>

        {/* Sidebar Navigation Buttons */}
        <Nav />

        {/* Sidebar footer */}
        <div>

        </div>

      </div>

      {/* Sidebar Backdrop */}
      <div onClick={toggle} className="sidebar-backdrop fixed inset-0 bg-black bg-opacity-40 z-[11] md:hidden invisible sidebar-expanded:visible opacity-0 sidebar-expanded:opacity-100" />
    </>
  )
}

export { toggle }
export default Sidebar