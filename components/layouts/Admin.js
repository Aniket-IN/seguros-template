import Head from "next/head";
import React from "react";
import Footer from "./admin/Footer";
import Header from "./admin/Header";
import Sidebar from "./admin/Sidebar";
import DefaultLayout from "./DefaultLayout";

const Admin = ({ children, pageTitle = null, headerTitle = "" }) => {
  const APP_NAME = "Seguros";
  return (
    <DefaultLayout pageMode="protected">
      <Head>
        <title>
          {pageTitle ? `${pageTitle} - ${APP_NAME}` : `${APP_NAME}`}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex h-screen overflow-hidden font-inter">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header headerTitle={headerTitle} />

          {/* Heading */}
          <div className="bg-neutral">
            <h1 className="container-padding block py-3 text-2xl font-bold lg:hidden">
              {headerTitle}
            </h1>
          </div>

          {/* Main content section */}
          <main className="flex-grow bg-accent">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Admin;
