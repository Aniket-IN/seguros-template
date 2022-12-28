import { createElement, useState } from 'react'
import Modal from "./utility/Modal"


const ViewPhotoBtn = ({ as = 'button', headerTitle = '', user = {}, ...props }) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-md shadow-xl overflow-hidden bg-white rounded"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">{headerTitle}</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="space-y-7 py-5">
            <div className="flex gap-3 text-sm">
              <img src="/assets/img/sample/user-2.png" className="inline-block rounded-full w-11 h-11" />
              <div>
                <dd>{user.name}</dd>
                <dd>{user.id}</dd>
              </div>
            </div>
            <div>
              <img src={user.avatar} className="block w-full aspect-square" />
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
        ...props,
        onClick: () => setOpen(true)
      })}
    </>
  )
}

export default ViewPhotoBtn