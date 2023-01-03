import React, { Fragment } from "react";
import InputGroup from "@/components/utility/InputGroup";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const CompanyTabNav = () => {
  const router = useRouter();

  const tabs = [
    {
      title: "Escudos",
      href: "/companies/1",
      activePaths: ["/companies/[company_id]"],
    },
    {
      title: "Miembros",
      href: "/companies/1/members",
      activePaths: ["/companies/[company_id]/members"],
    },
    {
      title: "Códigos promo",
      href: "/companies/1/promo-codes",
      activePaths: ["/companies/[company_id]/promo-codes"],
    },
    {
      title: "Membresía",
      href: "/companies/1/memberships",
      activePaths: ["/companies/[company_id]/memberships"],
    },
  ];

  const handleChange = (e) => {
    router.push(e.target.value);
  };

  return (
    <nav className="mt-6 flex items-center gap-5 2xl:mt-0">
      {/* Mobile Only */}
      <div className="flex-grow xl:hidden">
        <InputGroup>
          <InputGroup.Input as="select" onChange={handleChange}>
            {tabs.map((tab) => (
              <option key={tab.title} value={tab.href}>
                {tab.title}
              </option>
            ))}
          </InputGroup.Input>
        </InputGroup>
      </div>

      {/* Desktop Only */}
      <div className="no-scrollbar hidden overflow-auto xl:block">
        <ul className="flex flex-nowrap gap-9 whitespace-nowrap">
          {tabs.map((tab) => (
            <Item key={tab.title} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="ml-auto text-right">
        {/* <button className="inline-flex items-center justify-center text-sm">
          <span>Acción</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button> */}
        <ActionBtn />
      </div>
    </nav>
  );
};

const ActionBtn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={classNames(
              "inline-flex w-full items-center justify-between gap-2 rounded-md border border-transparent px-2 py-2 text-sm font-normal capitalize leading-4 focus:outline-none sm:px-4",
              open ? "bg-primary text-white" : "text-black"
            )}
          >
            Acción
            <ChevronDownIcon
              className={classNames(
                "-mr-1 ml-2 h-5 w-5 transition-transform duration-300",
                open ? "rotate-180" : ""
              )}
              aria-hidden="true"
            />
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
            <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:left-auto lg:right-0 lg:origin-top-right">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm capitalize"
                      )}
                    >
                      Ver detalles
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm capitalize"
                      )}
                    >
                      Suspender cuenta
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const Item = ({ tab }) => {
  const router = useRouter();

  const isActive = tab.activePaths?.includes(router.pathname);

  return (
    <li key={tab.title}>
      <Link
        href={tab.href}
        className={classNames(
          "block py-1.5 text-lg font-semibold",
          isActive ? "border-b-2 border-b-black text-black" : "text-secondary"
        )}
      >
        {tab.title}
      </Link>
    </li>
  );
};

export default CompanyTabNav;
