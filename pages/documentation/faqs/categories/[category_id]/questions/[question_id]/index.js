import DocumentationFAQLayout from "@/components/layouts/documentation/DocumentationFAQLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import AnimateHeight from "react-animate-height";
import { Editor } from "@tinymce/tinymce-react";
import useTinyMCE from "@/hooks/useTinyMCE";
import { useRouter } from "next/router";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";

const EditQuestionForm = () => {
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
    question_id: question_id,
  });

  const getQuestions = () => {
    return axios.get(`/api/faq/questions/?category_id=${category_id}`);
  };

  const { isLoading, data, isError, error, isSuccess } = useQuery(
    [`documentation-faq-questions-for-${category_id}-edit-${question_id}`, category_id, question_id],
    getQuestions,
    {
      refetchOnWindowFocus: false,
      enabled: !!category_id,
    }
  );

  const questions = data?.data?.data ?? [];

  const selectedQuestion = useMemo(() => {
    return questions.find(c => c.id.toString() == question_id?.toString()) ?? {}
  }, [isSuccess, data, category_id, question_id])



  useEffect(() => {
    if (selectedQuestion) {

      setFormData({
        question: selectedQuestion.question ?? "",
        answer: selectedQuestion.answer ?? "",
        question_id: question_id,
      })
    }
  }, [selectedQuestion])

  const setData = (key, value) => {
    setFormData((val) => ({
      ...val,
      [key]: value,
    }));
  };

  const onHandleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const editQuestion = (e) => {
    e.preventDefault()
    axios.patchForm(`/api/faq/update-faq/`, formData)
      .then(() => {
        setCategoryQuestionsUpdated(category_id)
        setEditMode(false)
        toast.success("Question modified successfully!")
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
      {...{ categoryQuestionsUpdated, setCategoryQuestionsUpdated }}
    >
      <form onSubmit={editQuestion} className="flex-grow block">
        <div className="space-y-6 bg-white p-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <SectionHeading>Pregunta</SectionHeading>
            <div className="flex gap-4 text-sm">
              <button type="button" onClick={() => setEditMode(val => !val)} className="inline-flex items-center justify-center gap-3 rounded bg-accent px-4 py-2 font-medium">
                <PencilIcon className="h-5 w-5" />
                <span>Editar</span>
              </button>
              <button type="submit" className="inline-flex items-center justify-center gap-3 rounded bg-black px-4 py-2 text-white">
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
                type="text"
                name="question"
                disabled={!editMode}
                onChange={onHandleChange}
                value={formData.question}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup.Label>Respuesta</InputGroup.Label>
            <Editor
              apiKey={apiKey}
              value={formData.answer}
              init={config.minimal}
              onEditorChange={(content) => setData('answer', content)}
              disabled={!editMode}
            />
          </div>
        </div>
      </form>
    </DocumentationFAQLayout>
  );
};

export default EditQuestionForm;
