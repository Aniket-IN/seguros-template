import React from 'react'

const TicketSelector = ({ tickets, ticketId, setTicketId }) => {

  return (
    <div className="bg-accent px-2.5 pb-4 pt-1 text-sm">
      <div className="flex items-center justify-between px-5 py-2">
        <span className="font-semibold">Asunto</span>
        <span className="font-semibold">Contenido</span>
      </div>
      <ul className="max-h-[750px] space-y-1 overflow-auto no-scrollbar">
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <label className="flex cursor-pointer items-center justify-between bg-white px-5 py-5 text-secondary">
              <span>{ticket.title}</span>
              <input
                onChange={() => setTicketId(ticket.id)}
                checked={ticketId == ticket.id}
                name="account"
                type="radio"
                className="h-5 w-5 border-gray-300 text-primary focus:ring-primary"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TicketSelector