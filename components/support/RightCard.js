import React, { useState } from "react";
import TabSelector from "./TabSelector";
import TicketHistoryCard from "./TicketHistoryCard";
import UserCard from "./UserCard";

const RightCard = () => {
  const [tab, setTab] = useState("user");

  return (
    <div className="flex w-full flex-col gap-y-4 lg:max-w-xs">
      <TabSelector tab={tab} setTab={setTab} />
      {!!(tab == "user") && <UserCard />}
      {!!(tab == "ticket_history") && <TicketHistoryCard />}
    </div>
  );
};

export default RightCard;
