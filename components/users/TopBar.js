import React from "react";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import FilterDropDownBtn from "../utility/FilterDropDownBtn";

const TopBar = ({ search, setSearch, tempFilters, setTempFilters, applyFilters, resetPage }) => {
  return (
    <div className="bg-neutral">
      <div className="container-padding items-center gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
        <div className="w-full flex-shrink-0 sm:w-auto">
          <InputGroup className=" relative">
            <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
              <MagnifyingGlassIcon className="aspect-square w-full" />
            </div>
            <InputGroup.Input
              value={search}
              onChange={e => { setSearch(e.target.value); resetPage() }}
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
            onApply={applyFilters}
            filters={tempFilters}
            setFilters={setTempFilters}
            groups={[
              {
                id: 1,
                title: "Type of user",
                options: [
                  {
                    id: 1,
                    label: "Corporate",
                    name: "user_type",
                    value: "Corporate",
                  },
                  {
                    id: 2,
                    label: "Individual",
                    name: "user_type",
                    value: "Individual",
                  },
                ],
              },
              {
                id: 2,
                title: "Status",
                options: [
                  {
                    id: 1,
                    label: "Active",
                    name: "suspend",
                    value: false,
                  },
                  {
                    id: 2,
                    label: "Suspended",
                    name: "suspend",
                    value: true,
                  },
                ],
              },
            ]}
          />

          <div className="ml-auto text-right text-sm text-gray-900">
            34 Usuarios
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
