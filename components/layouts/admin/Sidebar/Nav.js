import classNames from "classnames";
import Link from "next/link"
import { useRouter } from "next/router";
import React from 'react'


const Nav = () => {

  const items = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20629)">
            <path d="M17.333,4v8H28V4M17.333,28H28V14.667H17.333M4,28H14.667V20H4m0-2.667H14.667V4H4Z" transform="translate(-18370 -20633)" fill="currentColor" />
          </g>
        </svg>

      ),
      title: "Dashboard",
      href: "/",
      activePaths: [
        "/",
      ],
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20569)">
            <path d="M19.2,20.4v2.4H2.4V20.4s0-4.8,8.4-4.8,8.4,4.8,8.4,4.8M15,9a4.2,4.2,0,1,0-4.2,4.2A4.2,4.2,0,0,0,15,9m4.128,6.6A6.384,6.384,0,0,1,21.6,20.4v2.4h4.8V20.4s0-4.356-7.272-4.8M18,4.8a4.068,4.068,0,0,0-2.316.708,6,6,0,0,1,0,6.984A4.068,4.068,0,0,0,18,13.2a4.2,4.2,0,0,0,0-8.4Z" transform="translate(-18368.4 -20570.801)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Usuarios",
      href: "/users",
      activePaths: [
        "/users",
        "/users/[user_id]",
        "/users/[user_id]/shields",
        "/users/[user_id]/sos",
        "/users/[user_id]/membership",
        "/users/[user_id]/biometric",
      ],
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20509)">
            <path d="M6.667,4V28h8V23.333h2.667V28h8V4H6.667M9.333,6.667H12V9.333H9.333V6.667m5.333,0h2.667V9.333H14.667V6.667m5.333,0h2.667V9.333H20V6.667M9.333,12H12v2.667H9.333V12m5.333,0h2.667v2.667H14.667V12M20,12h2.667v2.667H20V12M9.333,17.333H12V20H9.333V17.333m5.333,0h2.667V20H14.667V17.333m5.333,0h2.667V20H20V17.333M9.333,22.667H12v2.667H9.333V22.667m10.667,0h2.667v2.667H20Z" transform="translate(-18370 -20513)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Empresas",
      href: "/companies",
      activePaths: [
        "/companies",
        "/companies/[company_id]",
        "/companies/[company_id]/members",
        "/companies/[company_id]/promo-codes",
        "/companies/[company_id]/memberships",
      ],
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20450)">
            <path d="M13.091,13.091h7.636c-.578,4.484-3.578,8.487-7.636,9.731V13.091H5.455V6.873L13.091,3.48m0-2.389L3.273,5.455V12c0,6.055,4.189,11.705,9.818,13.091C18.72,23.705,22.909,18.055,22.909,12V5.455Z" transform="translate(-18367.092 -20451.092)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Escudos",
      href: "/shields",
      activePaths: [
        "/shields",
        "/shields/[shield_id]",
        "/shields/[shield_id]/members",
        "/shields/[shield_id]/route-history",
        "/shields/[shield_id]/sos",
        "/shields/[shield_id]/membership",
        "/shields/[shield_id]/chat",
        "/shields/[shield_id]/biometric",
      ],
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <g
            transform="translate(18366 20390)"
          >
            <path
              d="M18.7,20.16,14.4,17.4l-4.3,2.76,1.3-4.944L7.452,12l5.1-.312L14.4,6.96l1.848,4.728,5.1.312L17.4,15.216M24,14.4A2.4,2.4,0,0,1,26.4,12V7.2A2.4,2.4,0,0,0,24,4.8H4.8A2.4,2.4,0,0,0,2.4,7.2V12a2.4,2.4,0,0,1,0,4.8v4.8A2.4,2.4,0,0,0,4.8,24H24a2.4,2.4,0,0,0,2.4-2.4V16.8A2.4,2.4,0,0,1,24,14.4Z"
              transform="translate(-18368.4 -20392.4)"
              fill="currentColor"
            />
          </g>
        </svg>

      ),
      title: "Códigos de Promo",
      href: "/promo-codes",
      activePaths: [
        "/promo-codes",
        "/promo-codes/[promocode_id]",
      ],
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={24} viewBox="0 0 24 24">
          <g transform="translate(18366 20330)">
            <path d="M14.182,15.273H12V9.818h2.182m0,9.818H12V17.455h2.182M1.091,22.909h24l-12-20.727Z" transform="translate(-18367.092 -20330.545)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Alertas y SOS",
      href: "/alerts-and-sos",
      activePaths: [
        "/alerts-and-sos",
        "/alerts-and-sos/[alert_id]",
      ],
    },
  ]

  const router = useRouter();

  return (
    <nav className="flex-grow overflow-auto">
      <ul>
        {
          items.map((item) => {
            const isActive = item.activePaths?.includes(router.pathname)
            return (
              <Item isActive={isActive} key={item.id}>
                <Link href={item.href} className={classNames("flex-grow flex gap-3 items-center py-5 px-4 text-white text-opacity-60", isActive ? 'bg-black text-opacity-100' : 'hover:text-opacity-80 text-opacity-60')}>
                  {item.icon}
                  <span className="truncate whitespace-nowrap text-sm">{item.title}</span>
                </Link>
              </Item>
            )
          })
        }
      </ul>
    </nav>
  )
}

const Item = ({ isActive, children }) => {
  return (
    <li className="flex">
      {children}
      {!!isActive && (
        <div className="self-stretch w-2 bg-primary"></div>
      )}
    </li>
  )
}


Nav.Li = () => {
  return (
    <li className="flex">
      <Link href="/" className="flex-grow flex gap-3 items-center py-3 px-4 text-white text-opacity-60 hover:text-opacity-80">
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20569)">
            <path d="M19.2,20.4v2.4H2.4V20.4s0-4.8,8.4-4.8,8.4,4.8,8.4,4.8M15,9a4.2,4.2,0,1,0-4.2,4.2A4.2,4.2,0,0,0,15,9m4.128,6.6A6.384,6.384,0,0,1,21.6,20.4v2.4h4.8V20.4s0-4.356-7.272-4.8M18,4.8a4.068,4.068,0,0,0-2.316.708,6,6,0,0,1,0,6.984A4.068,4.068,0,0,0,18,13.2a4.2,4.2,0,0,0,0-8.4Z" transform="translate(-18368.4 -20570.801)" fill="currentColor" />
          </g>
        </svg>
        <span>Dashboard</span>
      </Link>
      <div className="self-stretch w-2 bg-primary"></div>
    </li>
  )
}

export default Nav