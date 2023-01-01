import React, { useState } from 'react'
import InputGroup from "@/components/utility/InputGroup"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import PromoCodeFormModal from "./PromoCodeFormModal"
import ConfirmationModal from "../utility/ConfirmationModal"
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
                title: "Membership",
                options: [
                  {
                    id: 1,
                    label: 'Nivel 1',
                    value: 1,
                  },
                  {
                    id: 2,
                    label: 'Nivel 2',
                    value: 2,
                  },
                  {
                    id: 3,
                    label: 'Nivel 3',
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
                    label: 'Active',
                    value: 'Active',
                  },
                  {
                    id: 2,
                    label: 'Inactive',
                    value: 'Inactive',
                  },
                  {
                    id: 3,
                    label: 'Suspended',
                    value: 'Suspended',
                  },
                ],
              },
            ]}
          />


          {/* <div className="text-gray-900 text-sm text-right ml-auto">34 Usuarios</div> */}
          <CreateBtn />

        </div>
      </div>
    </div>
  )
}


const CreateBtn = () => {
  const [open, setOpen] = useState(false)
  const [activateAlertOpen, setActivateAlertOpen] = useState(false)

  const create = () => {
    setOpen(false)
    setTimeout(() => {
      setActivateAlertOpen(true)
    }, 300);
  }

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
      <PromoCodeFormModal mode="create" submit={create} open={open} setOpen={setOpen} />
      <button onClick={() => setOpen(true)} className="ml-auto bg-gray-900 text-white text-sm px-6 py-2 rounded">
        Nuevo
      </button>
    </>
  )
}

export default TopBar