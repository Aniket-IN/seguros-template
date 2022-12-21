import Admin from "@/components/layouts/Admin"
import SectionHeading from "@/components/SectionHeading"
import RightCard from "@/components/support/RightCard"
import DividerText from "@/components/utility/DividerText"
import InputGroup from "@/components/utility/InputGroup"
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"
import React from 'react'

export default function index() {
  return (
    <Admin pageTitle="Soporte" headerTitle="Soporte">

      <div className="h-full lg:max-h-full lg:h-[calc(100vh-60px)]">
        <div className="flex lg:flex-row flex-col h-full">

          {/* Chat sidebar */}
          <div className="lg:max-w-xs w-full bg-white  border flex flex-col max-h-96 lg:max-h-full">

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

          <div className="flex flex-col-reverse lg:flex-row gap-5 px-4 md:px-5 flex-grow mt-7">

            <div className="bg-white p-4 flex-grow flex flex-col">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11">
                    <img className="w-11 h-11" src="/assets/img/sample/user-2.png" alt="User" />
                  </div>
                  <div>
                    <dd className="font-semibold">Carlos Pérez Guerrero</dd>
                    <dd>UI123123</dd>
                  </div>
                </div>
                <button className="bg-primary text-white rounded px-4 py-2.5">
                  Marcar resuelto
                </button>
              </div>
              <div className="flex-grow px-4 bg-accent space-y-3 mt-5 overflow-auto">
                <div className="px-4 py-3">
                  <DividerText text="25/05/22" textClassName="bg-accent" />
                </div>
              </div>
              <div className="flex border pt-5 px-5 border-t-black border-t-2">
                <div className="flex-grow flex-shrink-0">
                  <textarea className="focus:outline-none" name="message" id="message" rows="6" placeholder="Escribe tu mensaje" />
                </div>
                <div>
                  <button className="bg-black text-white px-4 py-2.5 rounded">
                    Enviar
                  </button>
                </div>
              </div>
            </div>


            <RightCard />

          </div>

        </div>
      </div>


    </Admin>
  )
}

