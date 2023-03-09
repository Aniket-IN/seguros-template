import classNames from "classnames";
import React from "react";

const TicketHistoryCard = () => {
  return (
    <ul className="max-h-96 flex-grow divide-y overflow-auto border bg-neutral lg:max-h-full">
      {[...Array(3)].map((item, index) => (
        <li className={classNames("space-y-2.5 p-4 text-sm", "bg-white")} >
          <div className="flex justify-between gap-2">
            <dd>Ticket #123123</dd>
          </div>
          <dd className="font-semibold">Objeto perdido por otros temas</dd>
          <div className="flex items-center justify-between text-sm">
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
  );
};

export default TicketHistoryCard;
