import Modal from "@/components/utility/Modal";
import classNames from "classnames";
import React, { createElement, useState } from "react";

const EvidenceModalBtn = ({ as = "button", alert: alertData = {}, className = "", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const alert = {
    evidence_number: "1231231",
    ...alertData,
    evidence: alertData.evidence ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${alertData.evidence}` : `/assets/img/sample/evidence-1.png`,
  }

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-2xl overflow-hidden bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">Evidencia#{alert.evidence_number}</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <div className="flex gap-5">
              <img
                src={alert.evidence_url}
                className="block aspect-[9/16] w-1/3 object-cover"
                alt="evidence-1"
              />
              <div className="flex-grow space-y-5 text-sm">
                <div className="aspect-video bg-neutral"></div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <dd className="font-semibold text-danger">SOS</dd>
                    <dd>SOS#{alert.evidence_number}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Ubicación</dd>
                    <dd>{alert.userprofile?.lat ?? "-12.091307"}, {alert.userprofile?.long ?? "-77.042053"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Usuario</dd>
                    <dd>{alert.userprofile?.full_name ?? "Juan Jesús Ledesma"}</dd>
                    <dd>ID. {alert.userprofile?.id ?? "7584566"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Teléfono</dd>
                    <dd>{alert.userprofile?.phone ?? "+52987564123"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Fecha</dd>
                    <dd>{alert.alert_date ?? "23/09/2022"}</dd>
                  </div>
                  <div>
                    <dd className="font-semibold">Hora</dd>
                    <dd>{alert.alert_time ?? "10:30"} Hrs</dd>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-accent">
            <Modal.FooterBtn onClick={close} className="bg-white">
              Cancelar
            </Modal.FooterBtn>
            <Modal.FooterBtn onClick={close} className="bg-black text-white">
              Descargar Evidencia
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

export default EvidenceModalBtn;
