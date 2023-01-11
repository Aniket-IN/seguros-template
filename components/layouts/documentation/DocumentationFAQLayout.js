import React, { useEffect, useState } from "react";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/router";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";

const DocumentationFAQLayout = ({
  children,
  pageTitle = null,
  headerTitle = "",
  needsRefetch = false,
  setNeedsRefetch = () => { },
  categoryQuestionsUpdated = null,
  setCategoryQuestionsUpdated = () => { },
}) => {
  const { axios } = useAxios({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_2,
    noAuth: true,
  });

  const getFAQCategories = () => {
    return axios.get("/api/faq/getcategories");
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    [`documentation-faq-categories`],
    getFAQCategories,
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (needsRefetch) {
      refetch();
      setNeedsRefetch(false)
    }
  }, [needsRefetch])


  const categories = data?.data?.data ?? [];

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
                {categories.map((category, index) => (
                  <Category
                    key={category.id}
                    category={category}
                    categoryQuestionsUpdated={categoryQuestionsUpdated}
                    setCategoryQuestionsUpdated={setCategoryQuestionsUpdated}
                  />
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

const Category = ({ category, categoryQuestionsUpdated, setCategoryQuestionsUpdated }) => {
  const router = useRouter();
  const { category_id, question_id } = router.query
  const [open, setOpen] = useState(false);

  const { axios } = useAxios({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_2,
    noAuth: true,
  });

  const handleCategoryToggle = (e) => {
    if (e.target.checked) {
      router.push(`/documentation/faqs/categories/${category.id}`);
    }
  };

  const handleQuestionToggle = (e, qid) => {
    if (e.target.checked) {
      router.push(`/documentation/faqs/categories/${category.id}/questions/${qid}`);
    }
  };

  useEffect(() => {
    if (category_id) {
      setOpen(category_id == category.id)
    }
  }, [category_id])




  const getQuestions = () => {
    return axios.get("/api/faq/questions/", {
      params: {
        category_id: category.id,
      }
    });
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    [`documentation-faq-category-${category.id}-questions`],
    getQuestions,
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (categoryQuestionsUpdated && categoryQuestionsUpdated == category.id) {
      refetch();
      setCategoryQuestionsUpdated(null)
    }
  }, [categoryQuestionsUpdated])


  const questions = data?.data?.data ?? []

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
          <dd className="py-5 pr-5">{category.name}</dd>
          <input
            onChange={handleCategoryToggle}
            checked={category_id == category.id}
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
                href={`/documentation/faqs/categories/${category.id}/questions/create`}
                className="flex cursor-pointer items-center justify-between gap-4 bg-accent px-4 py-2 font-semibold"
              >
                <span>Pregunta</span>
                <span className="text-primary">+Crear Pregunta</span>
              </Link>
            </li>
            {questions.map((item, index) => (
              <li key={item.id}>
                <label className="flex cursor-pointer items-center justify-between gap-4 bg-white px-4 py-2.5">
                  <p>
                    {item.question}
                  </p>
                  <input
                    checked={question_id == item.id}
                    onChange={(e) => handleQuestionToggle(e, item.id)}
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
