import DocumentationFAQLayout from "@/components/layouts/documentation/DocumentationFAQLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Editor } from "@tinymce/tinymce-react";
import useTinyMCE from "@/hooks/useTinyMCE";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const CreateQuestionForm = () => {
  const { config, apiKey } = useTinyMCE();
  const [needsRefetch, setNeedsRefetch] = useState(false)
  const [categoryQuestionsUpdated, setCategoryQuestionsUpdated] = useState(null)
  const [editMode, setEditMode] = useState(false);
  const router = useRouter()

  const { category_id, question_id } = router.query

  const { axios } = useAxios({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_2,
    noAuth: true,
  });

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const setData = (key, value) => {
    setFormData((val) => ({
      ...val,
      [key]: value,
    }));
  };

  const onHandleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post(`/api/faq/questions/`, { ...formData, category_id: category_id })
      .then((response) => {
        setNeedsRefetch(true)
        setCategoryQuestionsUpdated(category_id)
        setFormData({
          question: "",
          answer: "",
        })
        toast.success("Question created successfully!")
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
  }


  return (
    <DocumentationFAQLayout
      pageTitle="Documentación"
      headerTitle="Documentación"
      {...{ categoryQuestionsUpdated, setCategoryQuestionsUpdated, needsRefetch, setNeedsRefetch }}
    >
      <form onSubmit={submit} className="flex-grow">
        <div className="space-y-6 bg-white p-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <SectionHeading>Pregunta</SectionHeading>
            <div className="flex gap-4 text-sm">
              {/* <button className="bg-accent rounded px-4 py-2 font-medium inline-flex justify-center items-center gap-3">
                <PencilIcon className="w-5 h-5" />
                <span>Editar</span>
              </button> */}
              <button type="submit" className="inline-flex items-center justify-center gap-3 rounded bg-black px-4 py-2 text-white">
                <span>Guardar</span>
              </button>
            </div>
          </div>
          {/* <div className="flex gap-5 text-sm">
            <span className="font-semibold">Última Modificación</span>
            <span>12/12/12</span>
          </div> */}
          <div className="max-w-md">
            <InputGroup.Label>Pregunta</InputGroup.Label>
            <InputGroup>
              <InputGroup.Input
                name="question"
                onChange={onHandleChange}
                value={formData.question}
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
              onEditorChange={(content) => setData("answer", content)}
            />
          </div>
        </div>
      </form>
    </DocumentationFAQLayout>
  );
};

export default CreateQuestionForm;
