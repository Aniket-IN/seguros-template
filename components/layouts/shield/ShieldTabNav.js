import InputGroup from "@/components/utility/InputGroup"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'

const ShieldTabNav = () => {

  const router = useRouter();

  const tabs = [
    {
      title: 'Puntos de interés',
      href: "/shields/1",
      activePaths: [
        "/shields/[shield_id]",
      ],
    },
    {
      title: 'Miembros',
      href: "/shields/1/members",
      activePaths: [
        "/shields/[shield_id]/members",
      ],
    },
    {
      title: 'Historial de rutas',
      href: "/shields/1/route-history",
      activePaths: [
        "/shields/[shield_id]/route-history",
      ],
    },
    {
      title: 'Alertas y SOS',
      href: "/shields/1/sos",
      activePaths: [
        "/shields/[shield_id]/sos",
      ],
    },
    {
      title: 'Membresía',
      href: "/shields/1/membership",
      activePaths: [
        "/shields/[shield_id]/membership",
      ],
    },
    {
      title: 'Chat',
      href: "/shields/1/chat",
      activePaths: [
        "/shields/[shield_id]/chat",
      ],
    },
    {
      title: 'Biométrico',
      href: "/shields/1/biometric",
      activePaths: [
        "/shields/[shield_id]/biometric",
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

export default ShieldTabNav