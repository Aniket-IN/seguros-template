import Auth from "@/components/layouts/Auth"
import InputGroup from "@/components/utility/InputGroup"
import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'
import { useForm } from "react-hook-form"


const Login = () => {
  const router = useRouter()
  const { register } = useForm()

  const submit = (e) => {
    e.preventDefault()

    // Redirect to dashboard
    router.push('/dashboard');
  }

  return (
    <Auth>
      <form onSubmit={submit} className="block w-full max-w-md bg-white shadow-md rounded border px-10 py-12">
        <div>
          <img src="/assets/img/logo-black-text.svg" className="block mx-auto max-w-[230px] w-full" alt="Company Logo" />
        </div>
        <h1 className="mt-8 text-2xl font-semibold">Bienvenido administrador</h1>
        <p className="mt-4 text-secondary">Ingresa los datos para continuar.</p>

        <div className="mt-5 space-y-6">
          <div>
            <InputGroup.Label className="!text-base !font-semibold !mb-2 !text-opacity-100">Correo</InputGroup.Label>
            <InputGroup>
              <InputGroup.Input
                {...register("email")}
                className="!py-2"
                placeholder="yourname@example.com"
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup.Label className="!text-base !font-semibold !mb-2 !text-opacity-100">Contraseña</InputGroup.Label>
            <InputGroup>
              <InputGroup.Input
                {...register("password")}
                type="password"
                className="!py-2"
                placeholder="*********"
              />
            </InputGroup>
          </div>
        </div>

        <button type="submit" className="mt-16 py-5 px-4 w-full text-base text-white bg-primary rounded-xl focus:outline-none ring-primary focus:ring-2 focus:ring-offset-2">
          Iniciar Sesión
        </button>

        <div className="mt-9 flex justify-center">
          <Link href="/forgot-password" className="inline-block mx-auto font-semibold underline hover:text-primary">
            Olvide mi contraseña
          </Link>
        </div>


      </form>
    </Auth>
  )
}

export default Login