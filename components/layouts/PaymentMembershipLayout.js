import React from 'react'
import Link from "next/link"
import Admin from "@/components/layouts/Admin"
import UserCard from "@/components/layouts/user/UserCard"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"


const PaymentMembershipLayout = ({ children, pageTitle = null, headerTitle = '' }) => {
  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
      <section className="container-padding space-y-5">
        <Link href="/payment-memberships" className="inline-flex items-center pt-5 hover:underline hover:text-primary">
          <ChevronLeftIcon className="w-8 h-8" />
          <span>Volver</span>
        </Link>

        <h2 className="text-2xl font-medium">Orden #154875</h2>
      </section>

      <section className="mt-6 container-padding">

        <div className="2xl:flex gap-5">

          <div className="w-full 2xl:max-w-xs flex-shrink-0">
            <UserCard />
          </div>

          <div className="flex-grow mt-6 2xl:mt-0">
            {/* <UserTabNav /> */}

            {children}
          </div>

        </div>

      </section>

    </Admin>
  )
}

export default PaymentMembershipLayout