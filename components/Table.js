import { createElement } from "react";

const Table = ({ as = "table", className = "", ...props }) => {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="overflow-hidden">
          {
            createElement(as, {
              className: `min-w-full ${className}`,
              ...props,
            })
          }
        </div>
      </div>
    </div>
  )
}


Table.Thead = ({ as = "thead", className = "", ...props }) =>
  createElement(as, {
    className: `${className}`,
    ...props,
  });

Table.Th = ({ as = "th", className = "", ...props }) =>
  createElement(as, {
    className: `px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${className}`,
    ...props,
  });

Table.Tbody = ({ as = "tbody", className = "", ...props }) =>
  createElement(as, {
    className: `divide-y-4 divide-accent bg-white ${className}`,
    ...props,
  });

Table.Tr = ({ as = "tr", className = "", ...props }) =>
  createElement(as, {
    className: `${className}`,
    ...props,
  });

Table.Td = ({ as = "td", className = "", ...props }) =>
  createElement(as, {
    className: `whitespace-nowrap px-3 py-4 text-sm text-black ${className}`,
    ...props,
  });

export default Table