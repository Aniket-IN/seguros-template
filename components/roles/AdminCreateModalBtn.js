import useAxios from "@/hooks/useAxios"
import React, { createElement, useState } from 'react'
import { toast } from "react-hot-toast"
import AdminFormModal from "../admin/AdminFormModal"

const AdminCreateModalBtn = ({ as = 'button', className = '', ...props }) => {
  const [open, setOpen] = useState(false)
  const { axios } = useAxios()

  const close = () => {
    setOpen(false);
  };

  // TODO: Handle submit :)
  const submit = (data) => {
    axios.post('/api/account/adminregister', {
      full_name: `${data.first_name} ${data.last_name}`,
      phone: data.phone,
      email: data.email,
      password: data.password,
      user_type: "preveliged user",
    })
      .then((response) => {
        console.log(response.data);
        setOpen(false);
        toast.success("Admin user created successfully!")
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message ?? `Oops! Internal server error!`)
      })
  }

  return (
    <>
      <AdminFormModal
        submit={submit}
        open={open}
        close={close}
        mode="create"
      />
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: className,
        ...props,
      })}
    </>
  )
}

export default AdminCreateModalBtn