const classNames = require("classnames");
const { createElement } = require("react");

const HeaderBtn = ({ as = "button", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames(
      "py-3 px-4 self-stretch flex items-center gap-2 hover:bg-secondary-2",
      className
    ),
  });
};

export default HeaderBtn;
