import React from 'react'
import Link from "next/link"
import Admin from "@/components/layouts/Admin"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import CompanyTabNav from "./company/CompanyTabNav"
import CompanyCard from "./company/CompanyCard"

const ShieldLayout = ({ children, pageTitle = null, headerTitle = '' }) => {
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

        <div className="2xl:flex gap-5">

          <div className="w-full 2xl:max-w-xs flex-shrink-0">
            <CompanyCard />
          </div>

          <div className="flex-grow">
            <CompanyTabNav />

            {children}
          </div>

        </div>

      </section>

    </Admin>
  )
}

export default ShieldLayout