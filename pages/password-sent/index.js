import Auth from "@/components/layouts/Auth"
import ResendBtn from "@/components/password-sent/ResendBtn"
import Link from "next/link"
import React from 'react'

const PasswordSent = () => {

  const submit = (e) => {
    e.preventDefault();
  }



  return (
    <Auth>
      <form onSubmit={submit} className="block w-full max-w-md bg-white shadow-md rounded border px-10 pt-14 pb-12">

        {/* Back Btn */}
        {/* <Link href="/login">
          <ArrowLeftIcon className="w-6 h-6" />
        </Link> */}

        <h1 className="mt-3 text-2xl font-semibold">Enviamos la contraseña a tu correo</h1>
        <p className="mt-4 text-secondary">No olvides de revisar tu carpeta de Correos no deseados o Spam.</p>


        <Link href="/" className="block text-center mt-44 py-5 px-4 w-full text-base text-white bg-primary rounded-xl focus:outline-none ring-primary focus:ring-2 focus:ring-offset-2">
          Volver a Iniciar Sesión
        </Link>

        <div className="mt-9 flex justify-center">
          <ResendBtn />
        </div>

      </form>
    </Auth>
  )
}

export default PasswordSent