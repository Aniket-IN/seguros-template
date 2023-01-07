import { createElement, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import Modal from "./utility/Modal";

const ViewPhotoBtn = ({
  as = "button",
  headerTitle = "",
  user = {},
  dp = '',
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        close={close}
        className="w-full max-w-md overflow-hidden rounded bg-white shadow-xl"
      >
        <Modal.Wrapper>
          <Modal.Header className="bg-accent">
            <h2 className="text-lg font-medium">{headerTitle}</h2>
            <Modal.XBtn onClick={close} />
          </Modal.Header>
          <Modal.Body className="space-y-7 py-5">
            <div className="flex gap-3 text-sm">
              <ProfilePicture
                src={dp}
                className="inline-block h-11 w-11 rounded-full"
              />
              <div>
                <dd>{user.name}</dd>
                <dd>{user.id}</dd>
              </div>
            </div>
            <div>
              <img src={user.avatar} className="block aspect-square w-full" />
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
        ...props,
        onClick: () => setOpen(true),
      })}
    </>
  );
};

export default ViewPhotoBtn;
