import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import useAxios from "@/hooks/useAxios";
import useTinyMCE from "@/hooks/useTinyMCE";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";


const TicketEditForm = ({ ticketId }) => {
  // TODO: config ticket edit form
  const { config, apiKey } = useTinyMCE();

  const handleEditorChange = () => { };

  const { axios } = useAxios();
  const fetchData = () => {
    return axios.get("/api/admin/promo-code/");
  };

  const { isLoading, data, isError, error } = useQuery(
    [`doc-ticket-details-${ticketId}`],
    fetchData,
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError]);

  const ticket = data?.data ?? [];

  return (
    <>
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
    </>
  )
}

export default TicketEditForm