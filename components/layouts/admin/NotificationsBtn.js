import React, { Fragment, useState } from 'react'
import HeaderBtn from "../HeaderBtn"
import { BellIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from "@heroicons/react/24/solid"

const NotificationsBtn = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(val => !val)
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-accent shadow-xl">

                    <div className="flex items-center py-5 px-5 border-b-2">
                      <div className="mr-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-accent text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <Dialog.Title className="text-lg font-medium ">
                        Notificaciones (+99)
                      </Dialog.Title>
                    </div>

                    <div className="flex-grow p-5 overflow-auto space-y-3.5">
                      {[...Array(20)].map((item, index) => (
                        <div className="flex text-sm odd:bg-primary even:bg-secondary-3 even:bg-opacity-40">
                          <div className="ml-1 flex gap-5 px-5 py-5 bg-white">
                            <div className="w-14 h-14 flex-shrink-0">
                              <img className="w-14 h-14" src="/assets/img/sample/user-1.png" />
                            </div>
                            <div className="space-y-1.5">
                              <h3 className="font-bold">Ejemplo de notificación</h3>
                              <p>
                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's text ever since the 1500s.
                              </p>
                              <p className="text-secondary">08:00 pm, 12/12/12</p>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <HeaderBtn onClick={toggle} className="text-sm ml-auto">
        <BellIcon className="w-7 h-7 text-black text-opacity-80" />
        <span className="hidden xl:inline">Notificaciones</span>
        <span className="px-2.5 pr-3 py-1 rounded-full bg-primary text-white">+99</span>
      </HeaderBtn>
    </>
  )
}

export default NotificationsBtn