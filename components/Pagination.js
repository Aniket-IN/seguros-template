import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '@/hooks/usePagination';
import classNames from "classnames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const PaginationItemClassNames = "relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex">
      <ul
        className={classnames(
          'pagination-container list-none ml-auto',
          "relative z-0 inline-flex gap-x-2 -space-x-px shadow-sm",
          { [className]: className })}
      >
        <button
          className={classnames('!px-1.5', PaginationItemClassNames, { disabled: currentPage === 1 })}
          onClick={onPrevious}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {
          paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return <li key={`${pageNumber}-${index}`} className={classNames(PaginationItemClassNames)}>&#8230;</li>;
            }

            return (
              <button
                key={`${pageNumber}-${index}`}
                className={classnames(PaginationItemClassNames, 'pagination-item', { selected: pageNumber === currentPage })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })
        }
        <button
          className={classnames('!px-1.5', PaginationItemClassNames, { disabled: currentPage === lastPage })}
          onClick={onNext}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </ul >
    </div>
  );
};

export default Pagination;