import InputGroup from "@/components/utility/InputGroup"
import useAxios from "@/hooks/useAxios"
import { update } from "@/redux/userSlice"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useLocalStorage } from "react-use"

const LoginForm = () => {

  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [token, setToken] = useLocalStorage('access_token', false)
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('is_logged_in', false)

  const { axios } = useAxios()
  const [processing, setProcessing] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard')
    }
  }, [])


  const submit = handleSubmit((data) => {
    setProcessing(true)
    axios.post('/api/account/adminlogin/', data)
      .then((response) => {
        const data = response.data.data
        setToken(data.token)

        dispatch(update({
          first_name: data.user_profile.user.first_name,
          last_name: data.user_profile.user.last_name,
          email: data.user_profile.user.email,
          phone: data.user_profile.user.phone,
          image: data.user_profile.user.image,
        }))
        setIsLoggedIn(true)
        toast.success("Logged in succssfully!")
        router.push('/dashboard')
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message ?? `Oops! Internal server error!`)
      })
      .then(() => {
        setProcessing(false)
      })
  })


  return (
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
              {...register("email", {
                required: true,
              })}
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

      <button disabled={!!(processing)} type="submit" className="inline-flex justify-center items-center gap-2.5 whitespace-nowrap mt-16 py-5 px-4 w-full text-base text-white bg-primary rounded-xl focus:outline-none ring-primary focus:ring-2 focus:ring-offset-2">
        Iniciar Sesións
        {processing ? <ArrowPathIcon className="w-5 h-5 animate-spin" /> : null}
      </button>

      <div className="mt-9 flex justify-center">
        <Link href="/forgot-password" className="inline-block mx-auto font-semibold underline hover:text-primary">
          Olvide mi contraseña
        </Link>
      </div>


    </form>
  )
}

export default LoginForm