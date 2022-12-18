import React from 'react'
import UserLayout from "@/components/layouts/UserLayout"
import CurrentLocationCard from "@/components/users/user/CurrentLocationCard"
import LocationHistoryCard from "@/components/users/user/LocationHistoryCard"

const User = () => {
  return (
    <UserLayout pageTitle="Usuarios" headerTitle="Usuarios">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
        <div>
          <CurrentLocationCard />
        </div>
        <div>
          <LocationHistoryCard />
        </div>
      </div>
    </UserLayout>
  )
}

export default User