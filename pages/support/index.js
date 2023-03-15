import Admin from "@/components/layouts/Admin";
import SectionHeading from "@/components/SectionHeading";
import RightCard from "@/components/support/RightCard";
import TicketHistoryCard from "@/components/support/TicketHistoryCard";
import DividerText from "@/components/utility/DividerText";
import InputGroup from "@/components/utility/InputGroup";
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
  query, where,
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
  const [AllTickets,setAllTickets] = useState();
  const [AllMessage, setAllMessage] = useState([
    {
      time: "10:45 Hrs",
      content:
        "Is simply dummy text of the printing and typesetting industry. Is simply dummy text of the printing and typesetting industry. ",
      owner: "sender",
    },
    {
      time: "10:45 Hrs",
      content:
        "Is simply dummy text of the printing and typesetting industry. Is simply dummy text of the printing and typesetting industry. ",
      owner: "receiver",
    },
  ]);

  const [sendClicked, setSendClicked] = useState(false);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      document.getElementById("sendMessage").click();
    }
  }

  const sendMessage = () => {
    setSendClicked(true);
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + " Hrs";
    const message = {
      time: time,
      content: MessageContent,
      owner: "sender",
    };
    MessageContent !== "" && setAllMessage([...AllMessage, message]);
    console.log(AllMessage);
    setMessageContent("");
  };

  //...............get and send firebase messages
//   const getAllmessages =()=>{
//     const roomsRef =collection(db, 'rooms');
//     const docRef = collection(roomsRef, '5MkrcSzuJop9XO6thDS0','messages');
//     // const messageRef = collection(docRef, 'messages');

//     getDocs(docRef)
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//       });
//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
    
 
    
 
//   }
// getAllmessages();


const getChats = async ()=>{
  const roomsRef = collection(db, "rooms");
  const querySnapshot = await getDocs(query(roomsRef, where("type", "==", "ticket")));
  const data = [];

  querySnapshot.forEach((dot) => {
    data.push({ id: dot.id, ...dot.data() });
    console.log("group  ",dot.id, " => ", dot.data());
  });

  console.log("data array", data);
  setAllTickets(data);
  console.log("all tickets", AllTickets)


}

useEffect(() => {
  

 getChats();

  // return () => {
  //   second
  // }
}, [])



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

            <ul className="flex-grow divide-y overflow-auto">
              {AllTickets?.map((item, index) => (
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
                <TicketHistoryCard ticket={item} key={item.id} />
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-grow flex-col-reverse gap-5 px-4 md:px-5 lg:flex-row">
            <div className="flex flex-grow flex-col bg-white p-4">
              <div className="flex flex-col justify-between gap-4 text-sm lg:flex-row lg:items-center">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11">
                    <img
                      className="h-11 w-11"
                      src="/assets/img/sample/user-2.png"
                      alt="User"
                    />
                  </div>
                  <div>
                    <dd className="font-semibold">Carlos Pérez Guerrero</dd>
                    <dd>UI123123</dd>
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
                  {AllMessage.map((message, index) => {
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

            <RightCard />
          </div>
        </div>
      </div>
    </Admin>
  );
}

const SendMessage = ({ message }) => {
  console.log(message.content);
  return (
    <li className="my-5">
      {message.owner === "sender" ? (
        <div className=" flex flex-row-reverse  text-xs  ">
          <div className="mx-4 grid  w-[45%]">
            <p className="justify-self-end rounded-md  bg-black  px-2 py-1  text-sm text-white">
              {message.content}
            </p>
            <div className="flex flex-row-reverse">
              <div className=" h-2 pt-1 text-xs text-gray-500">
                {message.time}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex text-xs   ">
          <div className="mx-4 grid  w-[45%]">
            <p className="justify-self-end rounded-md  bg-white  px-2 py-1  text-sm text-black">
              {message.content}
            </p>
            <div className="flex flex-row-reverse">
              <div className=" h-2 pt-1 text-xs text-gray-500">
                {message.time}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
