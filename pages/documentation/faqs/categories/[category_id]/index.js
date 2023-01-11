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
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditCategory = () => {
  const [editMode, setEditMode] = useState(false);
  const router = useRouter()
  const { category_id } = router.query
  const [needsRefetch, setNeedsRefetch] = useState(false)

  const { axios } = useAxios({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_2,
    noAuth: true,
  });

  const getFAQCategories = () => {
    return axios.get("/api/faq/getcategories");
  };

  const { isLoading, data, isError, error } = useQuery(
    [`documentation-faq-categories`],
    getFAQCategories,
    {
      refetchOnWindowFocus: false,
    }
  );

  const categories = data?.data?.data ?? [];

  const selectedCategory = useMemo(() => {
    return categories.find(c => c.id.toString() == category_id?.toString()) ?? {}
  }, [categories, category_id])

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: selectedCategory.name,
    }
  })

  useEffect(() => {
    if (selectedCategory) {
      reset(selectedCategory)
    }
  }, [selectedCategory])

  const submit = (data) => {
    axios.put(`/api/faq/getcategories?category_id=${category_id}`, data)
      .then((response) => {
        // reset()
        setNeedsRefetch(true)
        toast.success("Category modified successfully!");
        setEditMode(false)
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
      needsRefetch={needsRefetch}
      setNeedsRefetch={setNeedsRefetch}
    >
      <form className="flex-grow block" onSubmit={handleSubmit(submit)}>
        <div className="space-y-6 bg-white p-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <SectionHeading>{selectedCategory.name}</SectionHeading>
            <div className="flex gap-4 text-sm">
              <button
                type="button"
                onClick={() => setEditMode((val) => !val)}
                className="inline-flex items-center justify-center gap-3 rounded bg-accent px-4 py-2 font-medium"
              >
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
            <span>{selectedCategory.updated_at ? format(new Date(selectedCategory.updated_at), 'dd/MM/yy') : null}</span>
          </div>
          <div className="max-w-md">
            <InputGroup.Label>Título</InputGroup.Label>
            <InputGroup>
              <InputGroup.Input
                {...register("name", { required: "This field is required." })}
                disabled={!editMode}
                type="text"
              />
            </InputGroup>
            <InputGroup.Error error={errors?.name?.message} />
          </div>
        </div>
      </form>
    </DocumentationFAQLayout>
  );
};

export default EditCategory;
