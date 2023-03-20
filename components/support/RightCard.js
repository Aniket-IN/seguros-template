import React, { useState, useEffect } from "react";
import TabSelector from "./TabSelector";
import TicketHistoryCard from "./TicketHistoryCard";
import UserCard from "./UserCard";
import { collection, query, where, onSnapshot, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

const RightCard = ({ currentTicketId, currentTicketuser }) => {
  const [tab, setTab] = useState("user");
  const [historyCards, sethistoryCards] = useState([]);
  const [currentTicket, setcurrentTicket] = useState({});

  // useEffect(() => {
  //   const q = query(collection(db, "rooms"), where("userIds[0]", "==", currentTicketId.userIds[0]? currentTicketId.userIds[0] : "-1" ));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const updatedData = [];
  //     querySnapshot.forEach((doc) => {
  //       updatedData.push({ id: doc.id, ...doc.data() });
  //     });
  //     sethistoryCards(updatedData);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const q = query(
      collection(db, "rooms"),
      where(
        "userIds",
        "array-contains",
        currentTicketId.userIds[0] ? currentTicketId.userIds[0] : "-1"
      ),
      where("type", "==", "ticket")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const rooms = [];
      querySnapshot.forEach((doc) => {
        rooms.push({ id: doc.id, ...doc.data() });
        console.log("history :", doc.data());
      });
      sethistoryCards(rooms);
    });

    return () => unsubscribe();
  },[currentTicketuser]);


  useEffect(() => {

    const unsub = onSnapshot(doc(db, "rooms", currentTicketId.id), (doc) => {
      console.log("Current data: ", doc.data());
      setcurrentTicket({id:currentTicketId.id, ...doc.data()})
  })
      
    
 
  return () => unsub();
},[currentTicketId.id, currentTicketId])


  return (
    <div className="flex w-full flex-col gap-y-4 lg:max-w-xs overflow-auto">
      <TabSelector tab={tab} setTab={setTab} />
      {!!(tab == "user") && (
        <ul className="flex-grow divide-y  h-full">
        <UserCard
          currentTicketId={currentTicket}
          id={currentTicketId.id}
          currentTicketuser={currentTicketuser}
        />
        </ul>


      )}
      {!!(tab == "ticket_history") &&
        historyCards.map((card, index) => {
          return (
            <TicketHistoryCard
              Clickable={false}
              backgroundColor="bg-white"
              ticket={card}
              key={index}
              currentTicketuser={currentTicketuser}
            />
          );
        })}
    </div>
  );
};

export default RightCard;
