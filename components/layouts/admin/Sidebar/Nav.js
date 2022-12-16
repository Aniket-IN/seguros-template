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