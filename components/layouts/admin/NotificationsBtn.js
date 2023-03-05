import React, { Fragment, useEffect, useState } from "react";
import HeaderBtn from "../HeaderBtn";
import { BellIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setnew_sos_alerts_count } from "@/redux/notificationSlice";

const NotificationsBtn = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const notifCount = useSelector(state => state.notificationReducer.alerts_sos_notifications);
  console.log("notif count",notifCount);

  const toggle = () => {
    setOpen((val) => !val);
  };

  // const fetchData = () => {
  //   return axios.get("/api/shield/shield-point-of-interest/", {
  //     params: {
  //       id: shield_id,
  //     },
  //   });
  // };

  // // React-query for data fetching
  // const {
  //   isLoading,
  //   isError,
  //   refetch,
  //   isRefetching,
  //   isSuccess,
  //   data: response,
  //   error,
  // } = useQuery("notifications", fetchData, {
  //   refetchOnWindowFocus: false,
  //   enabled: !!shield_id,
  // });

  useEffect(() => {

    open && dispatch(setnew_sos_alerts_count(0));
  }, [open])
  

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-hidden"
          onClose={setOpen}
        >
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
                    <div className="flex items-center border-b-2 py-5 px-5">
                      <div className="mr-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-accent text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <Dialog.Title className="text-lg font-medium ">
                        Notificaciones
                        {/* (+99) */}
                      </Dialog.Title>
                    </div>

                    <div className="flex-grow space-y-3.5 overflow-auto p-5">
                      {[...Array(20)].map((item, index) => (
                        <div
                          key={index}
                          className="flex text-sm odd:bg-primary even:bg-secondary-3 even:bg-opacity-40"
                        >
                          <div className="ml-1 flex gap-5 bg-white px-5 py-5">
                            <div className="h-14 w-14 flex-shrink-0">
                              <img
                                className="h-14 w-14"
                                src="/assets/img/sample/user-1.png"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <h3 className="font-bold">
                                Ejemplo de notificación
                              </h3>
                              <p>
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's text ever since the 1500s.
                              </p>
                              <p className="text-secondary">
                                08:00 pm, 12/12/12
                              </p>
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
      <HeaderBtn onClick={toggle} className="ml-auto text-sm">
        <BellIcon className="h-7 w-7 text-black text-opacity-80" />
        <span className="hidden xl:inline">Notificaciones</span>
       { notifCount>0 &&  <span className="rounded-full bg-primary px-2.5 py-1 pr-3 text-white">
          {notifCount}
        </span>}
      </HeaderBtn>
    </>
  );
};

export default NotificationsBtn;
