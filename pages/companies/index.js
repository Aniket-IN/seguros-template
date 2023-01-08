import React from "react";
import Admin from "@/components/layouts/Admin";
import CompaniesTable from "@/components/companies/CompaniesTable";
import SamplePagination from "@/components/SamplePagination";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import FilterDropDownBtn from "../utility/FilterDropDownBtn";


const Companies = () => {
  return (
    <Admin pageTitle="Empresas" headerTitle="Empresas">
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

      <div className="container-padding">
        <CompaniesTable />
        <SamplePagination />
      </div>
    </Admin>
  );
};

export default Companies;
