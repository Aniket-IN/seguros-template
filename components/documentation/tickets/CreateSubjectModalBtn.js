import InputGroup from "@/components/utility/InputGroup";
import Modal from "@/components/utility/Modal";
import { StarIcon } from "@heroicons/react/20/solid";
import React, { createElement, useState } from "react";

const CreateSubjectModalBtn = ({ as = "button", className = "", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-md overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
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
                <InputGroup.Input />
              </InputGroup>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white text-black">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
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
