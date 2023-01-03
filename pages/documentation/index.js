import DocumentationLayout from "@/components/layouts/DocumentationLayout"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import { PencilIcon } from "@heroicons/react/24/solid"
import React, { useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import useTinyMCE from "@/hooks/useTinyMCE"
import TabSelector from "@/components/documentation/about/TabSelector"

export default function index() {


  const [tabName, setTabName] = useState('terms-and-conditions')

  const tabs = [
    {
      title: "Término y condiciones",
      value: 'terms-and-conditions',
      getUrl: '/api/about/termsandcondition',
    },
    {
      title: "Política de privacidad",
      value: 'privacy-policy',
      getUrl: '/api/about/termsandcondition',
    },
  ]

  // const tab = tabs.find(item => item.value === tabName);


  return (
    <DocumentationLayout pageTitle="Documentación" headerTitle="Documentación">
      <div className="flex flex-col xl:flex-row gap-5">
        <TabSelector tabs={tabs} tabName={tabName} setTab={setTabName} />

        {tabs.map((tab) => (
          tab.value == tabName ? <TabSection key={tab.value} tab={tab} /> : null
        ))}

      </div>
    </DocumentationLayout>
  )
}


const TabSection = ({ tab }) => {
  const { config, apiKey } = useTinyMCE();

  const handleEditorChange = (e) => {
    console.log(e);
  }

  return (
    <div className="flex-grow bg-white p-5 space-y-6">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
        <SectionHeading>{tab.title}</SectionHeading>
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
  )
}