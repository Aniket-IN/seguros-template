import React from 'react'
import Admin from "@/components/layouts/Admin"
import UserCard from "@/components/layouts/user/UserCard"
import DocumentationTabNav from "./documentation/DocumentationTabNav"


const DocumentationLayout = ({ children, pageTitle = null, headerTitle = '' }) => {
  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
      <section className="container-padding space-y-6 mt-5">
        {/* <h2 className="text-2xl font-medium mt-5">Documentación</h2> */}
        <DocumentationTabNav />
      </section>

      <section className="mt-6 container-padding">
        {children}
      </section>

    </Admin>
  )
}

export default DocumentationLayout