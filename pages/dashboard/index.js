import React, { useState } from "react";
import Admin from "@/components/layouts/Admin";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/SectionHeading";
import TopCardsSection from "@/components/home/TopCardsSection";
import UserCountLineChart from "@/components/home/charts/UserCountLineChart";
import UserCountBarChart from "@/components/home/charts/UserCountBarChart";
import MonthSelector from "@/components/dashboard/MonthSelector";
import { useEffect } from "react";
// import { messaging } from "@/public/firebase-messaging-sw";
import * as firebase from "firebase/app";
import "firebase/messaging";
import { firebaseCloudMessaging } from "../firebase";
import useAxios from "@/hooks/useAxios";
import { useDispatch } from "react-redux";
import {setnew_sos_alerts_count} from "../../redux/notificationSlice"





const Home = () => {
const {axios} = useAxios();

  const dispatch = useDispatch();





  async function setToken() {
    try {
      
      const token = await firebaseCloudMessaging.init();
      if (token) {
        console.log("token firebase", token);
        
        axios
        .post('api/admin/fcm-device-token/',{"device_id": token})
      .then((response) => {
        const data = response.data;
        console.log("res data",data);
      }).catch(
        (error)=>{
        console.log(error);
      }
      )
      
    }


  }
 catch (error) {
      console.log(error);
    }
  }


















  useEffect(() => {
    setToken();

      if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (event) => {

      console.log(event);
      console.log(event.data.firebaseMessaging.payload.notification.title);
      dispatch(setnew_sos_alerts_count(event.data.firebaseMessaging.payload.notification.title));
    });
  }

});

//  baseurl api/account/fcm-device/token/ device_id
  



  const [selectedMonth, setSelectedMonth] = useState({
    month: "enero",
    value: 1,
  });




  return (
    <Admin pageTitle="Dashboard" headerTitle="Bienvenido, Lucas">
      {/* Topbar */}
      <div className="bg-neutral">
        <div className="container-padding items-center justify-end gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
          <p className="text-sm text-secondary-3">
            Visualizar información del mes
          </p>
          <div className="flex max-w-sm items-center justify-end gap-3">
            <MonthSelector
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />

            <button
              type="button"
              className="inline-flex flex-grow items-center gap-2 rounded-md border border-transparent bg-success px-2 py-2 text-sm font-normal leading-4 text-white focus:outline-none sm:w-auto sm:min-w-[150px] sm:px-4"
            >
              <DocumentTextIcon className="h-5 w-5" />
              Descargar Excel
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="space-y-2">
        <TopCardsSection selectedMonth={selectedMonth} />

        {/* Graphcs Section */}
        <div className="container-padding">
          <SectionHeading className="py-5">
            Métricas de crecimiento
          </SectionHeading>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {/* Left Graph */}
            <div className="flex flex-col gap-2 bg-white p-4">
              <div className="text-sm font-semibold">
                <h3>N°. de Usuarios registrados por mes</h3>
                <h3 className="text-right">Total Usuarios: 20 541</h3>
              </div>
              <div className="aspect-video flex-grow bg-white">
                <UserCountLineChart />
              </div>
            </div>

            {/* Right Graph */}
            <div className="flex flex-col gap-2 bg-white p-4">
              <div className="text-sm font-semibold">
                <h3>N°. de Escudos creados por mes</h3>
                <h3 className="text-right">Total Escudos: 2 541</h3>
              </div>
              <div className="aspect-video flex-grow bg-white">
                <UserCountBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Home;
