import React from 'react'
import Link from "next/link"
import Admin from "@/components/layouts/Admin"
import UserCard from "@/components/users/user/UserCard"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import UserTabNav from "@/components/layouts/user/UserTabNav"

const UserLayout = ({ children, pageTitle = null, headerTitle = '' }) => {
  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
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
            <UserTabNav />

            {children}
          </div>

        </div>

      </section>

    </Admin>
  )
}

export default UserLayout