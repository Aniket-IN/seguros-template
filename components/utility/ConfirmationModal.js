import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React from "react";
import Modal from "./Modal";

// mode: confirmation, alert
// type: success, danger, warning, info

const ConfirmationModal = ({
  open,
  close,
  title = null,
  caption = null,
  type = "danger",
  mode = "confirmation",
  closeBtn: closeBtnProps = {},
  confirmBtn: confirmBtnProps = {},
}) => {
  const closeBtn = {
    show: true,
    text: "Cancelar",
    onClick: close,
    ...closeBtnProps,
  };

  const confirmBtn = {
    show: true,
    text: "CONTINUAR",
    onClick: mode == "alert" ? close : confirmBtnProps.onClick,
    ...confirmBtnProps,
  };

  const buttonsCount = [closeBtn.show, confirmBtn.show].filter(
    (item) => !!item
  ).length;

  return (
    <Modal
      open={open}
      close={close}
      className="w-full max-w-xs rounded-md bg-white"
    >
      <Modal.Wrapper>
        <div className="p-4">
          <div className="flex justify-end">
            <button
              type="button"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-secondary hover:bg-slate-100"
              onClick={close}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-3 text-center">
            <CheckCircleIcon
              className={classNames(
                "h-w-20 inline-block w-20",
                !!(type == "success") && "text-primary",
                !!(type == "danger") && "text-danger",
                !!(type == "warning") && "text-warning"
              )}
            />
            {!!caption && <p>{caption}</p>}
          </div>
        </div>

        {buttonsCount > 0 && (
          <div
            className={classNames(
              "mt-6 flex items-center gap-4 px-4 py-3 text-sm",
              buttonsCount > 1 ? "bg-accent" : "",
              buttonsCount < 2 ? "justify-center" : ""
            )}
          >
            {!!closeBtn.show && (
              <button
                onClick={closeBtn.onClick}
                className={classNames(
                  "rounded bg-white px-4 py-2 text-black",
                  closeBtn.className
                )}
              >
                {closeBtn.text}
              </button>
            )}
            {!!confirmBtn.show && (
              <button
                onClick={confirmBtn.onClick}
                className={classNames(
                  "rounded bg-black px-4 py-2 text-white",
                  confirmBtn.className
                )}
              >
                {confirmBtn.text}
              </button>
            )}
          </div>
        )}
      </Modal.Wrapper>
    </Modal>
  );
};

export default ConfirmationModal;
