import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SmallAnalyticsCard = ({ title = "", items = [], footer = {} }) => {
  return (
    <div className="flex h-1/2 flex-col divide-y bg-white">
      <div className="flex-grow p-4">
        <h3 className="mb-2 text-sm font-semibold">{title}</h3>
        <div className="grid grid-cols-2">
          {items.map((item) => {
            return (
              <div key={item.title} className="space-y-1">
                <dd className="text-xs text-secondary">{item.title}</dd>
                <dd className="text-2xl">{item.count}</dd>
              </div>
            );
          })}
        </div>
      </div>
      <Link
        href={footer.href}
        className="flex items-center justify-between px-4 py-2.5 text-sm text-primary"
      >
        <span>{footer.title}</span>
        <ChevronRightIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default SmallAnalyticsCard;
