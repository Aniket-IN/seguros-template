import Admin from "@/components/layouts/Admin"
import SectionHeading from "@/components/SectionHeading"
import InputGroup from "@/components/utility/InputGroup"
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import React from 'react'

export default function index() {
  return (
    <Admin pageTitle="Soporte" headerTitle="Soporte">

      <div className="h-full max-h-96 lg:max-h-full lg:h-[calc(100vh-60px)]">
        <div className="flex h-full">

          {/* Chat sidebar */}
          <div className="lg:max-w-xs w-full bg-white  border flex flex-col">

            <div className="flex gap-2 p-4">
              <h2 className="font-medium">BANDEJA (2)</h2>
              <span className="ml-auto text-gray-400 text-sm">20 de 240</span>
              <div className="flex gap-1">
                <button className="w-5 h-5 flex justify-center items-center border border-black text-black opacity-40 border-opacity-40">
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button className="w-5 h-5 flex justify-center items-center border border-black text-black opacity-60 border-opacity-60">
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 pt-0">
              <InputGroup className="relative">
                <div className="w-9 p-1 px-1.5 text-secondary pl-3 absolute inset-y-0 left-0 flex items-center justify-center">
                  <MagnifyingGlassIcon className="w-full aspect-square" />
                </div>
                <InputGroup.Input
                  id="search"
                  type="search"
                  name="search"
                  className="pl-9 bg-accent"
                  placeholder="Buscar"
                />
              </InputGroup>
            </div>

            <ul className="flex-grow overflow-auto divide-y">
              {[...Array(50)].map((item, index) => (
                <li className={classNames("p-4 text-sm space-y-2.5", index == 0 && "bg-neutral")}>
                  <div className="flex justify-between gap-2">
                    <dd>Ticket #123123</dd>
                    {!!(index == 0) && (
                      <dd className="text-xs w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white">
                        <span>1</span>
                      </dd>
                    )}
                  </div>
                  <dd className="font-semibold">Objeto perdido por otros temas</dd>
                  <div className="flex text-sm justify-between items-center">
                    <span className="text-xs">08:00 pm, 12/12/12</span>
                    {index == 0 ? (
                      <span className="font-semibold text-danger">Pendiente</span>
                    ) : (
                      <span className="font-semibold text-success">Resuelto</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="flex gap-5 px-4 md:px-5 flex-grow mt-7">
            <div className="bg-white p-5 flex-grow flex flex-col">
              <div className="flex">
                <div className="w-11 h-11">
                  <img className="w-11 h-11" src="/assets/img/sample/user-2.png" alt="User" />
                </div>
              </div>
            </div>
            <div className=" w-full lg:max-w-xs">
              <div className="p-5"></div>
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
            </div>
          </div>

        </div>
      </div>


    </Admin>
  )
}
