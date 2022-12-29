import React from 'react'
import InputGroup from "@/components/utility/InputGroup"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import FilterDropDownBtn from "../utility/FilterDropDownBtn"


const TopBar = () => {
  return (
    <div className="bg-neutral">
      <div className="container-padding py-2.5 space-y-2 lg:space-y-0 lg:flex items-center gap-3">
        <div className="flex-shrink-0 sm:w-auto w-full">
          <InputGroup className=" relative">
            <div className="w-9 p-1 px-1.5 text-secondary pl-3 absolute inset-y-0 left-0 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-full aspect-square" />
            </div>
            <InputGroup.Input
              id="search"
              type="search"
              name="search"
              className="pl-9"
              placeholder="Buscar"
            />
          </InputGroup>
        </div>

        <div className="flex items-center gap-3 flex-grow">

          <FilterDropDownBtn.Primary
            groups={[
              {
                id: 1,
                title: "Type of Shield",
                options: [
                  {
                    id: 1,
                    label: 'Corporate',
                    value: 'corporate',
                  },
                  {
                    id: 2,
                    label: 'Individual',
                    value: 'individual',
                  }
                ],
              },
              {
                id: 2,
                title: "Status",
                options: [
                  {
                    id: 1,
                    label: 'Active',
                    value: 'active',
                  },
                  {
                    id: 2,
                    label: 'Inactive',
                    value: 'inactive',
                  },
                  {
                    id: 3,
                    label: 'Suspended',
                    value: 'suspended',
                  },
                ],
              },
            ]}
          />


          {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
        </div>
      </div>
    </div>
  )
}

export default TopBar