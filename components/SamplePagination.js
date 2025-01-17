import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const SamplePagination = () => {
  return (
    <div className="py-3 flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2  text-sm font-medium  text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2  text-sm font-medium  text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex gap-x-2  shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-primary text-primary", Default: "bg-white  text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-primary text-white relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-white  text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SamplePagination