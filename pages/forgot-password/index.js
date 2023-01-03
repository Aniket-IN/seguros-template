import Auth from "@/components/layouts/Auth";
import InputGroup from "@/components/utility/InputGroup";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const submit = (e) => {
    e.preventDefault();
    router.push("/password-sent");
  };

  return (
    <Auth>
      <form
        onSubmit={submit}
        className="block w-full max-w-md rounded border bg-white px-10 pt-8 pb-40 shadow-md"
      >
        {/* Back Btn */}
        <Link href="/">
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>

        <h1 className="mt-3 text-2xl font-semibold">Recupera tu contraseña</h1>
        <p className="mt-4 text-secondary">
          Ingresa tu correo para enviar tu contraseña.
        </p>

        <div className="mt-11">
          <InputGroup.Label className="!mb-2 !text-base !font-semibold !text-opacity-100">
            Correo
          </InputGroup.Label>
          <InputGroup>
            <InputGroup.Input
              className="!py-2"
              placeholder="yourname@example.com"
            />
          </InputGroup>
        </div>

        <button
          type="submit"
          className="mt-16 w-full rounded-xl bg-primary py-5 px-4 text-base text-white ring-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Enviar
        </button>
      </form>
    </Auth>
  );
};

export default ForgotPassword;
