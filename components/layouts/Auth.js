import Head from "next/head"
import React from 'react'
import AppLayout from "./AppLayout"


const Auth = ({ children, pageTitle = null }) => {
  const APP_NAME = "Seguros"
  return (
    <AppLayout>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ${APP_NAME}` : `${APP_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-neutral flex items-center justify-center h-screen overflow-hidden font-inter">
        {children}
      </div>
    </AppLayout>

  )
}

export default Auth