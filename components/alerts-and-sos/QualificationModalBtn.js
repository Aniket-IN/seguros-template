import Modal from "@/components/utility/Modal";
import { StarIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { format } from "date-fns";
import React, { createElement, useState } from "react";

const QualificationModalBtn = ({ as = "button", alert = {}, className = "", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-md overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Calificacíon</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <div className="bg-accent p-2.5 text-sm">
              <div className="space-y-2 bg-white p-2.5">
                <dl className="flex items-center gap-2.5">
                  <dd>
                    <StarIcon className="h-5 w-5 text-warning" />
                  </dd>
                  <dd className="font-semibold">{alert.rating}</dd>
                </dl>
                <p>
                  {alert.rating_description}
                </p>
                <div className="flex items-center justify-between text-secondary">
                  <span>{alert.userprofile.full_name}</span>
                  <span>
                    {format(new Date(alert.userprofile.updated_at), 'dd/MM/yy, p')}
                  </span>
                </div>
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

export default QualificationModalBtn;
