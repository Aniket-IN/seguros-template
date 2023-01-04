import React from "react";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import FilterDropDownBtn from "../utility/FilterDropDownBtn";

const TopBar = ({ setSearch }) => {
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
                title: "Membership",
                options: [
                  {
                    id: 1,
                    label: "Nivel 1",
                    value: 1,
                  },
                  {
                    id: 2,
                    label: "Nivel 2",
                    value: 2,
                  },
                  {
                    id: 3,
                    label: "Nivel 3",
                    value: 3,
                  },
                ],
              },
              {
                id: 2,
                title: "Status",
                options: [
                  {
                    id: 1,
                    label: "Efectuado",
                    value: "efectuado",
                  },
                  {
                    id: 2,
                    label: "Pending",
                    value: "pending",
                  },
                ],
              },
            ]}
          />
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
