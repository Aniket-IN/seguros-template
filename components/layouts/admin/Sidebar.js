import React from 'react'
import Link from "next/link"
import { RectangleGroupIcon } from "@heroicons/react/24/outline"
import Nav from "./Sidebar/Nav"

const Sidebar = () => {
  return (
    <div className="bg-neutral-2 flex flex-col h-screen duration-300 ease-in-out w-64">

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
  )
}

export default Sidebar