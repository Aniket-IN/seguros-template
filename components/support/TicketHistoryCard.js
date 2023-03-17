import classNames from "classnames";
import React from "react";
import { getFirestore, collection, query, where, onSnapshot,writeBatch,getDocs } from 'firebase/firestore';
import { db } from "@/firebase";
import { useState, useEffect } from "react";


const TicketHistoryCard = ({ticket, getAllmessages, backgroundColor, Clickable}) => {
  const [IsChatClicked, setIsChatClicked] = useState(false);


  const [unseenMessagesCount, setUnseenMessagesCount] = useState(0);

  console.log("ticket: " + ticket.id);


  // set unseen messages count
  const messagesCollectionRef = collection(db, 'rooms', ticket.id, 'messages');
  const unseenMessagesQuery = query(messagesCollectionRef, where('message.massageSeen','==', false));
  
  const markAllAsSeen = async () => {
    try {
    const batch = writeBatch(db);
    const unseenMessagesSnapshot = await getDocs(unseenMessagesQuery);
    
    unseenMessagesSnapshot.forEach((doc) => {
      const docRef = doc.ref;
      batch.update(docRef, { 'message.massageSeen': true });
    });
  
    await batch.commit();
    setUnseenMessagesCount(0);
      
    } catch (error) {
      console.log("error:",error)
    }
  };





  useEffect(() => {
    const messagesCollectionRef = collection(db, 'rooms', ticket.id, 'messages');
    const unseenMessagesQuery = query(messagesCollectionRef, where('message.massageSeen','==',false));
    const unsubscribe = onSnapshot(unseenMessagesQuery, (snapshot) => {
      console.log("unseen messages",snapshot.size);
      console.log("docs",snapshot.docs);
      !IsChatClicked &&  setUnseenMessagesCount(snapshot.size);
    });

    return unsubscribe;
  });









  return (
    <div  onClick={  ()=>{if(Clickable) {getAllmessages(ticket); markAllAsSeen(); !IsChatClicked ? setIsChatClicked(true) : setIsChatClicked(false)} }}>

    
    <ul className="max-h-96 flex-grow divide-y overflow-auto border bg-neutral lg:max-h-full cursor-pointer" >
    
        <li className={classNames("space-y-2.5 p-4 text-sm", backgroundColor)} >
          <div className="flex justify-between gap-2">
            <dd>{ticket?.ticketId}</dd>
            { unseenMessagesCount!==0 &&  Clickable && <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-sm text-white  ">
              {unseenMessagesCount}
            </span>}
          </div>
          <dd className="font-semibold">{ticket?.topic}</dd>
          <div className="flex items-center justify-between text-sm">
            <span className="text-xs">{ticket?.createdAt.slice(11,16)}, {ticket?.createdAt.slice(0,10)} </span>
            {  ticket?.active == true ? (
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
