import React from "react";
import Modal from "@/components/utility/Modal";
import InputGroup from "../utility/InputGroup";

const PromoCodeFormModal = ({
  open,
  setOpen,
  data,
  setData,
  submit,
  mode = "create",
}) => {
  const close = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      close={close}
      className="w-full max-w-xl overflow-hidden bg-white shadow-xl"
    >
      <Modal.Wrapper>
        <Modal.Header className="bg-accent">
          <h2 className="text-lg font-medium">Detalles de cupón</h2>
          <Modal.XBtn onClick={close} />
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div className="flex gap-5">
            <div>
              <InputGroup.Label>Código de promo</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input />
              </InputGroup>
            </div>
            <div className="flex-grow">
              <InputGroup.Label>Etiqueta</InputGroup.Label>
              <InputGroup>
                <InputGroup.Input />
              </InputGroup>
            </div>
          </div>
          <div>
            <InputGroup.Label>Membresía</InputGroup.Label>
            <div className="flex gap-7">
              <label className="space-x-4">
                <input type="radio" name="member" />
                <span>Nivel 1</span>
              </label>
              <label className="space-x-4">
                <input type="radio" name="member" />
                <span>Nivel 2</span>
              </label>
              <label className="space-x-4">
                <input type="radio" name="member" />
                <span>Nivel 3</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <InputGroup.Label>Duración</InputGroup.Label>
              <div className="flex gap-3">
                <div className="flex-grow">
                  <InputGroup>
                    <InputGroup.Input />
                  </InputGroup>
                </div>
                <div className="flex  flex-shrink-0 items-center">-</div>
                <div className="flex-grow">
                  <InputGroup>
                    <InputGroup.Input />
                  </InputGroup>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-3">
                <div className="flex-grow">
                  <InputGroup.Label>Stock</InputGroup.Label>
                  <InputGroup>
                    <InputGroup.Input />
                  </InputGroup>
                </div>
                <div className="flex-grow">
                  <InputGroup.Label>Descuento</InputGroup.Label>
                  <InputGroup>
                    <InputGroup.Input />
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-accent">
          <Modal.FooterBtn onClick={close} className="bg-white">
            {mode == "create" ? "Cancelar" : "Cerrar"}
          </Modal.FooterBtn>
          <Modal.FooterBtn onClick={submit} className="bg-black text-white">
            {mode == "create" ? "Crear cupón" : "Editar Cupón"}
          </Modal.FooterBtn>
        </Modal.Footer>
      </Modal.Wrapper>
    </Modal>
  );
};

export default PromoCodeFormModal;
