import Admin from "@/components/layouts/Admin";
import SectionHeading from "@/components/SectionHeading";
import RightCard from "@/components/support/RightCard";
import TicketHistoryCard from "@/components/support/TicketHistoryCard";
import DividerText from "@/components/utility/DividerText";
import InputGroup from "@/components/utility/InputGroup";
import { orderBy } from "lodash";
import {
  doc,
  onSnapshot,
  arrayUnion,
  serverTimestamp,
  Timestamp,
  updateDoc,
  collection,
  getDoc,
  getDocs,
  query,
  addDoc,
  collectionGroup,
  getFirestore,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function index() {
  const [MessageContent, setMessageContent] = useState("");
  const [AllMessage, setAllMessage] = useState([]);

  const [AllTickets, setAllTickets] = useState([]);
  const [sendClicked, setSendClicked] = useState(false);
  const [currentTicketId, setCurrentTicketId] = useState({id:"5HW1ZX2R1V4r6GhYWyh"});
  const [currentTicketuser, setCurrentTicketuser] = useState({});

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      document.getElementById("sendMessage").click();
    }
  }



//----------------------------get current Ticket user------------------------------------
useEffect(() => {
  const getUsers = async () => {
    const usersCollectionRef = collection(db, "users");
const docId = currentTicketId.userIds?currentTicketId.userIds[0]:"-1";
console.log(" docid", docId);

const docRef = doc(usersCollectionRef, docId.toString());
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = {docId,...docSnap.data()};

  console.log("use data :" , data);
  setCurrentTicketuser(data);
} else {
  console.log("No such document!");
}
  };
  getUsers();
}, [currentTicketId]);


  //-----------------------------------------------send message to firebase----------------------------------------------------
  const sendMessage = async () => {
    setSendClicked(true);
    let today = new Date();
    // today = today.toISOString().replace(/T/g," ");
    today = today.toISOString();
    console.log("today: " + today);
    // let time = today.getHours() + ":" + today.getMinutes() + " Hrs";
    const message = {
      createdAt: today,
      id: null,
      message: {
        content: MessageContent,
        id: null,
        messageDelivered: false,
        messageSeen:true,
        messageSent:true,
        receiverId: "6",
        senderId: "12",
      },
      type: "text",
      updatedAt: today,
    };
    if (MessageContent !== "") {
      try {
        const roomRef = doc(db, "rooms", currentTicketId?.id);
        const messagesRef = collection(roomRef, "messages");
        await addDoc(messagesRef, message);
        console.log("Message sent successfully");
        const messages = AllMessage;
        messages.push(message);
        setAllMessage(messages);
      } catch (error) {
        console.error(error);
      }
    }
 
    console.log(AllMessage);
    setMessageContent("");
  };



  //......-------------------------------------.........get and send firebase messages-------------------------------------------------
  const getAllmessages = (ticket) => {
    setCurrentTicketId(ticket);
    const roomsRef = collection(db, "rooms");
    const docRef = collection(roomsRef, ticket.id, "messages");
    const data = [];
    getDocs(docRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          data.push({ id: doc.id, ...doc.data() });
        });

        setAllMessage(data);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  //---------------------------- get all chats---------------------------------------------
  const getChats = async () => {
    const roomsRef = collection(db, "rooms");
    const querySnapshot = await getDocs(
      query(roomsRef, where("type", "==", "ticket"))
    );
    const data = [];
    querySnapshot.forEach((dot) => {
      data.push({ id: dot.id, ...dot.data() });
      console.log("Tickets  ", dot.id, " => ", dot.data());
    });

    console.log("data array", data);
    setAllTickets(data);
  };
 




