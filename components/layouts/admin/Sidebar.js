import Link from "next/link"
import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-neutral-2 flex flex-col h-screen duration-300 ease-in-out w-64">

      {/* Sidebar Header */}
      <div className="p-4">
        <Link href="/" className="mb-10 px-7 pt-4 block">
          <img className="w-full" src="/assets/img/logo.svg" alt="Company Logo" />
        </Link>
      </div>



      {/* Sidebar Navigation Buttons */}
      <nav className="flex-grow overflow-auto">
        <ul>

        </ul>
      </nav>

      {/* Sidebar footer */}
      <div>

      </div>

    </div>
  )
}

export default Sidebar