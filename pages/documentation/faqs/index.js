import DocumentationFAQLayout from "@/components/layouts/documentation/DocumentationFAQLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

export default function index() {
  return (
    <DocumentationFAQLayout
      pageTitle="Documentación"
      headerTitle="Documentación"
    >
      <div className="flex-grow">
        <div className="space-y-6 bg-white p-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <SectionHeading>Crear Categ.</SectionHeading>
            <div className="flex gap-4 text-sm">
              {/* <button className="bg-accent rounded px-4 py-2 font-medium inline-flex justify-center items-center gap-3">
                <PencilIcon className="w-5 h-5" />
                <span>Editar</span>
              </button> */}
              <button className="inline-flex items-center justify-center gap-3 rounded bg-black px-4 py-2 text-white">
                <span>Guardar</span>
              </button>
            </div>
          </div>
          {/* <div className="flex gap-5 text-sm">
            <span className="font-semibold">Última Modificación</span>
            <span>12/12/12</span>
          </div> */}
          <div className="max-w-md">
            <InputGroup.Label>Título</InputGroup.Label>
            <InputGroup>
              <InputGroup.Input type="text" />
            </InputGroup>
          </div>
        </div>
      </div>
    </DocumentationFAQLayout>
  );
}
