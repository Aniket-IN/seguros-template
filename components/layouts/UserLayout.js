import React from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import UserCard from "@/components/users/user/UserCard"
import Link from "next/link"

const UserLayout = ({ children }) => {
  return (
    <Admin>
      <section className="container-padding space-y-5">
        <Link href="/users" className="inline-flex items-center pt-5 hover:underline hover:text-primary">
          <ChevronLeftIcon className="w-8 h-8" />
          <span>Volver</span>
        </Link>

        <h2 className="text-2xl font-medium">Carlos Pérez</h2>
      </section>

      <section className="mt-6 container-padding">

        <div className="flex gap-5">

          <div className="w-full md:max-w-xs">
            <UserCard />
          </div>

          <div className="flex-grow">
            {children}
          </div>

        </div>

      </section>

    </Admin>
  )
}

export default UserLayout