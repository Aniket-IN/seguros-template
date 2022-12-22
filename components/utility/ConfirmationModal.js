import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import React from 'react'
import Modal from "./Modal"

// mode: confirmation, alert
// type: success, danger, warning, info

const ConfirmationModal = ({
  open,
  close,
  title = null,
  caption = null,
  type = 'danger',
  mode = 'confirmation',
  closeBtn: closeBtnProps = {},
  confirmBtn: confirmBtnProps = {},
}) => {

  const closeBtn = {
    show: true,
    text: 'Cancelar',
    onClick: close,
    ...closeBtnProps,
  }

  const confirmBtn = {
    show: true,
    text: 'CONTINUAR',
    onClick: mode == 'alert' ? close : confirmBtnProps.onClick,
    ...confirmBtnProps,
  }

  const buttonsCount = [closeBtn.show, confirmBtn.show].filter((item) => !!item).length;

  return (
    <Modal open={open} close={close} className="w-full max-w-xs bg-white rounded-md">
      <Modal.Wrapper>
        <div className="p-4">
          <div className="flex justify-end">
            <button
              type="button"
              className="hover:bg-slate-100 text-secondary rounded-full w-8 h-8 flex justify-center items-center flex-none"
              onClick={close}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center space-y-3">
            <CheckCircleIcon
              className={classNames(
                "w-20 h-w-20 inline-block",
                !!(type == 'success') && "text-primary",
              )}
            />
            {!!caption && <p>{caption}</p>}
          </div>
        </div>

        {(buttonsCount > 0) && (
          <div
            className={classNames("mt-6 flex items-center px-4 py-3 text-sm",
              (buttonsCount > 1) ? 'bg-accent' : '',
              (buttonsCount < 2) ? 'justify-center' : '',
            )}>
            {!!closeBtn.show && (
              <button onClick={closeBtn.onClick} className={classNames("px-4 py-2 bg-neutral text-black rounded")}>
                {closeBtn.text}
              </button>
            )}
            {!!confirmBtn.show && (
              <button onClick={confirmBtn.onClick} className={classNames("px-4 py-2 bg-black text-white rounded")}>
                {confirmBtn.text}
              </button>
            )}
          </div>
        )}

      </Modal.Wrapper>
    </Modal>
  )
}

export default ConfirmationModal