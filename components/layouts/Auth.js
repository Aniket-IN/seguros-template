import Head from "next/head"
import React from 'react'

const Auth = ({ children, pageTitle = null }) => {
  const APP_NAME = "Seguros"
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ${APP_NAME}` : `${APP_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-neutral flex items-center justify-center h-screen overflow-hidden font-inter">
        {children}
      </div>
    </>

  )
}

export default Auth