import React, { useState } from 'react'
import TabSelector from "./TabSelector"
import TicketHistoryCard from "./TicketHistoryCard"
import UserCard from "./UserCard"

const RightCard = () => {
  const [tab, setTab] = useState('user')

  return (
    <div className="w-full lg:max-w-xs flex flex-col gap-y-4">
      <TabSelector tab={tab} setTab={setTab} />
      {!!(tab == 'user') && <UserCard />}
      {!!(tab == 'ticket_history') && <TicketHistoryCard />}
    </div>
  )
}

export default RightCard