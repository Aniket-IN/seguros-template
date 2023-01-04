import InputGroup from "@/components/utility/InputGroup";
import Modal from "@/components/utility/Modal";
import useAxios from "@/hooks/useAxios";
import { StarIcon } from "@heroicons/react/20/solid";
import React, { createElement, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const CreateSubjectModalBtn = ({ as = "button", className = "", refetch, ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const { axios } = useAxios();

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    axios.post('/api/ticket/alltickets/', data)
      .then((response) => {
        toast.success("Ticket created successfully!")
        close()
        reset()
        refetch()
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
  }

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-md overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper as="form" onSubmit={handleSubmit(submit)}>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Crear Asunto</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <p className="text-secondary">
              Elige un nombre para una nuevo Asunto de Ayuda
            </p>
            <div className="my-5">
              <InputGroup.Label>Título</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input
                  {...register('title', { required: true })}
                />
              </InputGroup>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white text-black">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn type="submit" className="bg-black text-white">
              Cerrar
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: className,
        ...props,
      })}
    </>
  );
};

export default CreateSubjectModalBtn;
