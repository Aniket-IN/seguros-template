import Auth from "@/components/layouts/Auth";
import InputGroup from "@/components/utility/InputGroup";
import useAxios from "@/hooks/useAxios";
import { setLoggedIn, setToken, update } from "@/redux/userSlice";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const { axios } = useAxios();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [processing, setProcessing] = useState(false);

  const submit = handleSubmit((data) => {
    console.log("data",data);
    setProcessing(true);
    axios
      // .post("/api/admin/adminlogin/", data)
        .post("/api/admin/adminlogin/", data)
      .then((response) => {
        const data = response.data.data;

        dispatch(setToken(data.token));
        dispatch(
          update({
            first_name: data.user_profile.user.first_name,
            last_name: data.user_profile.user.last_name,
            email: data.user_profile.user.email,
            phone: data.user_profile.user.phone,
            image: data.user_profile.user.image,
          })
        );
        dispatch(setLoggedIn(true));
        toast.success("Logged in succssfully!");
        router.push("/dashboard");
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ?? `Oops! Internal server error!`
        );
      })
      .then(() => {
        setProcessing(false);
      });
  });

  return (
    <Auth>
      <form
        onSubmit={submit}
        className="block w-full max-w-md rounded border bg-white px-10 py-12 shadow-md"
      >
        <div>
          <img
            src="/assets/img/logo-black-text.svg"
            className="mx-auto block w-full max-w-[230px]"
            alt="Company Logo"
          />
        </div>
        <h1 className="mt-8 text-2xl font-semibold">
          Bienvenido administrador
        </h1>
        <p className="mt-4 text-secondary">Ingresa los datos para continuar.</p>

        <div className="mt-5 space-y-6">
          <div>
            <InputGroup.Label className="!mb-2 !text-base !font-semibold !text-opacity-100">
              Correo
            </InputGroup.Label>
            <InputGroup>
              <InputGroup.Input
                {...register("email_address", {
                  required: true,
                })}
                className="!py-2"
                placeholder="yourname@example.com"
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup.Label className="!mb-2 !text-base !font-semibold !text-opacity-100">
              Contraseña
            </InputGroup.Label>
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

        <button
          disabled={!!processing}
          type="submit"
          className="mt-16 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-primary py-5 px-4 text-base text-white ring-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Iniciar Sesións
          {processing ? (
            <ArrowPathIcon className="h-5 w-5 animate-spin" />
          ) : null}
        </button>

        <div className="mt-9 flex justify-center">
          <Link
            href="/forgot-password"
            className="mx-auto inline-block font-semibold underline hover:text-primary"
          >
            Olvide mi contraseña
          </Link>
        </div>
      </form>
    </Auth>
  );
};

export default Login;
