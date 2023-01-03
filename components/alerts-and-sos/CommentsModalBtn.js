import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState } from "react";
import InputGroup from "../utility/InputGroup";

const CommentsModalBtn = ({ as = "button", className = "", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-4xl overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Comentarios</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2">
            <ul className="overflow-auto bg-accent p-2.5 text-sm lg:h-96">
              <li className="bg-white px-2.5 py-3">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <div className="mt-3 flex justify-between gap-4 text-secondary">
                  <span>Juan Jesús Ledesma</span>
                  <span>25/05/22, 12:00 Hrs</span>
                </div>
              </li>
            </ul>
            <div className="text-sm">
              <InputGroup>
                <InputGroup.Textarea
                  className="h-60"
                  placeholder="Escribir..."
                />
              </InputGroup>
              <div className="mt-3 text-right">
                <button className="rounded bg-black px-4 py-1.5 text-white">
                  Crear comentario
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Cerrar
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: classNames(className, "font-semibold hover:underline"),
        ...props,
      })}
    </>
  );
};

export default CommentsModalBtn;
