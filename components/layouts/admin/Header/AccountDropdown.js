import React, { Fragment } from "react";
import classNames from "classnames";
import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import useAxios from "@/hooks/useAxios";
import ProfilePicture from "@/components/ProfilePicture";
import { setLoggedIn, setToken } from "@/redux/userSlice";

const AccountDropdown = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const { axios } = useAxios();

  const logout = () => {
    axios
      .post("/api/account/logout/")
      .catch(() => {})
      .then(() => {
        dispatch(setToken(null));
        dispatch(setLoggedIn(false));
        toast.success("Logout sucessful!");
        router.push("/");
      });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-2 self-stretch py-3 px-4 hover:bg-secondary-2">
        <ProfilePicture
          src={user.image}
          className="block h-9 w-9 rounded-full"
          alt="user-1"
        />
        <span className="hidden max-w-[150px] truncate lg:inline">
          {user.first_name} {user.last_name}
        </span>
        <ChevronDownIcon className="h-5 w-5 text-black text-opacity-80" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-1/3">
              <ProfilePicture
                src={user.image}
                className="block aspect-square rounded-full"
                alt="user-1"
              />
            </div>
            <div className="flex-grow">
              <h4 className="text-lg">
                {user.first_name} {user.last_name}
              </h4>
              <p className=" text-sm text-secondary">{user.email}</p>
              <div className="mt-2.5 text-sm font-semibold">
                <Link href="/account" className="underline">
                  Ver mi perfil
                </Link>
              </div>
            </div>
          </div>

          <Menu.Item>
            {({ active }) => (
              <div>
                <button
                  onClick={logout}
                  type="button"
                  className={classNames(
                    active ? "bg-[#E5E5E5]" : "bg-accent",
                    "text-a flex w-full items-center gap-2.5 px-4 py-3 text-sm"
                  )}
                >
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AccountDropdown;
