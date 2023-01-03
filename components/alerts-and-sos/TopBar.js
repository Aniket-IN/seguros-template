import React, { Fragment } from "react";
import InputGroup from "@/components/utility/InputGroup";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import FilterDropDownBtn from "../utility/FilterDropDownBtn";

const TopBar = () => {
  return (
    <div className="bg-neutral">
      <div className="container-padding items-center gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
        <div className="w-full flex-shrink-0 sm:w-auto">
          <InputGroup className=" relative">
            <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
              <MagnifyingGlassIcon className="aspect-square w-full" />
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

        <div className="flex flex-grow items-center gap-3">
          <FilterDropDownBtn.Primary
            groups={[
              {
                id: 1,
                title: "Type of Alert",
                options: [
                  {
                    id: 1,
                    label: "SOS",
                    value: 1,
                  },
                  {
                    id: 2,
                    label: "Alert",
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
                    label: "Pendent",
                    value: "Pendent",
                  },
                  {
                    id: 2,
                    label: "Help sent",
                    value: "Help sent",
                  },
                  {
                    id: 2,
                    label: "Solved",
                    value: "Solved",
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
  );
};

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

export default TopBar;
