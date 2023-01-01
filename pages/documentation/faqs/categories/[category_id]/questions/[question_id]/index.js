import DocumentationFAQLayout from "@/components/layouts/documentation/DocumentationFAQLayout"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import Link from "next/link"
import React, { useState } from 'react'
import AnimateHeight from "react-animate-height"
import { Editor } from "@tinymce/tinymce-react";
import useTinyMCE from "@/hooks/useTinyMCE"

const CreateQuestionForm = () => {
  const [editMode, setEditMode] = useState(false)
  const { config, apiKey } = useTinyMCE();

  const handleEditorChange = () => {

  }

  return (
    <DocumentationFAQLayout pageTitle="Documentación" headerTitle="Documentación">
      <div className="flex-grow">
        <div className="bg-white p-5 space-y-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
            <SectionHeading>Pregunta</SectionHeading>
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
            <InputGroup.Label>Pregunta</InputGroup.Label>
            <InputGroup>
              <InputGroup.Input
                disabled={!editMode}
                type="text"
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup.Label>Respuesta</InputGroup.Label>
            <Editor
              apiKey={apiKey}
              initialValue=""
              init={config.minimal}
              onChange={handleEditorChange}
              disabled={!editMode}
            />
          </div>
        </div>
      </div>
    </DocumentationFAQLayout>
  )
}

export default CreateQuestionForm