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
                title: "Status",
                options: [
                  {
                    id: 1,
                    label: "Active",
                    value: "Active",
                  },
                  {
                    id: 2,
                    label: "Inactive",
                    value: "Inactive",
                  },
                  {
                    id: 3,
                    label: "Suspended",
                    value: "Suspended",
                  },
                ],
              },
            ]}
          />

          {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
