



import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {

      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
    //         apiKey: "AIzaSyDq2wsMlBA1pTxtL0JMnotik-dduRzxmz4",
    // authDomain: "mesagorius.firebaseapp.com",
    // projectId: "mesagorius",
    // storageBucket: "mesagorius.appspot.com",
    // messagingSenderId: "472488378003",
    // appId: "1:472488378003:web:9d286886989a4f90169766",
    // measurementId: "G-K8EGJ4M1YV"

    apiKey: "AIzaSyAvWjgFutpCvylALfQ3iUUlBrRVF6CZChM",
  authDomain: "mas-seguros-acc65.firebaseapp.com",
  projectId: "mas-seguros-acc65",
  storageBucket: "mas-seguros-acc65.appspot.com",
  messagingSenderId: "56127803396",
  appId: "1:56127803396:web:24d896b5a9cbc5fe2c6551",
  measurementId: "G-8TH6VH0FH4"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

         // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: process.env.VAPID_KEY,
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            console.log("fcm token",fcm_token)
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };