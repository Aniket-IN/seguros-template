import DocumentationLayout from "@/components/layouts/DocumentationLayout"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import useTinyMCE from "@/hooks/useTinyMCE"
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid"
import { Editor } from "@tinymce/tinymce-react"
import classNames from "classnames"
import React, { useState } from 'react'
import AnimateHeight from "react-animate-height"

export default function index() {

  const { config, apiKey } = useTinyMCE();

  const handleEditorChange = () => {

  }


  return (
    <DocumentationLayout pageTitle="Documentación" headerTitle="Documentación">
      <div className="flex flex-col xl:flex-row gap-5">

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

        <div className="flex-grow">
          <div className="bg-white p-5 space-y-6">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
              <SectionHeading>Categoría 1</SectionHeading>
              <div className="flex gap-4 text-sm">
                <button className="bg-accent rounded px-4 py-2 font-medium inline-flex justify-center items-center gap-3">
                  <PencilIcon className="w-5 h-5" />
                  <span>Editar</span>
                </button>
                <button className="bg-black text-white rounded px-4 py-2 inline-flex justify-center items-center gap-3">
                  <span>Guardar</span>
                </button>
              </div>
            </div>
            <div className="flex gap-5 text-sm">
              <span className="font-semibold">Última Modificación</span>
              <span>12/12/12</span>
            </div>
            <div className="max-w-md">
              <InputGroup.Label>Título</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input
                  type="text"
                />
              </InputGroup>
            </div>
          </div>
        </div>

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
          <ChevronDownIcon className={classNames("w-4 h-4 duration-300", open ? 'rotate-180' : '')} />
        </dd>
        <dd className="pr-5 py-5">Categoría 1</dd>
      </button>
      <AnimateHeight
        duration={350}
        height={open ? 'auto' : 0} // see props documentation below
      >
        <div className="bg-black">
          <ul className="space-y-2.5 py-3 bg-accent ml-1">
            <li className="flex items-center justify-between gap-4 px-4 py-2 bg-accent cursor-pointer font-semibold">
              <span>Pregunta</span>
              <span className="text-primary">+Crear Pregunta</span>
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
