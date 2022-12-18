import InputGroup from "@/components/utility/InputGroup"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'

const CompanyTabNav = () => {

  const router = useRouter();

  const tabs = [
    {
      title: 'Escudos',
      href: "/companies/1",
      activePaths: [
        "/companies/[company_id]",
      ],
    },
    {
      title: 'Miembros',
      href: "/companies/1/members",
      activePaths: [
        "/companies/[company_id]/members",
      ],
    },
    {
      title: 'Códigos promo',
      href: "/companies/1/promo-codes",
      activePaths: [
        "/companies/[company_id]/promo-codes",
      ],
    },
    {
      title: 'Membresía',
      href: "/companies/1/memberships",
      activePaths: [
        "/companies/[company_id]/memberships",
      ],
    },
  ]

  const handleChange = (e) => {
    router.push(e.target.value)
  }

  return (
    <nav className="flex gap-5 items-center mt-6 2xl:mt-0">

      {/* Mobile Only */}
      <div className="flex-grow xl:hidden">
        <InputGroup>
          <InputGroup.Input as="select" onChange={handleChange}>
            {tabs.map((tab) => (
              <option key={tab.title} value={tab.href}>{tab.title}</option>
            ))}
          </InputGroup.Input>
        </InputGroup>
      </div>

      {/* Desktop Only */}
      <div className="hidden xl:block overflow-auto no-scrollbar">
        <ul className="flex gap-9 whitespace-nowrap flex-nowrap">
          {tabs.map((tab) => (
            <Item key={tab.title} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="text-right ml-auto">
        <button className="inline-flex items-center justify-center text-sm">
          <span>Acción</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button>
      </div>

    </nav>
  )
}

const Item = ({ tab }) => {
  const router = useRouter();
  
  const isActive = tab.activePaths?.includes(router.pathname)

  return (
    <li
      key={tab.title}
    >
      <Link
        href={tab.href}
        className={
          classNames(
            "font-semibold text-lg py-1.5 block",
            isActive ? "text-black border-b-2 border-b-black" : "text-secondary"
          )
        }
      >
        {tab.title}
      </Link>
    </li>
  )
}

export default CompanyTabNav