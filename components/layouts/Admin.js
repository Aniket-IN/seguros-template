import React from 'react'
import Sidebar from "./admin/Sidebar"


const Admin = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden font-inter">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content section */}
      <main>
        {children}
      </main>
    </div>
  )
}

export default Admin