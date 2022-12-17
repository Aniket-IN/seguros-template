import React from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import UserCard from "@/components/users/user/UserCard"

const User = () => {
  return (
    <Admin>
      <section className="container-padding space-y-6">
        <h4 className="flex gap-1 pt-5">
          <ChevronLeftIcon className="w-6 h-6" />
          <span>Volver</span>
        </h4>

        <h2 className="text-2xl font-medium">Carlos Pérez</h2>
      </section>

      <section className="mt-6 container-padding">
        <div className="grid grid-cols-5 gap-5">
          <UserCard />
        </div>
      </section>

    </Admin>
  )
}

export default User