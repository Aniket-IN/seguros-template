import CreateSubjectModalBtn from "@/components/documentation/tickets/CreateSubjectModalBtn";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import useTinyMCE from "@/hooks/useTinyMCE";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";

export default function index() {
  const { config, apiKey } = useTinyMCE();

  const handleEditorChange = () => {};

  return (
    <DocumentationLayout pageTitle="Documentación" headerTitle="Documentación">
      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="w-full space-y-5 bg-white p-5 xl:max-w-md">
          <div className="flex justify-between">
            <SectionHeading>Ayuda</SectionHeading>
            <CreateSubjectModalBtn className="rounded bg-black px-4 py-1.5 text-sm text-white">
              + Crear Asunto
            </CreateSubjectModalBtn>
          </div>
          <div className="bg-accent px-2.5 pb-4 pt-1 text-sm">
            <div className="flex items-center justify-between px-5 py-2">
              <span className="font-semibold">Asunto</span>
              <span className="font-semibold">Contenido</span>
            </div>
            <ul className="max-h-[750px] space-y-1 overflow-auto">
              {[...Array(8)].map((item, index) => (
                <li key={index}>
                  <label className="flex cursor-pointer items-center justify-between bg-white px-5 py-5 text-secondary">
                    <span>Asunto 1</span>
                    <input
                      defaultChecked
                      name="account"
                      type="radio"
                      className="h-5 w-5 border-gray-300 text-primary focus:ring-primary"
                    />
                  </label>
                </li>
              ))}

              {/* <li>
                <label className="cursor-pointer flex items-center justify-between px-5 py-5 bg-white text-secondary">
                  <span>Política de privacidad</span>
                  <input
                    name="account"
                    type="radio"
                    className="focus:ring-primary h-5 w-5 text-primary border-gray-300"
                  />
                </label>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="flex-grow space-y-6 bg-white p-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <SectionHeading>Asunto 1</SectionHeading>
            <div className="flex gap-4 text-sm">
              <button className="inline-flex items-center justify-center gap-3 rounded bg-accent px-4 py-2 font-medium">
                <PencilIcon className="h-5 w-5" />
                <span>Editar</span>
              </button>
              <button className="inline-flex items-center justify-center gap-3 rounded bg-black px-4 py-2 text-white">
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
              <InputGroup.Input type="text" />
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
  );
}
