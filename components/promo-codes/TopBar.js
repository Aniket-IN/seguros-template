import React, { useState } from "react";
import InputGroup from "@/components/utility/InputGroup";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import PromoCodeFormModal from "./PromoCodeFormModal";
import ConfirmationModal from "../utility/ConfirmationModal";
import FilterDropDownBtn from "../utility/FilterDropDownBtn";
import { useForm } from "react-hook-form";

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
                title: "Membership",
                options: [
                  {
                    id: 1,
                    label: "Nivel 1",
                    name: "membership",
                    value: "level1",
                  },
                  {
                    id: 2,
                    label: "Nivel 2",
                    name: "membership",
                    value: "level2",
                  },
                  {
                    id: 3,
                    label: "Nivel 3",
                    name: "membership",
                    value: "level3",
                  },
                ],
              },
              {
                id: 2,
                title: "State",
                options: [
                  {
                    id: 1,
                    label: "Active",
                    name: "state",
                    value: true,
                  },
                  {
                    id: 2,
                    label: "Inactive",
                    name: "state",
                    value: false,
                  },
                  // {
                  //   id: 3,
                  //   label: "Suspended",
                  //   value: "Suspended",
                  // },
                ],
              },
            ]}
          />

          {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
          <CreateBtn />
        </div>
      </div>
    </div>
  );
};

const CreateBtn = () => {
  const [open, setOpen] = useState(false);
  const [activateAlertOpen, setActivateAlertOpen] = useState(false);

  const { register, formState: { errors }, reset, handleSubmit } = useForm()
  console.log(errors);
  const create = handleSubmit((data) => {
    console.log(data);
    // setOpen(false);
    // setTimeout(() => {
    //   setActivateAlertOpen(true);
    // }, 300);
  })

  return (
    <>
      <ConfirmationModal
        open={activateAlertOpen}
        close={() => setActivateAlertOpen(false)}
        type="success"
        caption="Cupón creado con éxito"
        confirmBtn={{
          show: true,
          text: "CONTINUAR",
          onClick: () => setActivateAlertOpen(false),
        }}
        closeBtn={{
          show: false,
        }}
      />
      <PromoCodeFormModal
        {...{ register, errors }}
        mode="create"
        submit={create}
        open={open}
        setOpen={setOpen}
      />
      <button
        onClick={() => setOpen(true)}
        className="ml-auto rounded bg-gray-900 px-6 py-2 text-sm text-white"
      >
        Nuevo
      </button>
    </>
  );
};

export default TopBar;
