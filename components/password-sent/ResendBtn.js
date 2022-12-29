import React, { useState } from 'react'
import ConfirmationModal from "../utility/ConfirmationModal"

const ResendBtn = () => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }

  const resend = () => {
    setOpen(true)
  }

  return (
    <>
      <ConfirmationModal
        type="success"
        mode="alert"
        open={open}
        close={close}
        caption="Contraseña reenviada"
        closeBtn={{
          show: false
        }}
      />

      <button onClick={resend} type="button" className="inline-block mx-auto font-semibold underline hover:text-primary">
        Reenviar contraseña
      </button>
    </>
  )
}

export default ResendBtn