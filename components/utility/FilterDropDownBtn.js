import React, { createElement, Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";

const FilterDropDownBtn = ({
  className = "",
  groups = [],
  filters = {},
  setFilters = () => { },
  onApply = () => { },
  ...props
}) => {

  const [resetFilters, setResetFilters] = useState(false)

  useEffect(() => {
    if (resetFilters) {
      onApply()
      setResetFilters(false)
    }
  }, [resetFilters])


  const handleChange = (e) => {
    let filtersByKey = filters[e.target.name] ?? [];
    let value = ["true", "false"].includes(e.target.value) ? JSON.parse(e.target.value) : e.target.value;

    // Checked
    if (e.target.checked) {
      filtersByKey = [...filtersByKey, value];
    }

    // Un-Checked
    if (!e.target.checked) {
      filtersByKey = filtersByKey.filter((item) => item != value);
    }

    setFilters((vals) => ({
      ...vals,
      [e.target.name]: filtersByKey,
    }));
  };

  const clearFilters = ({ close }) => {
    setFilters({});
    setResetFilters(true)
    close();
  };

  const applyFilters = ({ close }) => {
    onApply();
    close();
  };

  return (
    <>
      <Popover
        as="div"
        id="desktop-menu"
        className="relative inline-block text-left"
      >
        <div>
          {createElement(Popover.Button, {
            ...props,
            className: classNames("", className),
          })}
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
          <Popover.Panel className="absolute left-0 mt-2 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none lg:left-auto lg:right-0 lg:origin-top-right">
            {({ close }) => (
              <div className="min-w-[200px] divide-y pt-1">
                {groups.map((group) => (
                  <div key={group.id} className="py-1.5">
                    <h6 className="py-1.5 px-4 text-sm font-semibold">
                      {group.title}
                    </h6>
                    <div>
                      {group.options?.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`filter-${group.id}-${option.id}`}
                          className="flex cursor-pointer items-center py-2.5 px-4"
                        >
                          <input
                            id={`filter-${group.id}-${option.id}`}
                            name={option.name}
                            onChange={handleChange}
                            value={option.value}
                            defaultChecked={filters[option.name]?.includes(
                              option.value
                            )}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <dd className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">
                            {option.label}
                          </dd>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div
                  aria-labelledby="dropdown-footer"
                  className="flex justify-between"
                >
                  <div className="flex w-full justify-between rounded-b-md bg-gray-50  py-2 px-3">
                    <button
                      onClick={() => {
                        clearFilters({ close });
                      }}
                      className="rounded border border-gray-200 bg-white py-0.5 px-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-600"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => {
                        applyFilters({ close });
                      }}
                      className="rounded bg-primary py-0.5 px-4 text-sm font-medium text-white hover:bg-primary"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

FilterDropDownBtn.Primary = ({ className = "", ...props }) => {
  return createElement(FilterDropDownBtn, {
    ...props,
    className: classNames(
      "inline-flex gap-2 items-center justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary",
      className
    ),
    children: (
      <>
        <FunnelIcon className="h-5 w-5" />
        Filtros
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </>
    ),
  });
};

export default FilterDropDownBtn;
