import React, { createElement, Fragment } from 'react'
import classNames from "classnames"
import { Popover, Transition } from '@headlessui/react'

const FilterDropDownBtn = ({ className = '', groups = [], ...props }) => {

  const resetFilters = ({ close }) => {
    close()
  }

  const applyFilters = ({ close }) => {
    close()
  }

  return (
    <>
      <Popover as="div" id="desktop-menu" className="relative z-10 inline-block text-left">
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
          <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
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
                      className="rounded font-medium text-sm py-0.5 px-4 bg-indigo-500 hover:bg-indigo-600 text-white"
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

export default FilterDropDownBtn