import CreateSubjectModalBtn from "@/components/documentation/tickets/CreateSubjectModalBtn";
import TicketEditForm from "@/components/documentation/tickets/TicketEditForm";
import TicketSelector from "@/components/documentation/tickets/TicketSelector";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import SectionHeading from "@/components/SectionHeading";
import InputGroup from "@/components/utility/InputGroup";
import useAxios from "@/hooks/useAxios";
import useTinyMCE from "@/hooks/useTinyMCE";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function index() {

  const { axios } = useAxios()

  const fetchData = () => {
    return axios.get("/api/ticket/alltickets/");
  };

  const { isSuccess, isLoading, data: response, isError, error } = useQuery(
    ["documentation-tickets"],
    fetchData,
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  const tickets = response?.data?.data ?? []

  const [ticketId, setTicketId] = useState()

  useEffect(() => {
    if (isSuccess) {
      setTicketId(tickets[0]?.id)
    }
  }, [isSuccess])


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
          <TicketSelector
            tickets={tickets}
            ticketId={ticketId}
            setTicketId={setTicketId}
          />
        </div>

        <div className="flex-grow space-y-6 bg-white p-5">
          {tickets.map((ticket) => ticket.id == ticketId ? <TicketEditForm key={ticket.id} ticketId={ticket.id} /> : null)}
        </div>
      </div>
    </DocumentationLayout>
  );
}