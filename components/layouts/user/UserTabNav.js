import classNames from "classnames"
import { useRouter } from "next/router"
import React from 'react'

const UserTabNav = () => {

  const tabs = [
    {
      title: 'Historial de ubicaciones',
      activePaths: [
        "/users",
        "/users/[user_id]",
      ],
    },
    {
      title: 'Escudos',
      activePaths: [
        "/companies",
        "/companies/[company_id]",
      ],
    },
    {
      title: 'Alertas y SOS',
      activePaths: [
        "/companies",
        "/companies/[company_id]",
      ],
    },
    {
      title: 'Membresía',
      activePaths: [
        "/companies",
        "/companies/[company_id]",
      ],
    },
    {
      title: 'Biométrico',
      activePaths: [
        "/companies",
        "/companies/[company_id]",
      ],
    },
  ]

  return (
    <nav>
      <ul className="flex gap-5">
        {tabs.map((tab) => (
          <Item key={tab.title} tab={tab} />
        ))}
      </ul>
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
      <button
        className={
          classNames(
            "font-semibold text-lg py-1.5",
            isActive ? "text-black border-b-2 border-b-black" : "text-secondary"
          )
        }
      >
        {tab.title}
      </button>
    </li>
  )
}

export default UserTabNav