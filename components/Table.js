import classNames from "classnames";
import { createElement } from "react";
import { ImSpinner2 } from "react-icons/im"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const Table = ({ as = "table", wrapperClassName = '', className = "", isError = false, isLoading = false, error = null, ...props }) => {
  return (
    <>
      <div className={classNames("overflow-x-auto", wrapperClassName)}>
        <div className="inline-block min-w-full">
          {
            createElement(as, {
              className: `min-w-full ${className}`,
              ...props,
            })
          }
        </div>
      </div>
      <Table.Loading isLoading={isLoading} />
      <Table.Error isError={isError} error={error ?? null} />
    </>

  )
}


Table.Thead = ({ as = "thead", className = "", ...props }) =>
  createElement(as, {
    className: `${className}`,
    ...props,
  });

Table.Th = ({ as = "th", className = "", ...props }) =>
  createElement(as, {
    className: `whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${className}`,
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


Table.Loading = ({ isLoading }) => {
  return isLoading ? (
    <div className="flex justify-center items-center min-h-[200px] w-full bg-white">
      <div className="text-center text-slate-500">
        <ImSpinner2 className="w-9 h-9 mx-auto animate-spin" />
        <p className="mt-5">
          &nbsp;&nbsp;&nbsp;Loading...
        </p>
      </div>
    </div>
  ) : null
}

Table.Error = ({ isError, error }) => {
  return isError ? (
    <div className="flex justify-center items-center min-h-[200px] bg-white">
      <div className="text-center text-red-500">
        <ExclamationTriangleIcon className="w-9 h-9 mx-auto" />
        <p className="mt-5">
          {error.message}
        </p>
      </div>
    </div>
  ) : null
}

export default Table