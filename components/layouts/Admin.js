import React from 'react'
import Footer from "./admin/Footer"
import Header from "./admin/Header"
import Sidebar from "./admin/Sidebar"


const Admin = ({ children, headerTitle = '' }) => {
  return (
    <div className="flex h-screen overflow-hidden font-inter">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header headerTitle={headerTitle} />

        {/* Main content section */}
        <main className="flex-grow bg-accent">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  )
}

export default Admin