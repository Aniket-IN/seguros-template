import classNames from "classnames"
import React from 'react'

const TabSelector = ({ setTab, tab }) => {
  const tabs = [
    {
      title: 'Usuario',
      tab: "user",
    },
    {
      title: 'Historial de tickets',
      tab: "ticket_history",
    },
  ]

  return (
    <ul className="flex gap-9 whitespace-nowrap flex-nowrap">
      {tabs.map((item) => (
        <Item key={item.tab} tab={tab} setTab={setTab} item={item} />
      ))}
    </ul>
  )
}

const Item = ({ item, tab, setTab }) => {
  const isActive = !!(item.tab == tab)

  return (
    <li
      key={tab.title}
    >
      <button
        onClick={() => setTab(item.tab)}
        className={
          classNames(
            "font-semibold text-lg py-1.5 block",
            isActive ? "text-black border-b-2 border-b-black" : "text-secondary"
          )
        }
      >
        {item.title}
      </button>
    </li>
  )
}

export default TabSelector