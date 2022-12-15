import Head from "next/head"
import React from 'react'
import Footer from "./admin/Footer"
import Header from "./admin/Header"
import Sidebar from "./admin/Sidebar"


const Admin = ({ children, pageTitle = null, headerTitle = '' }) => {
  const APP_NAME = "Seguros"
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ${APP_NAME}` : `${APP_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
    </>

  )
}

export default Admin