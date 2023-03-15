import Wrapper from "@/components/layouts/Wrapper";
import "../styles/globals.css";
import * as firebase from "firebase/app";
import "firebase/messaging";
import { firebaseCloudMessaging } from "../firebase";
import useAxios from "@/hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setnew_sos_alerts_count,
  setNotificationData,
  incrementNotificationCount
} from "../redux/notificationSlice";
import { useState } from "react";
// import backgroundNotifsCallback from "@/firebase-messaging-sw";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
      <FirebaseNotifs />
    </Wrapper>
  );
}

export default MyApp;

const FirebaseNotifs = () => {
  const { axios } = useAxios();
  const [count, setCount] = useState(0); // to control the number of renders

  const dispatch = useDispatch();

  async function setToken() {
    try {
      const token = await firebaseCloudMessaging.init();
      if (token) {
        console.log("token firebase", token);

        axios
          .post("api/admin/fcm-device-token/", { device_id: token })
          .then((response) => {
            const data = response.data;
            console.log("res data", data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const pushaNotification = (title, body, date) => {
    if (title === "New Alert SOS") {
      const alertNofis = { title: "New Alert SOS", count: 1 };
      dispatch(setnew_sos_alerts_count({ alertNofis }));
      dispatch(setNotificationData({ title: title, body: body, date: date }));
    }
    if (title === "Alert SOS Ratings") {
      const alertNofis = { title: "Rating", count: 1 };
      dispatch(incrementNotificationCount());
      dispatch(setNotificationData({ title: title, body: body, date: date }));
      

    }
  };

  useEffect(() => {


// backgroundNotifsCallback();

count<=1 && setToken();
    if ("serviceWorker" in navigator) {
      console.log(navigator);
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Service worker registered:', registration);

        navigator.serviceWorker.addEventListener("message", (event) => {
          console.log("event",event);
          let title = event.data.firebaseMessaging.payload.notification.title;
          let body = event.data.firebaseMessaging.payload.notification.body;
          console.log('Fcm notification:', title, body);
          let date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth() + 1; // add 1 to get the correct month (0 = January)
          var day = date.getDate();
          var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
  
  
          console.log(event);
          pushaNotification(title, body, formattedDate);
  
          setCount(count + 1);
        });






      })
      .catch(function(error) {
        console.log('Service worker registration failed:', error);
      });

   
    }
  },[]);

  return <></>;
};
