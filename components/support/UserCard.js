import React from 'react'
import SectionHeading from "../SectionHeading"

const UserCard = () => {
  return (
    <div className="p-5 bg-white">
      <div className="text-center">
        <img src="/assets/img/sample/user-2.png" className="inline-block w-24 h-24 mb-2" alt="User" />
        <SectionHeading>Carlos Pérez</SectionHeading>
        <dd className="text-secondary">ID UI123123</dd>
        <dd className="text-[15px] text-danger font-semibold">Ticket Pendiente</dd>
      </div>
      <div className="text-sm space-y-5 mt-5">
        <dl>
          <dd className="font-semibold">Ticket</dd>
          <dd className="text-secondary">ID-UI123123</dd>
        </dl>
        <dl>
          <dd className="font-semibold">Asunto</dd>
          <dd className="text-secondary">Objeto perdido por otros temas</dd>
        </dl>
        <dl>
          <dd className="font-semibold">Fecha de creación</dd>
          <dd className="text-secondary">25/05/22</dd>
        </dl>
        <dl>
          <dd className="font-semibold">Ubicación</dd>
          <dd className="text-secondary">ID UI123123</dd>
        </dl>
        <dl>
          <dd className="font-semibold">Dirección IP</dd>
          <dd className="text-secondary">19.2.0.10.2</dd>
        </dl>
      </div>
    </div>
  )
}

export default UserCard