import React from "react";
import Modal from "@/components/utility/Modal";
import InputGroup from "../utility/InputGroup";

const PromoCodeFormModal = ({ open, setOpen, register, errors = {}, submit, mode = "create" }) => {

  const close = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      close={close}
      className="w-full max-w-xl overflow-hidden bg-white shadow-xl"
    >
      <Modal.Wrapper as="form" onSubmit={submit}>
        <Modal.Header className="bg-accent">
          <h2 className="text-lg font-medium">Detalles de cupón</h2>
          <Modal.XBtn onClick={close} />
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div className="flex gap-5">
            <div>
              <InputGroup.Label>Código de promo</InputGroup.Label>
              <InputGroup isInvalid={errors?.promo_code}>
                <InputGroup.Input
                  {...register('promo_code', {
                    required: "This field is required."
                  })}
                />
              </InputGroup>
              <InputGroup.Error error={errors?.promo_code?.message} />
            </div>
            <div className="flex-grow">
              <InputGroup.Label>Etiqueta</InputGroup.Label>
              <InputGroup isInvalid={errors?.Etiquette}>
                <InputGroup.Input
                  {...register('Etiquette', {
                    required: "This field is required.",
                  })}
                />
              </InputGroup>
              <InputGroup.Error error={errors?.Etiquette?.message} />
            </div>
          </div>
          <div>
            <InputGroup.Label>Membresía</InputGroup.Label>
            <div className="flex gap-7">
              <label className="space-x-4">
                <input value="level 1" type="radio"
                  {...register('membership', {
                    required: "This field is required"
                  })}
                />
                <span>Nivel 1</span>
              </label>
              <label className="space-x-4">
                <input value="level 2" type="radio"
                  {...register('membership', {
                    required: "This field is required"
                  })}
                />
                <span>Nivel 2</span>
              </label>
              <label className="space-x-4">
                <input value="level 3" type="radio"
                  {...register('membership', {
                    required: "This field is required"
                  })} />
                <span>Nivel 3</span>
              </label>
            </div>
            <InputGroup.Error error={errors?.membership?.message} />
          </div>

          <div className="grid grid-cols-1 gap-5 ">
            <div>
              <InputGroup.Label>Duración</InputGroup.Label>
              <div className="flex gap-3">
                <div className="flex-grow">
                  <InputGroup isInvalid={errors?.start_duration}>
                    <InputGroup.Input type="date"
                      {...register('start_duration', {
                        required: "This field is required."
                      })}
                    />
                  </InputGroup>
                  <InputGroup.Error error={errors?.start_duration?.message} />
                </div>
                <div className="flex  flex-shrink-0 items-center">-</div>
                <div className="flex-grow">
                  <InputGroup isInvalid={errors?.end_duration}>
                    <InputGroup.Input type="date"
                      {...register('end_duration', {
                        required: "This field is required."
                      })} />
                  </InputGroup>
                  <InputGroup.Error error={errors?.end_duration?.message} />
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-3">
                <div className="flex-grow">
                  <InputGroup.Label>Stock</InputGroup.Label>
                  <InputGroup isInvalid={errors?.stocks}>
                    <InputGroup.Input type="number"
                      {...register('stocks', {
                        required: "This field is required."
                      })}
                    />
                  </InputGroup>
                  <InputGroup.Error error={errors?.stocks?.message} />
                </div>
                <div className="flex-grow">
                  <InputGroup.Label>Descuento</InputGroup.Label>
                  <InputGroup isInvalid={errors?.discount}>
                    <InputGroup.Input type="number"
                      {...register('discount', {
                        required: "This field is required."
                      })}
                    />
                  </InputGroup>
                  <InputGroup.Error error={errors?.discount?.message} />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-accent">
          <Modal.FooterBtn type="button" onClick={close} className="bg-white">
            {mode == "create" ? "Cancelar" : "Cerrar"}
          </Modal.FooterBtn>
          <Modal.FooterBtn type="submit" className="bg-black text-white">
            {mode == "create" ? "Crear cupón" : "Editar Cupón"}
          </Modal.FooterBtn>
        </Modal.Footer>
      </Modal.Wrapper>
    </Modal>
  );
};

export default PromoCodeFormModal;
