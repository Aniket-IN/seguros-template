import Auth from "@/components/layouts/Auth"
import InputGroup from "@/components/utility/InputGroup"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import React from 'react'

const ForgotPassword = () => {

  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <Auth>
      <form onSubmit={submit} className="block w-full max-w-md bg-white shadow-md rounded border px-10 pt-8 pb-40">

        {/* Back Btn */}
        <Link href="/login">
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>

        <h1 className="mt-3 text-2xl font-semibold">Recupera tu contraseña</h1>
        <p className="mt-4 text-secondary">Ingresa tu correo para enviar tu contraseña.</p>


        <div className="mt-11">
          <InputGroup.Label className="!text-base !font-semibold !mb-2 !text-opacity-100">Correo</InputGroup.Label>
          <InputGroup>
            <InputGroup.Input
              className="!py-2"
              placeholder="yourname@example.com"
            />
          </InputGroup>
        </div>

        <button type="submit" className="mt-16 py-5 px-4 w-full text-base text-white bg-primary rounded-xl focus:outline-none ring-primary focus:ring-2 focus:ring-offset-2">
          Iniciar Sesión
        </button>

      </form>
    </Auth>
  )
}

export default ForgotPassword