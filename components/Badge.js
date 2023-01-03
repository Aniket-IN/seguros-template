import React, { createElement } from "react";
import classNames from "classnames";

const Badge = () => {
  return;
};

Badge.Md = ({ as = "span", className = "", text = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(
      className,
      "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold"
    ),
    children: (
      <>
        <svg className="mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={5} cy={4} r={3} />
        </svg>
        {text}
      </>
    ),
  });
};

export default Badge;
