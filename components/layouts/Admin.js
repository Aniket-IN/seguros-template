import Head from "next/head"
import React from 'react'
import Footer from "./admin/Footer"
import Header from "./admin/Header"
import Sidebar from "./admin/Sidebar"
import AppLayout from "./AppLayout"


const Admin = ({ children, pageTitle = null, headerTitle = '' }) => {
  const APP_NAME = "Seguros"
  return (
    <AppLayout>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ${APP_NAME}` : `${APP_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex h-screen overflow-hidden font-inter">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header headerTitle={headerTitle} />

          {/* Heading */}
          <div className="bg-neutral">
            <h1 className="container-padding font-bold text-2xl block lg:hidden py-3">{headerTitle}</h1>
          </div>

          {/* Main content section */}
          <main className="flex-grow bg-accent">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>

      </div>
    </AppLayout>

  )
}

export default Admin