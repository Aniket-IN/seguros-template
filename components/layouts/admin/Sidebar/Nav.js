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
      href: "/dashboard",
      activePaths: [
        "/dashboard",
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
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20330)">
            <path d="M14.182,15.273H12V9.818h2.182m0,9.818H12V17.455h2.182M1.091,22.909h24l-12-20.727Z" transform="translate(-18367.092 -20330.545)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Alertas y SOS",
      href: "/alerts-and-sos",
      unreadCount: 1,
      activePaths: [
        "/alerts-and-sos",
        "/alerts-and-sos/[alert_id]",
      ],
    },
    {
      id: 7,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20270)">
            <path d="M24,21.714v1.143H3.429V21.714l2.286-2.286V12.571A7.989,7.989,0,0,1,11.429,4.9V4.571a2.286,2.286,0,1,1,4.571,0V4.9a7.989,7.989,0,0,1,5.714,7.669v6.857L24,21.714M16,24a2.286,2.286,0,0,1-4.571,0" transform="translate(-18367.715 -20272.285)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Enviar notificaciones",
      href: "#",
      activePaths: [],
    },
    {
      id: 8,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20211)" >
            <path d="M19.091,18.349l2.662,1.538-.818,1.418L17.455,19.3V15.273h1.636v3.076m7.091.2a7.636,7.636,0,0,1-15.273,0A7.237,7.237,0,0,1,11,17.455H2.182V4.364H21.818v7.287a7.647,7.647,0,0,1,4.364,6.895M11.651,15.273a8.874,8.874,0,0,1,.655-1.124.939.939,0,0,1-.305.033,3.273,3.273,0,1,1,3.273-3.273,3.188,3.188,0,0,1-.109.8,7.676,7.676,0,0,1,3.382-.8A7.237,7.237,0,0,1,19.636,11V8.727a2.181,2.181,0,0,1-2.182-2.182H6.545A2.174,2.174,0,0,1,4.364,8.727v4.364a2.181,2.181,0,0,1,2.182,2.182h5.105M24,18.545A5.455,5.455,0,1,0,18.545,24,5.457,5.457,0,0,0,24,18.545Z" transform="translate(-18368.182 -20214.273)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Pagos Membresías",
      href: "/payment-memberships",
      activePaths: [
        "/payment-memberships",
        "/payment-memberships/[payment_membership_id]",
      ],
    },
    {
      id: 9,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20151)">
            <path d="M12,4.8H4.8A2.392,2.392,0,0,0,2.4,7.2V21.6A2.4,2.4,0,0,0,4.8,24H24a2.4,2.4,0,0,0,2.4-2.4V9.6A2.4,2.4,0,0,0,24,7.2H14.4Z" transform="translate(-18368.4 -20153.4)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Documentación",
      href: "/documentation",
      activePaths: [
        "/documentation",
        "/documentation/tickets",
        "/documentation/faqs",
        "/documentation/faqs/categories/[category_id]/questions/create",
        "/documentation/faqs/categories/[category_id]",
        "/documentation/faqs/categories/[category_id]/questions/[question_id]",
      ],
    },
    {
      id: 10,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20075)">
            <path d="M13.091,1.091a9.777,9.777,0,0,0-9.818,9.818v7.636a3.273,3.273,0,0,0,3.273,3.273H9.818V13.091H5.455V10.909a7.636,7.636,0,0,1,15.273,0v2.182H16.364v8.727h4.364v1.091H13.091v2.182h6.545a3.273,3.273,0,0,0,3.273-3.273V10.909A9.8,9.8,0,0,0,13.091,1.091Z" transform="translate(-18367.092 -20076.092)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Soporte",
      href: "/support",
      activePaths: [
        "/support",
      ],
    },
    {
      id: 11,
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g transform="translate(18366 20031)">
            <path d="M21.6,22.8H7.2V21.12c0-2.4,4.8-3.72,7.2-3.72s7.2,1.32,7.2,3.72M14.4,8.4A3.6,3.6,0,1,1,10.8,12a3.6,3.6,0,0,1,3.6-3.6m0-4.8a1.2,1.2,0,1,1-1.2,1.2,1.2,1.2,0,0,1,1.2-1.2m8.4,0H17.784a3.586,3.586,0,0,0-6.768,0H6A2.4,2.4,0,0,0,3.6,6V22.8A2.4,2.4,0,0,0,6,25.2H22.8a2.4,2.4,0,0,0,2.4-2.4V6A2.4,2.4,0,0,0,22.8,3.6Z" transform="translate(-18368.4 -20032.199)" fill="currentColor" />
          </g>
        </svg>
      ),
      title: "Roles",
      href: "/roles",
      activePaths: [
        "/roles",
      ],
    },
  ]

  const router = useRouter();

  return (
    <nav className="flex-grow overflow-auto">
      <ul>
        {items.map((item) => {
          return (
            <Item item={item} key={item.id} />
          )
        })}
      </ul>
    </nav>
  )
}

const Item = ({ item, children }) => {
  const router = useRouter();

  const isActive = item.activePaths?.includes(router.pathname)

  return (
    <li className="flex relative">
      <Link href={item.href} className={classNames(" flex-grow flex gap-3 items-center py-5 px-4 text-white text-opacity-60", isActive ? 'bg-black text-opacity-100' : 'hover:text-opacity-80 text-opacity-60')}>
        {item.icon}
        <span className="truncate whitespace-nowrap text-sm">{item.title}</span>

        {!!item.unreadCount && (
          <div className="absolute inset-y-0 right-4 flex items-center">
            <span className="w-5 h-5 rounded-full inline-flex justify-center items-center bg-danger text-white text-sm  ">{item.unreadCount}</span>
          </div>
        )}
      </Link>
      {!!isActive && (
        <div className="self-stretch w-2 bg-primary"></div>
      )}
    </li>
  )
}


Nav.Li = () => {
  return (
    <li className="flex">
      <Link href="/dashboard" className="flex-grow flex gap-3 items-center py-3 px-4 text-white text-opacity-60 hover:text-opacity-80">
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