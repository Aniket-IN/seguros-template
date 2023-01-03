import React, { useEffect } from "react";
import Modal from "../utility/Modal";
import InputGroup from "../utility/InputGroup";
import { useForm } from "react-hook-form";

const AdminFormModal = ({
  open,
  setOpen,
  data,
  setData,
  submit,
  close,
  mode = "create",
  wasRecentlySuccessful = false,
}) => {
  const isCreateMode = !!(mode == "create");
  const isEditMode = !!(mode == "edit");

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (wasRecentlySuccessful) {
      reset();
    }
  }, [wasRecentlySuccessful]);

  return (
    <Modal
      open={open}
      close={close}
      className="w-full max-w-screen-md overflow-hidden bg-white shadow-xl"
    >
      <Modal.Wrapper as="form" onSubmit={handleSubmit(submit)}>
        {/* Header */}
        <Modal.Header className="bg-accent">
          <h2 className="text-lg font-medium">
            {isCreateMode && "Crear Administrador"}
            {isEditMode && "Editar información"}
          </h2>
          <Modal.XBtn onClick={close} />
        </Modal.Header>

        {/* Body */}
        <Modal.Body>
          <div className="flex flex-col gap-5 text-sm sm:flex-row">
            <div className="flex-shrink-0">
              <h4 className="font-semibold">Foto de perfil</h4>
              <img
                src="/assets/img/default-profile-pic-1.jpg"
                className="mt-3 block aspect-square w-40 rounded-lg border object-cover"
                alt="User"
              />
              <p className="mt-2 text-secondary">
                Subir una foto de perfil <br />
                Formato: 750x750px en .PNG,
              </p>
              <h4 className="mt-3 font-semibold underline">Cargar</h4>
              <p>Archivo: ejemplo.png</p>
            </div>
            <div className="flex-grow">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <InputGroup.Label>Nombre</InputGroup.Label>
                  <InputGroup>
                    <InputGroup.Input
                      {...register("first_name", { required: true })}
                    />
                  </InputGroup>
                </div>
                <div>
                  <InputGroup.Label>Apellido</InputGroup.Label>
                  <InputGroup>
                    <InputGroup.Input
                      {...register("last_name", { required: true })}
                    />
                  </InputGroup>
                </div>
                <div>
                  <InputGroup.Label>Correo</InputGroup.Label>
                  <InputGroup>
                    <InputGroup.Input
                      {...register("email", {
                        required: true,
                        disabled: isEditMode,
                      })}
                    />
                  </InputGroup>
                </div>
                {!isEditMode && (
                  <div>
                    <InputGroup.Label>Contraseña</InputGroup.Label>
                    <InputGroup>
                      <InputGroup.Input
                        {...register("password", { required: true })}
                      />
                    </InputGroup>
                  </div>
                )}
                <div>
                  <InputGroup.Label>Teléfono</InputGroup.Label>
                  <InputGroup>
                    <InputGroup.Input
                      type="number"
                      {...register("phone", { required: true })}
                    />
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer className="bg-accent">
          <Modal.FooterBtn
            type="button"
            onClick={close}
            className="bg-white text-black"
          >
            Cancelar
          </Modal.FooterBtn>
          <Modal.FooterBtn type="submit" className="bg-black text-white">
            Guardar
          </Modal.FooterBtn>
        </Modal.Footer>
      </Modal.Wrapper>
    </Modal>
  );
};

export default AdminFormModal;
