import Modal from "@/components/utility/Modal"
import classNames from "classnames"
import React, { createElement, useState } from 'react'

const EvidenceModalBtn = ({ as = 'button', className = '', ...props }) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-2xl shadow-xl overflow-hidden bg-white"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Evidencia#123123</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <div className="flex gap-5">
              <img src="/assets/img/sample/evidence-1.png" className="block w-1/3 aspect-[9/16] object-cover" alt="evidence-1" />
              <div className="flex-grow space-y-5 text-sm">
                <div className="aspect-video bg-neutral">

                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <dd className="font-semibold text-danger">SOS</dd>
                    <dd>SOS#1231231</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Ubicación</dd>
                    <dd>-12.091307, -77.042053</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Usuario</dd>
                    <dd>Juan Jesús Ledesma</dd>
                    <dd>ID. 7584566</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Teléfono</dd>
                    <dd>+52987564123</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Fecha</dd>
                    <dd>23/09/2022</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Hora</dd>
                    <dd>10:30 Hrs.</dd>
                  </div>
                </div>
              </div>

            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn onClick={close} className="text-white bg-black">
              Descargar Evidencia
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: classNames(className, "text-primary font-semibold hover:underline"),
        ...props,
      })}
    </>
  )
}

export default EvidenceModalBtn