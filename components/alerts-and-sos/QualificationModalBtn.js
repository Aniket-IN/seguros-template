import Modal from "@/components/utility/Modal"
import { StarIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import React, { createElement, useState } from 'react'

const QualificationModalBtn = ({ as = 'button', className = '', ...props }) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-md shadow-xl overflow-hidden bg-white"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Calificacíon</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <div className="bg-accent p-2.5 text-sm">
              <div className="bg-white p-2.5 space-y-2">
                <dl className="flex gap-2.5 items-center">
                  <dd>
                    <StarIcon className="w-5 h-5 text-warning" />
                  </dd>
                  <dd className="font-semibold">
                    4
                  </dd>
                </dl>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <div className="flex justify-between items-center text-secondary">
                  <span>Juan Jesús Ledesma</span>
                  <span>25/05/22, 12:00 Hrs</span>
                </div>
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

export default QualificationModalBtn