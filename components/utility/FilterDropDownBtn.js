import React, { createElement, Fragment } from 'react'
import classNames from "classnames"
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { FunnelIcon } from "@heroicons/react/24/outline"


const FilterDropDownBtn = ({ className = '', groups = [], ...props }) => {

  const resetFilters = ({ close }) => {
    close()
  }

  const applyFilters = ({ close }) => {
    close()
  }

  return (
    <>
      <Popover as="div" id="desktop-menu" className="relative inline-block text-left">
        <div>
          {/* <Popover.Button>
            {children}
          </Popover.Button> */}
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
          <Popover.Panel className="absolute origin-top-left lg:origin-top-right left-0 lg:left-auto lg:right-0 mt-2 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            {({ close }) => (
              <div className="divide-y pt-1 min-w-[200px]">

                {groups.map((group) => (
                  <div key={group.id} className="py-1.5">
                    <h6 className="py-1.5 px-4 text-sm font-semibold">{group.title}</h6>
                    <div>
                      {group.options?.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`filter-${group.id}-${option.id}`}
                          className="flex items-center py-2.5 px-4 cursor-pointer"
                        >
                          <input
                            id={`filter-${group.id}-${option.id}`}
                            name={option.name}
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
                          />
                          <dd
                            className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                          >
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
                  <div className="rounded-b-md flex w-full py-2 px-3  bg-gray-50 justify-between">
                    <button
                      onClick={() => {
                        resetFilters({ close })
                      }}
                      className="rounded font-medium text-sm border py-0.5 px-4 bg-white border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => {
                        applyFilters({ close })
                      }}
                      className="rounded font-medium text-sm py-0.5 px-4 bg-primary hover:bg-primary text-white"
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
  )
}

FilterDropDownBtn.Primary = ({ className = '', ...props }) => {
  return (
    createElement(FilterDropDownBtn, {
      ...props,
      className: classNames("inline-flex gap-2 items-center justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary", className),
      children: (
        <>
          <FunnelIcon className="w-5 h-5" />
          Filtros
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </>
      )
    })
  )
}

export default FilterDropDownBtn