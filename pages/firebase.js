import "@firebase/messaging"
// import { Messaging } from "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";



const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {

      firebase?.initializeApp({

        apiKey: "AIzaSyAvWjgFutpCvylALfQ3iUUlBrRVF6CZChM",
        authDomain: "mas-seguros-acc65.firebaseapp.com",
        projectId: "mas-seguros-acc65",
        storageBucket: "mas-seguros-acc65.appspot.com",
        messagingSenderId: "56127803396",
        appId: "1:56127803396:web:f366133a9021677e2c6551",
        measurementId: "G-EP6NBQBX06"
      });
      const messaging = firebase.messaging();
      messaging.onMessage(function(payload) {
        console.log('Foreground notification received:', payload);
        // Do something with the payload, such as displaying a notification
      });
      try {

        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            // vapidKey: process.env.VAPID_KEY,
            vapidKey: "BNAuJld2JkYGFNwwID0paO_SQI4G5CgLzukD5uOUlzIh7zp5E1DH_N8S5JYew_aRbYWXby7Pa0O2AAaTxrhpsOM"
          });

          console.log("fcm token",fcm_token)
          // Set token in our local storage
          if (fcm_token) {

            console.log("fcm token",fcm_token)
   
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        console.log("no token");
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };





    