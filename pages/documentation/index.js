import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import { PencilIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import useTinyMCE from "@/hooks/useTinyMCE";
import TabSelector from "@/components/documentation/about/TabSelector";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { format } from "date-fns";
import { toast } from "react-hot-toast";

export default function index() {
  const [tabName, setTabName] = useState("terms-and-conditions");

  const tabs = [
    {
      title: "Término y condiciones",
      value: "terms-and-conditions",
      getUrl: "/api/about/termsandcondition/",
      submitUrl: "/api/about/termsandcondition/1",
    },
    {
      title: "Política de privacidad",
      value: "privacy-policy",
      getUrl: "/api/about/datapolicy/",
      submitUrl: "/api/about/datapolicy/1",
    },
  ];

  // const tab = tabs.find(item => item.value === tabName);

  return (
    <DocumentationLayout pageTitle="Documentación" headerTitle="Documentación">
      <div className="flex flex-col gap-5 xl:flex-row">
        <TabSelector tabs={tabs} tabName={tabName} setTab={setTabName} />

        {tabs.map((tab) =>
          tab.value == tabName ? <TabSection key={tab.value} tab={tab} /> : null
        )}
      </div>
    </DocumentationLayout>
  );
}

const TabSection = ({ tab }) => {
  const { axios } = useAxios();
  const { config, apiKey } = useTinyMCE();
  const [isEditing, setIsEditing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const fetchData = () => {
    return axios.get(tab.getUrl);
  };

  const { isLoading, data, isError, error } = useQuery(
    [`documentation-tab-${tab.value}`],
    fetchData,
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      setFormData({
        title: data?.data?.data?.title,
        description: data?.data?.data?.description,
      });
    }
  }, [isLoading]);

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
    setIsProcessing(true);
    axios
      .put(tab.submitUrl, formData)
      .then((response) => {
        setIsEditing(false);
        toast.success("Data updated successfully!");
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
      .then(() => {
        setIsProcessing(false);
      });
  };

  return (
    <form onSubmit={submit} className="block flex-grow space-y-6 bg-white p-5">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <SectionHeading>{tab.title}</SectionHeading>
        <div className="flex gap-4 text-sm">
          <button
            onClick={() => setIsEditing((val) => !val)}
            type="button"
            className="inline-flex items-center justify-center gap-3 rounded bg-accent px-4 py-2 font-medium"
          >
            <PencilIcon className="h-5 w-5" />
            <span>Editar</span>
          </button>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 rounded bg-black px-4 py-2 text-white"
          >
            <span>Guardar</span>
          </button>
        </div>
      </div>
      <div className="flex gap-5 text-sm">
        <span className="font-semibold">Última Modificación</span>
        <span>
          {!!data?.data?.data?.updated_at &&
            format(new Date(data?.data?.data?.updated_at), "dd/MM/yy")}
        </span>
      </div>
      <div className="max-w-md">
        <InputGroup.Label>Título</InputGroup.Label>
        <InputGroup>
          <InputGroup.Input
            name="title"
            disabled={!isEditing || isProcessing}
            onChange={onHandleChange}
            value={formData.title}
            type="text"
          />
        </InputGroup>
      </div>
      <div aria-labelledby="WYSIWYG Editor">
        <InputGroup.Label>Descripción</InputGroup.Label>
        <Editor
          disabled={!isEditing || isProcessing}
          value={formData.description}
          apiKey={apiKey}
          init={config.minimal}
          onEditorChange={(content) => setData("description", content)}
        />
      </div>
    </form>
  );
};
