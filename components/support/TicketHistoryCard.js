import classNames from "classnames"
import React from 'react'

const TicketHistoryCard = () => {
  return (
    <ul className="flex-grow max-h-96 lg:max-h-full overflow-auto divide-y bg-neutral border">
      {[...Array(3)].map((item, index) => (
        <li className={classNames("p-4 text-sm space-y-2.5", 'bg-white')}>
          <div className="flex justify-between gap-2">
            <dd>Ticket #123123</dd>
          </div>
          <dd className="font-semibold">Objeto perdido por otros temas</dd>
          <div className="flex text-sm justify-between items-center">
            <span className="text-xs">08:00 pm, 12/12/12</span>
            {index == 0 ? (
              <span className="font-semibold text-danger">Pendiente</span>
            ) : (
              <span className="font-semibold text-success">Resuelto</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TicketHistoryCard