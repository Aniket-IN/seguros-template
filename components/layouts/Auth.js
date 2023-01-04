import Head from "next/head";
import React from "react";
import DefaultLayout from "./DefaultLayout";

const Auth = ({ children, pageTitle = null, pageMode = "guest" }) => {
  const APP_NAME = "Seguros";
  return (
    <DefaultLayout pageMode={pageMode}>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} - ${APP_NAME}` : `${APP_NAME}`}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex h-screen items-center justify-center overflow-hidden bg-neutral font-inter">
        {children}
      </div>
    </DefaultLayout>
  );
};

export default Auth;
