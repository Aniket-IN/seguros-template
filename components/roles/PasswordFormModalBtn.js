import React, { createElement, useState } from "react";
import InputGroup from "../utility/InputGroup";
import Modal from "../utility/Modal";

const PasswordFormModalBtn = ({ as = "button", className = "", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-sm overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          {/* Header */}
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Actualizar contraseña</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="space-y-7">
            <div>
              <InputGroup.Label>Contraseña actual</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input />
              </InputGroup>
            </div>
            <hr className="my-5" />
            <div>
              <InputGroup.Label>Nueva contraseña</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input />
              </InputGroup>
            </div>
            <div>
              <InputGroup.Label>Confirmar contraseña</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input />
              </InputGroup>
            </div>
          </Modal.Body>

          {/* Footer */}
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white text-black">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Guardar
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

export default PasswordFormModalBtn;
