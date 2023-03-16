import classNames from "classnames";
import React from "react";

const TicketHistoryCard = ({ticket, getAllmessages}) => {
  return (
    <div onClick={()=>{getAllmessages(ticket); console.log("current ticket",ticket ) ; }}>

    
    <ul className="max-h-96 flex-grow divide-y overflow-auto border bg-neutral lg:max-h-full cursor-pointer" >
    
        <li className={classNames("space-y-2.5 p-4 text-sm", "bg-white")} >
          <div className="flex justify-between gap-2">
            <dd>{ticket?.ticketId}</dd>
          </div>
          <dd className="font-semibold">{ticket?.topic}</dd>
          <div className="flex items-center justify-between text-sm">
            <span className="text-xs">{ticket?.createdAt.slice(11,16)}, {ticket?.createdAt.slice(0,10)} </span>
            {ticket?.active == true ? (
              <span className="font-semibold text-danger">Pendiente</span>
            ) : (
              <span className="font-semibold text-success">Resuelto</span>
            )}
          </div>
        </li>
    
    </ul>
    </div>
  );
};

export default TicketHistoryCard;
