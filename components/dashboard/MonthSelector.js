import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  return (
    <Menu
      as="div"
      className="relative inline-block text-left sm:w-auto sm:min-w-[150px]"
    >
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-white px-2 py-2 text-sm font-normal capitalize leading-4 text-black focus:outline-none sm:px-4 ">
          {selectedMonth.month}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

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
            {months.map((month, index) => (
              <Menu.Item key={month}>
                {({ active }) => (
                  <a
                    onClick={() =>
                      setSelectedMonth({ month: month, value: index + 1 })
                    }
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm capitalize"
                    )}
                  >
                    {month}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MonthSelector;
