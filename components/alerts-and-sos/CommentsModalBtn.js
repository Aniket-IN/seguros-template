import Modal from "@/components/utility/Modal"
import classNames from "classnames"
import React, { createElement, useState } from 'react'
import InputGroup from "../utility/InputGroup"

const CommentsModalBtn = ({ as = 'button', className = '', ...props }) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-4xl shadow-xl overflow-hidden bg-white"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Comentarios</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ul className="bg-accent lg:h-96 p-2.5 text-sm overflow-auto">
              <li className="bg-white px-2.5 py-3">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <div className="mt-3 flex justify-between gap-4 text-secondary">
                  <span>Juan Jesús Ledesma</span>
                  <span>25/05/22, 12:00 Hrs</span>
                </div>
              </li>
            </ul>
            <div className="text-sm">
              <InputGroup>
                <InputGroup.Textarea className="h-60" placeholder="Escribir..." />
              </InputGroup>
              <div className="text-right mt-3">
                <button className="px-4 py-1.5 text-white bg-black rounded">Crear comentario</button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="text-white bg-black">
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
  )
}

export default CommentsModalBtn