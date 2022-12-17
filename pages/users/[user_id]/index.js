import React from 'react'
import UserLayout from "@/components/layouts/UserLayout"
import UserTabNav from "@/components/layouts/user/UserTabNav"

const User = () => {
  return (
    <UserLayout>
      <UserTabNav />
      <div className="grid grid-cols-2 gap-5 mt-4">
        <div className="p-5 bg-white"></div>
        <div className="p-5 bg-white"></div>
      </div>
    </UserLayout>
  )
}

export default User