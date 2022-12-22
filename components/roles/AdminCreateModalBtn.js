import InputGroup from "@/components/utility/InputGroup"
import Modal from "@/components/utility/Modal"
import React, { createElement, useState } from 'react'

const AdminCreateModalBtn = ({ as = 'button', className = '', ...props }) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-screen-md shadow-xl overflow-hidden bg-white"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Crear Administrador</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-col sm:flex-row gap-5 text-sm">
              <div className="flex-shrink-0">
                <h4 className="font-semibold">Foto de perfil</h4>
                <img src="/assets/img/default-profile-pic-1.jpg" className="mt-3 block w-40 rounded-lg border aspect-square object-cover" alt="User" />
                <p className="text-secondary mt-2">
                  Subir una foto de perfil <br />
                  Formato: 750x750px en .PNG,
                </p>
                <h4 className="font-semibold mt-3 underline">Cargar</h4>
                <p>Archivo: ejemplo.png</p>
              </div>
              <div className="flex-shrink-0 flex-grow">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <InputGroup.Label>Nombre</InputGroup.Label>
                    <InputGroup>
                      <InputGroup.Input />
                    </InputGroup>
                  </div>
                  <div>
                    <InputGroup.Label>Apellido</InputGroup.Label>
                    <InputGroup>
                      <InputGroup.Input />
                    </InputGroup>
                  </div>
                  <div>
                    <InputGroup.Label>Correo</InputGroup.Label>
                    <InputGroup>
                      <InputGroup.Input />
                    </InputGroup>
                  </div>
                  <div>
                    <InputGroup.Label>Contraseña</InputGroup.Label>
                    <InputGroup>
                      <InputGroup.Input />
                    </InputGroup>
                  </div>
                  <div>
                    <InputGroup.Label>Teléfono</InputGroup.Label>
                    <InputGroup>
                      <InputGroup.Input />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="text-black bg-white">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn onClick={close} className="text-white bg-black">
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
  )
}

export default AdminCreateModalBtn