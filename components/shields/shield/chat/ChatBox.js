import classNames from "classnames";
import { createElement } from "react";

const ChatBox = ({ as = "div", className = "", ...props }) =>
  createElement(as, {
    ...props,
    className: classNames(
      "px-5 py-3 space-y-3 bg-accent flex-grow overflow-auto",
      className
    ),
  });

export default ChatBox;
