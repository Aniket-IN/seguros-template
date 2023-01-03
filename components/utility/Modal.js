import React, { createElement, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Modal = ({ open, close, className, as = "div", ...props }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-20" onClose={close}>
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            // className="sm:inline-block sm:align-middle h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {createElement(as, {
              className: `text-left inline-block align-middle transform shadow-xl transition-all ${className}`,
              ...props,
            })}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Modal.Wrapper = ({ as = "div", className, ...props }) => {
  return createElement(as, {
    className: `flex flex-col max-h-[calc(100vh-80px)] ${className}`,
    ...props,
  });
};

Modal.XBtn = ({ className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full hover:bg-slate-100 ${className}`}
      {...props}
    >
      <XMarkIcon className="h-5 w-5" />
    </button>
  );
};

Modal.Header = ({ as = "div", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(
      className,
      "px-4 py-2 flex justify-between items-center flex-none"
    ),
  });
};

Modal.Body = ({ as = "div", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(className, "p-4 flex-grow overflow-auto"),
  });
};

Modal.Footer = ({ as = "div", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(
      className,
      "px-4 py-2 gap-3.5 flex justify-end items-center flex-none"
    ),
  });
};

Modal.FooterBtn = ({ as = "button", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(className, "px-4 py-1.5 text-sm rounded"),
  });
};

export default Modal;
