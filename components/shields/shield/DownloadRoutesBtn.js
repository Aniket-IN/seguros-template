import InputGroup from "@/components/utility/InputGroup"
import Modal from "@/components/utility/Modal"
import React, { createElement, useState } from 'react'

const DownloadRoutesBtn = ({ as = 'button', ...props }) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-2xl shadow-xl overflow-hidden bg-white rounded"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Historial de Ubicaciones</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="space-y-7 !py-10">
            <div className="flex gap-4">
              <div className="flex-grow">
                <InputGroup.Label>Etiqueta</InputGroup.Label>
                <InputGroup>
                  <InputGroup.Input
                    placeholder="Carlos Pérez Guerrero"
                  />
                </InputGroup>
              </div>
              <div>
                <InputGroup.Label>Fecha</InputGroup.Label>
                <div className="flex">
                  <div>
                    <InputGroup>
                      <InputGroup.Input
                        type="date"
                      />
                    </InputGroup>
                  </div>
                  <div className="flex-shrink-0 px-2 flex items-center justify-center self-stretch">
                    -
                  </div>
                  <div>
                    <InputGroup>
                      <InputGroup.Input
                        type="date"
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <InputGroup.Label>Formato</InputGroup.Label>
              <div className="flex gap-7 text-sm font-medium">
                <label className="inline-flex gap-1.5 items-center">
                  <input
                    defaultChecked
                    name="format"
                    type="radio"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                  />
                  .PDF
                </label>
                <label className="inline-flex gap-1.5 items-center">
                  <input
                    defaultChecked
                    name="format"
                    type="radio"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                  />
                  .XLSX
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="text-white bg-black">
              Descargar
            </Modal.FooterBtn>
          </Modal.Footer>
        </Modal.Wrapper>
      </Modal>
      {createElement(as, {
        ...props,
        onClick: () => setOpen(true)
      })}
    </>
  )
}

export default DownloadRoutesBtn