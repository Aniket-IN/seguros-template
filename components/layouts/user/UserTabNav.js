import { ChevronDownIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'

const UserTabNav = () => {

  const tabs = [
    {
      title: 'Historial de ubicaciones',
      href: "/users/1",
      activePaths: [
        "/users/1",
        "/users/[user_id]",
      ],
    },
    {
      title: 'Escudos',
      href: "/users/1/shields",
      activePaths: [
        "/users/1/shields",
        "/users/[user_id]/shields",
      ],
    },
    {
      title: 'Alertas y SOS',
      href: "/users/1/sos",
      activePaths: [
        "/users/1/sos",
        "/users/[user_id]/sos",
      ],
    },
    {
      title: 'Membresía',
      href: "/users/1/membership",
      activePaths: [
        "/users/1/membership",
        "/users/[user_id]/membership",
      ],
    },
    {
      title: 'Biométrico',
      href: "/users/1/biometric",
      activePaths: [
        "/users/1/biometric",
        "/users/[user_id]/biometric",
      ],
    },
  ]

  return (
    <nav className="flex">
      <ul className="flex gap-5">
        {tabs.map((tab) => (
          <Item key={tab.title} tab={tab} />
        ))}
      </ul>
      <button className="ml-auto inline-flex items-center justify-center text-sm">
        <span>Acción</span>
        <ChevronDownIcon className="w-5 h-5" />
      </button>
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
            "font-semibold text-lg py-1.5",
            isActive ? "text-black border-b-2 border-b-black" : "text-secondary"
          )
        }
      >
        {tab.title}
      </Link>
    </li>
  )
}

export default UserTabNav