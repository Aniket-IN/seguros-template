// importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
// );

// const firebaseConfig = {
//     apiKey: "AIzaSyDq2wsMlBA1pTxtL0JMnotik-dduRzxmz4",
//     authDomain: "mesagorius.firebaseapp.com",
//     projectId: "mesagorius",
//     storageBucket: "mesagorius.appspot.com",
//     messagingSenderId: "472488378003",
//     appId: "1:472488378003:web:9d286886989a4f90169766",
//     measurementId: "G-K8EGJ4M1YV"
//   };

// export const app = firebase.initializeApp(firebaseConfig);

// export const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });


importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({

  apiKey: "AIzaSyAvWjgFutpCvylALfQ3iUUlBrRVF6CZChM",
  authDomain: "mas-seguros-acc65.firebaseapp.com",
  projectId: "mas-seguros-acc65",
  storageBucket: "mas-seguros-acc65.appspot.com",
  messagingSenderId: "56127803396",
  appId: "1:56127803396:web:f366133a9021677e2c6551",
  measurementId: "G-EP6NBQBX06"
});

const messaging = firebase.messaging();

