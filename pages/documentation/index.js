import DocumentationLayout from "@/components/layouts/DocumentationLayout"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import { PencilIcon } from "@heroicons/react/24/solid"
import React from 'react'
import { Editor } from "@tinymce/tinymce-react";
import useTinyMCE from "@/hooks/useTinyMCE"

export default function index() {

  const { config, apiKey } = useTinyMCE();

  const handleEditorChange = () => {

  }

  return (
    <DocumentationLayout pageTitle="Documentación" headerTitle="Documentación">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="xl:max-w-md w-full bg-white p-5 space-y-5">
          <SectionHeading>Acerca De</SectionHeading>
          <div className="bg-accent px-2.5 pb-4 pt-1 text-sm">
            <ul className="space-y-1">
              <li className="flex items-center justify-between px-5 py-2">
                <span className="font-semibold">Título</span>
              </li>
              <li>
                <label className="cursor-pointer flex items-center justify-between px-5 py-5 bg-white text-secondary">
                  <span>Término y condiciones</span>
                  <input
                    defaultChecked
                    name="account"
                    type="radio"
                    className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
                  />
                </label>
              </li>
              <li>
                <label className="cursor-pointer flex items-center justify-between px-5 py-5 bg-white text-secondary">
                  <span>Política de privacidad</span>
                  <input
                    name="account"
                    type="radio"
                    className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-grow bg-white p-5 space-y-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
            <SectionHeading>Términos y Condiciones</SectionHeading>
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
          <div aria-labelledby="WYSIWYG Editor">
            <InputGroup.Label>Descripción</InputGroup.Label>
            <Editor
              apiKey={apiKey}
              initialValue=""
              init={config.minimal}
              onChange={handleEditorChange}
            />
          </div>
        </div>

      </div>
    </DocumentationLayout>
  )
}
