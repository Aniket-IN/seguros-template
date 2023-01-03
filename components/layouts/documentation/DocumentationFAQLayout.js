import React, { useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/router";

const DocumentationFAQLayout = ({
  children,
  pageTitle = null,
  headerTitle = "",
}) => {
  return (
    <DocumentationLayout pageTitle={pageTitle} headerTitle={headerTitle}>
      <div className="flex flex-col gap-5 xl:flex-row">
        {/* Left side */}
        <div className="w-full xl:max-w-md">
          <div className=" space-y-5 bg-white p-5">
            <div className="flex justify-between">
              <SectionHeading>Preguntas Frecuentes</SectionHeading>
              <Link
                href="/documentation/faqs"
                className="rounded bg-black px-4 py-1.5 text-sm text-white"
              >
                + Crear Categ.
              </Link>
            </div>
            <div className="bg-accent px-2.5 pb-4 pt-1 text-sm">
              <div className="flex items-center justify-between px-5 py-2">
                <span className="font-semibold">Categorías</span>
                <span className="font-semibold">Contenido</span>
              </div>
              <ul className="no-scrollbar max-h-[750px] space-y-1 overflow-auto">
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
  );
};

const Category = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleCategoryToggle = (e) => {
    if (e.target.checked) {
      router.push("/documentation/faqs/categories/1");
    }
  };

  const handleQuestionToggle = (e) => {
    if (e.target.checked) {
      router.push("/documentation/faqs/categories/1/questions/1");
    }
  };

  return (
    <li>
      <div className="flex cursor-pointer items-stretch bg-white text-sm">
        <button
          onClick={() => setOpen((val) => !val)}
          className=" flex items-center gap-2.5  "
        >
          <dd
            className={classNames(
              "flex items-center justify-center self-stretch px-3.5 duration-300",
              open ? "bg-black text-white" : ""
            )}
          >
            <ChevronDownIcon
              className={classNames(
                "h-4 w-4 transition-transform duration-300",
                open ? "rotate-180" : ""
              )}
            />
          </dd>
        </button>
        <label className="flex flex-grow cursor-pointer items-center justify-between gap-2.5 px-4">
          <dd className="py-5 pr-5">Categoría 1</dd>
          <input
            onChange={handleCategoryToggle}
            readOnly
            type="radio"
            name="category"
          />
        </label>
      </div>

      <AnimateHeight
        duration={350}
        height={open ? "auto" : 0} // see props documentation below
      >
        <div className="bg-black">
          <ul className="ml-1 space-y-2.5 bg-accent py-3">
            <li>
              <Link
                href="/documentation/faqs/categories/1/questions/create"
                className="flex cursor-pointer items-center justify-between gap-4 bg-accent px-4 py-2 font-semibold"
              >
                <span>Pregunta</span>
                <span className="text-primary">+Crear Pregunta</span>
              </Link>
            </li>
            {[...Array(5)].map((item, index) => (
              <li key={index}>
                <label className="flex cursor-pointer items-center justify-between gap-4 bg-white px-4 py-2.5">
                  <p>
                    ¿Ejemplo de pregunta frecuente de la plataforma más seguros?
                  </p>
                  <input
                    onChange={handleQuestionToggle}
                    name="question_radio"
                    type="radio"
                    className="h-5 w-5 flex-shrink-0 border-gray-300 text-primary focus:ring-primary"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </AnimateHeight>
    </li>
  );
};

export default DocumentationFAQLayout;
