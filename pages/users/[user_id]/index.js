import React from 'react'
import Admin from "@/components/layouts/Admin"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"

const User = () => {
  return (
    <Admin>
      <section className="container-padding space-y-6">
        <h4 className="flex gap-1.5 pt-5">
          <ChevronLeftIcon className="w-6 h-6" />
          <span>Volver</span>
        </h4>

        <h2 className="text-2xl font-medium">Carlos Pérez</h2>
      </section>

      <section className="mt-6 container-padding">
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-white px-5 py-10">
            
            <div className="text-center">
              <img className="mx-auto w-24 aspect-square rounded-full" src="/assets/img/sample/user-2.png" alt="User 2" />
              <h4 className="mt-3 font-semibold text-lg">Carlos Pérez</h4>
              <p className="text-secondary">
                ID UI123123
              </p>
            </div>

          </div>
        </div>
      </section>

    </Admin>
  )
}

export default User