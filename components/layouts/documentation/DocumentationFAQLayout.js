import React, { useState } from 'react'
import DocumentationLayout from "@/components/layouts/DocumentationLayout"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import Link from "next/link"
import AnimateHeight from "react-animate-height"


const DocumentationFAQLayout = ({ children, pageTitle = null, headerTitle = '' }) => {
  return (
    <DocumentationLayout pageTitle={pageTitle} headerTitle={headerTitle}>
      <div className="flex flex-col xl:flex-row gap-5">

        {/* Left side */}
        <div className="xl:max-w-md w-full">
          <div className=" bg-white p-5 space-y-5">
            <div className="flex justify-between">
              <SectionHeading>Preguntas Frecuentes</SectionHeading>
              <button className="rounded bg-black text-white text-sm px-4 py-1.5">
                + Crear Categ.
              </button>
            </div>
            <div className="bg-accent px-2.5 pb-4 pt-1 text-sm">
              <div className="flex items-center justify-between px-5 py-2">
                <span className="font-semibold">Categorías</span>
                <span className="font-semibold">Contenido</span>
              </div>
              <ul className="space-y-1 overflow-auto no-scrollbar max-h-[750px]">
                {[...Array(8)].map((item, index) => (
                  <Category key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Content */}
        {children}

      </div>
    </DocumentationLayout>
  )
}


const Category = () => {
  const [open, setOpen] = useState(false)

  return (
    <li>
      <button onClick={() => setOpen(val => !val)} className="cursor-pointer flex w-full gap-2.5 items-center  bg-white text-sm">
        <dd className={classNames("px-3.5 self-stretch flex justify-center items-center duration-300", open ? "bg-black text-white" : '')}>
          <ChevronDownIcon className={classNames("w-4 h-4 transition-transform duration-300", open ? 'rotate-180' : '')} />
        </dd>
        <dd className="pr-5 py-5">Categoría 1</dd>
      </button>
      <AnimateHeight
        duration={350}
        height={open ? 'auto' : 0} // see props documentation below
      >
        <div className="bg-black">
          <ul className="space-y-2.5 py-3 bg-accent ml-1">
            <li>
              <Link href="/documentation/faqs/categories/1/question/create" className="flex items-center justify-between gap-4 px-4 py-2 bg-accent cursor-pointer font-semibold">
                <span>Pregunta</span>
                <span className="text-primary">+Crear Pregunta</span>
              </Link>
            </li>
            {[...Array(5)].map((item, index) => (
              <li key={index}>
                <label className="flex items-center justify-between gap-4 px-4 py-2.5 bg-white cursor-pointer">
                  <p>
                    ¿Ejemplo de pregunta frecuente de la plataforma más seguros?
                  </p>
                  <input
                    defaultChecked
                    name="account"
                    type="radio"
                    className="flex-shrink-0 focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </AnimateHeight>
    </li>
  )
}

export default DocumentationFAQLayout