console.log("allmessages", AllMessage);

 



  useEffect(() => {
   
    getChats();

    

    const q = query(collection(db, "rooms"), where("type", "==", "ticket"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ticketRoomsData = [];
      querySnapshot.forEach((doc) => {
        ticketRoomsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setAllTickets(ticketRoomsData);
     
    });
    return () => unsubscribe();
   
  
  }, []);





  

 




  useEffect(() => {

    // Get a reference to the messages subcollection of the room document
    const messagesRef = collection(doc(getFirestore(), "rooms", currentTicketId?.id), "messages");

    // Listen for changes to the messages collection in real-time
    const unsubscribe = onSnapshot(query(messagesRef), (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // Map each document to a message object with an "id" property
        messages.push({ id: doc.id, ...doc.data() });
      });
      setAllMessage(messages);
    });

    // Unsubscribe from real-time updates when the component unmounts
    return unsubscribe;
  }, [currentTicketId]);
  





  return (
    <Admin pageTitle="Soporte" headerTitle="Soporte">
      <div className="h-full lg:h-[calc(100vh-60px)] lg:max-h-full">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Chat sidebar */}
          <div className="flex max-h-96 w-full  flex-col border bg-white lg:max-h-full lg:max-w-xs">
            <div className="flex gap-2 p-4">
              <h2 className="font-medium">BANDEJA (2)</h2>
              <span className="ml-auto text-sm text-gray-400">20 de 240</span>
              <div className="flex gap-1">
                <button className="flex h-5 w-5 items-center justify-center border border-black border-opacity-40 text-black opacity-40">
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
                <button className="flex h-5 w-5 items-center justify-center border border-black border-opacity-60 text-black opacity-60">
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-4 pt-0">
              <InputGroup className="relative">
                <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
                  <MagnifyingGlassIcon className="aspect-square w-full" />
                </div>
                <InputGroup.Input
                  id="search"
                  type="search"
                  name="search"
                  className="bg-accent pl-9"
                  placeholder="Buscar"
                />
              </InputGroup>
            </div>

            <ul className="flex-grow divide-y overflow-auto ">
              {AllTickets.sort(function(a, b) {
                       return b.CreatedAt - a.CreatedAt})?.map((item, index) => (
                // <li
                //   className={classNames(
                //     "space-y-2.5 p-4 text-sm",
                //     index == 0 && "bg-neutral"
                //   )}
                // >
                //   <div className="flex justify-between gap-2">
                //     <dd>Ticket #123123</dd>
                //     {!!(index == 0) && (
                //       <dd className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                //         <span>1</span>
                //       </dd>
                //     )}
                //   </div>
                //   <dd className="font-semibold">
                //     Objeto perdido por otros temas
                //   </dd>
                //   <div className="flex items-center justify-between text-sm">
                //     <span className="text-xs">08:00 pm, 12/12/12</span>
                //     {index == 0 ? (
                //       <span className="font-semibold text-danger">
                //         Pendiente
                //       </span>
                //     ) : (
                //       <span className="font-semibold text-success">
                //         Resuelto
                //       </span>
                //     )}
                //   </div>
                // </li>
                <TicketHistoryCard
                id={item.id}
                  ticket={item}
                  key={index}
                  Clickable={true}
                  backgroundColor={currentTicketId.id ===item.id ?  "bg-[#F1F2F3]":"bg-white" }
                  getAllmessages={getAllmessages} setCurrentTicketId={setCurrentTicketId}
                />
              ))}
            </ul>
          </div>

    { currentTicketId.id!=="5HW1ZX2R1V4r6GhYWyh" &&    <div className="mt-7 flex flex-grow flex-col-reverse gap-5 px-4 md:px-5 lg:flex-row">
            <div className="flex flex-grow flex-col bg-white p-4">
              <div className="flex flex-col justify-between gap-4 text-sm lg:flex-row lg:items-center">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full">
                    <img
                      className="h-11 w-11 rounded-full"
                      src={currentTicketuser.image?? "/assets/img/default-profile-pic-1.jpg"}
                      alt="User"
                    />
                  </div>
                  <div>
                    <dd className="font-semibold">{currentTicketuser.full_name}</dd>
                    <dd>UI{currentTicketuser.docId}</dd>
                  </div>
                </div>
                <button className="rounded bg-primary px-4 py-2.5 text-white">
                  Marcar resuelto
                </button>
              </div>
              <div className="mt-5 flex-grow space-y-3 overflow-auto bg-accent px-4">
                <div className="px-4 py-3">
                  <DividerText text="25/05/22" textClassName="bg-accent" />
                </div>
                <ul>
                

                  {
                  AllMessage.sort(function(a, b) {
                       return a.CreatedAt - b.CreatedAt}).map((message, index) => {
                    return <SendMessage key={index} message={message} />;
                  })}
                </ul>
              </div>
              <div className="flex border border-t-2 border-t-black px-5 pt-5">
                <div className="flex-shrink-0 flex-grow">
                  <textarea
                    onChange={(e) => {
                      setMessageContent(e.target.value);
                    }}
                    value={MessageContent}
                    className="w-full border-none focus:ring-0"
                    name="message"
                    id="message"
                    rows="6"
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje"
                  />
                </div>
                <div>
                  <button
                    className="rounded bg-black px-4 py-2.5 text-white"
                    onClick={sendMessage}
                    id="sendMessage"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>

            <RightCard currentTicketId={currentTicketId} currentTicketuser={currentTicketuser} />
          </div>}
        </div>
      </div>
    </Admin>
  );
}

const SendMessage = ({ message }) => {
  console.log("message -----:", message);
  return (
    <li className="my-5">
      {message.message.senderId === "12" ? (
        <div className=" flex flex-row-reverse  text-xs  ">
          <div className="mx-4 grid  w-[45%]">
            <p className="justify-self-end rounded-md  bg-black  px-2 py-1  text-sm text-white">
              {message.message.content}
            </p>
            <div className="flex flex-row-reverse">
              <div className=" h-2 pt-1 text-xs text-gray-500">
                {message.createdAt.slice(11, 16)} Hrs
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex text-xs   ">
          <div className="mx-4 grid  w-[45%]">
            <p className="justify-self-start rounded-md  bg-white  px-2 py-1  text-sm text-black">
              {message.message.content}
            </p>
            <div className="flex flex-row-reverse">
              <div className=" h-2 pt-1 text-xs text-gray-500">
                {message.createdAt.slice(11, 16)} Hrs
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};





// 2023-03-16 20:08:19.867408Z
// 2023-03-16 20:08:07.347Z
// 2023-03-16T20:08:07.347Z