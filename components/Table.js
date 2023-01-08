import classNames from "classnames";
import { createElement } from "react";
import { ImSpinner2 } from "react-icons/im";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Table = ({
  as = "table",
  wrapperClassName = "",
  className = "",
  isError = false,
  isLoading = false,
  error = null,
  dataCount,
  ...props
}) => {
  return (
    <>
      <div className={classNames("overflow-x-auto overflow-y-visible", wrapperClassName)}>
        <div className="inline-block min-w-full">
          {createElement(as, {
            className: `min-w-full ${className}`,
            ...props,
          })}
        </div>
      </div>
      <Table.Loading isLoading={isLoading} />
      <Table.Error isError={isError} error={error ?? null} />
      {!isLoading && !isError && dataCount < 1 && <Table.NoData />}
    </>
  );
};

Table.Thead = ({ as = "thead", className = "", ...props }) =>
  createElement(as, {
    className: `${className}`,
    ...props,
  });

Table.Th = ({ as = "th", className = "", children = '', name, sort, setSort, sortable = false, ...props }) => {
  const toggleSort = () => {
    if (!sortable) {
      return;
    }
    setSort((sort) => ({
      field: name,
      direction: (sort.field == name) ? (sort.direction == 'asc' ? 'desc' : 'asc') : 'desc'
    }))
  }

  return createElement(as, {
    ...props,
    className: classNames(
      "whitespace-nowrap  px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
      className,
      sortable && "cursor-pointer"
    ),
    onClick: toggleSort,
    children: (
      <div className="flex gap-2 items-center justify-between">
        <div>{children}</div>
        {sortable && (sort.field == name) ? (
          <ChevronDownIcon className={classNames("w-4 h-4 duration-300", sort.direction == 'asc' ? 'rotate-180' : '')} />
        ) : ''}
      </div>
    )
  })
};

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
    <div className="flex min-h-[200px] w-full items-center justify-center bg-white">
      <div className="text-center text-slate-500">
        <ImSpinner2 className="mx-auto h-9 w-9 animate-spin" />
        <p className="mt-5">&nbsp;&nbsp;&nbsp;Loading...</p>
      </div>
    </div>
  ) : null;
};

Table.Error = ({ isError, error }) => {
  return isError ? (
    <div className="flex min-h-[200px] items-center justify-center bg-white">
      <div className="text-center text-red-500">
        <ExclamationTriangleIcon className="mx-auto h-9 w-9" />
        <p className="mt-5">{error.message}</p>
      </div>
    </div>
  ) : null;
};

Table.NoData = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-white">
      <div className="text-center text-warning">
        <ExclamationTriangleIcon className="mx-auto h-9 w-9" />
        <p className="mt-5">No date to show.</p>
      </div>
    </div>
  );
};

export default Table;
