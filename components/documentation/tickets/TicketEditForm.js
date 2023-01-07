import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import useAxios from "@/hooks/useAxios";
import useTinyMCE from "@/hooks/useTinyMCE";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";


const TicketEditForm = ({ ticketId, refetch }) => {
  // TODO: config ticket edit form
  const { config, apiKey } = useTinyMCE();
  const { axios } = useAxios();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  const [isEditing, setIsEditing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);


  const fetchData = () => {
    return axios.get(`/api/ticket/ticket_id/${ticketId}`);
  };

  const { isLoading, isSuccess, data, isError, error, refetch: refetchTicket } = useQuery(
    [`doc-ticket-details-${ticketId}`],
    fetchData,
    {
      refetchOnWindowFocus: false,
    }
  );

  const ticket = data?.data?.data ?? {};

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError]);


  useEffect(() => {
    if (isSuccess) {
      setFormData({
        title: ticket.title,
        description: ticket.description,
      });
    }
  }, [isSuccess]);

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
    if (!isEditing) {
      return;
    }
    setIsProcessing(true);
    axios
      .put(`/api/ticket/updateticket/${ticket.id}`, formData)
      .then((response) => {
        setIsEditing(false);
        toast.success("Data updated successfully!");
        refetch()
        refetchTicket()
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
    <div className="space-y-6 ">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <SectionHeading>{ticket.title}</SectionHeading>
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
            onClick={submit}
            className="inline-flex items-center justify-center gap-3 rounded bg-black px-4 py-2 text-white">
            <span>Guardar</span>
          </button>
        </div>
      </div>
      <div className="flex gap-5 text-sm">
        <span className="font-semibold">Última Modificación</span>
        <span>
          {!!ticket.updated_at && format(new Date(ticket.updated_at), 'dd/MM/yy')}
        </span>
      </div>
      <div className="max-w-md">
        <InputGroup.Label>Título</InputGroup.Label>
        <InputGroup>
          <InputGroup.Input
            type="text"
            name="title"
            disabled={!isEditing || isProcessing}
            onChange={onHandleChange}
            value={formData.title}
          />
        </InputGroup>
      </div>
      <div aria-labelledby="WYSIWYG Editor">
        <InputGroup.Label>Descripción</InputGroup.Label>
        <Editor
          apiKey={apiKey}
          initialValue={ticket.description}
          init={config.minimal}
          disabled={!isEditing || isProcessing}
          onEditorChange={(content) => setData("description", content)}
        />
      </div>
    </div>
  )
}

export default TicketEditForm