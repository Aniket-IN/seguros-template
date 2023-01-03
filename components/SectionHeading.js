import classNames from "classnames";
import { createElement } from "react";

const SectionHeading = ({ as = "h2", className = "", ...props }) => {
  return createElement(as, {
    ...props,
    className: classNames("font-semibold text-lg", className),
  });
};

export default SectionHeading;
