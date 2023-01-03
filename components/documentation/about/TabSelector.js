import SectionHeading from "@/components/SectionHeading";
import React from 'react'

const TabSelector = ({ tabName, tabs, setTab }) => {

  const handleRadioChange = (e) => {
    setTab(e.target.value)
  }

  return (
    <div className="xl:max-w-md w-full bg-white p-5 space-y-5">
      <SectionHeading>Acerca De</SectionHeading>
      <div className="bg-accent px-2.5 pb-4 pt-1 text-sm">
        <ul className="space-y-1">
          <li className="flex items-center justify-between px-5 py-2">
            <span className="font-semibold">Título</span>
          </li>
          {tabs.map((tab) => (
            <li key={tab.value}>
              <label className="cursor-pointer flex items-center justify-between px-5 py-5 bg-white text-secondary">
                <span>{tab.title}</span>
                <input
                  checked={tabName === tab.value}
                  value={tab.value}
                  name="account"
                  onChange={handleRadioChange}
                  type="radio"
                  className="focus:ring-primary h-5 w-5 text-primary border-gray-300"
                />
              </label>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default TabSelector