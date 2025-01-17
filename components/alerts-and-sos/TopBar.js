import React, { Fragment } from 'react'
import InputGroup from "@/components/utility/InputGroup"
import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { FunnelIcon } from "@heroicons/react/24/outline"
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
                title: "Type of Alert",
                options: [
                  {
                    id: 1,
                    label: 'SOS',
                    value: 1,
                  },
                  {
                    id: 2,
                    label: 'Alert',
                    value: 2,
                  },
                ],
              },
              {
                id: 2,
                title: "Status",
                options: [
                  {
                    id: 1,
                    label: 'Pendent',
                    value: 'Pendent',
                  },
                  {
                    id: 2,
                    label: 'Help sent',
                    value: 'Help sent',
                  },
                  {
                    id: 2,
                    label: 'Solved',
                    value: 'Solved',
                  },
                ],
              },
            ]}
          />


          {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
          {/* <CreateBtn /> */}

        </div>
      </div>
    </div>
  )
}


// const CreateBtn = () => {
//   const [open, setOpen] = useState(false)

//   const create = () => {
//     setOpen(false)
//   }

//   return (
//     <>
//       <PromoCodeFormModal mode="create" submit={create} open={open} setOpen={setOpen} />
//       <button onClick={() => setOpen(true)} className="ml-auto bg-gray-900 text-white text-sm px-6 py-2 rounded">
//         Nuevo
//       </button>
//     </>
//   )
// }

export default TopBar