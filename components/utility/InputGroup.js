import { createContext, createElement, useContext } from "react";

const InputGroupContext = createContext();

const InputGroup = ({
  as = "div",
  isInvalid = false,
  prepend = false,
  append = false,
  className = "",
  ...props
}) => {
  return (
    <InputGroupContext.Provider value={{ isInvalid, prepend, append }}>
      {createElement(as, {
        className: `w-full flex-row flex items-stretch ${className}`,
        ...props,
      })}
    </InputGroupContext.Provider>
  );
};

InputGroup.Prepend = ({ as = "div", className = "", ...props }) => {
  return createElement(as, {
    className: `
      rounded-l-md overflow-hidden flex-grow flex-shrink-0 border-[#e2e8f0] border border-r-0 
      ${className}
    `,
    ...props,
  });
};

InputGroup.Append = ({ as = "div", className = "", ...props }) =>
  createElement(as, {
    className: `rounded-r-md overflow-hidden flex-grow flex-shrink-0 border-[#e2e8f0] border border-l-0 ${className}`,
    ...props,
  });

InputGroup.Input = ({
  as = "input",
  className = "",
  type = "text",
  ...props
}) => {
  const { isInvalid, prepend, append } = useContext(InputGroupContext);

  return createElement(as, {
    className: `
      ${isInvalid ? "border-red-600" : ""}
      ${prepend ? "rounded-r-md" : ""}
      ${append ? "rounded-l-md" : ""}
      ${!append && !prepend ? "rounded-md" : ""} 
      px-4 py-1.5 w-full border border-[#e2e8f0] 
      outline-none focus:ring-1
      focus:ring-primary focus:border-primary
      ${className}`,
    ...props,
  });
};

InputGroup.Textarea = ({ as = "textarea", className = "", ...props }) => {
  const { isInvalid, prepend, append } = useContext(InputGroupContext);
  // transition ease-in-out duration-300
  // focus:border-primary focus:border-2
  return createElement(as, {
    className: `
      ${isInvalid ? "border-red-600" : ""}
      ${prepend ? "rounded-r" : ""}
      ${append ? "rounded-l" : ""}
      ${!append && !prepend ? "rounded" : ""} 
      px-4 py-2 w-full border border-[#e2e8f0] 
      focus:outline-none focus:ring-1
      focus:ring-primary focus:border-primary
      ${className}`,
    ...props,
  });
};

InputGroup.Label = ({ as = "label", className = "", ...props }) =>
  createElement(as, {
    className: `flex mb-3 text-opacity-70 text-black text-sm cursor-pointer leading-none font-normal ${className}`,
    ...props,
  });

InputGroup.Error = ({ as = "div", error = null, className = "", ...props }) =>
  error
    ? createElement(as, {
      className: `text-sm text-red-600 mt-1 ${className}`,
      children: error,
      ...props,
    })
    : null;

export { InputGroup };
export default InputGroup;
