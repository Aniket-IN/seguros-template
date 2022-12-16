import React from 'react'
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

const SmallAnalyticsCard = ({ title = "", items = [], footer = {} }) => {
  return (
    <div className="bg-white divide-y flex flex-col h-1/2">
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-sm mb-2">{title}</h3>
        <div className="grid grid-cols-2">
          {items.map((item) => {
            return (
              <div key={item.title} className="space-y-1">
                <dd className="text-secondary text-xs">{item.title}</dd>
                <dd className="text-2xl">{item.count}</dd>
              </div>
            )
          })}
        </div>
      </div>
      <Link href={footer.href} className="flex justify-between items-center px-4 py-2.5 text-primary text-sm">
        <span>{footer.title}</span>
        <ChevronRightIcon className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default SmallAnalyticsCard