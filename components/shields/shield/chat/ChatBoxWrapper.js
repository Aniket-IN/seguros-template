import classNames from "classnames"
import { createElement } from 'react'

const ChatBoxWrapper = ({ as = 'div', className = '', ...props }) => (
  createElement(as, {
    ...props,
    className: classNames('p-5 bg-white space-y-3 flex flex-col h-[800px]', className),
  })
)

export default ChatBoxWrapper