// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyCJD2CFeBhHgPGLfcKk4x3kAVATUdfcxGI",
//     authDomain: "marinemanager-943fb.firebaseapp.com",
//     projectId: "marinemanager-943fb",
//     storageBucket: "marinemanager-943fb.firebasestorage.app",
//     messagingSenderId: "26494334722",
//     appId: "1:26494334722:web:a4ececa97e26a54aff341b",
//     measurementId: "G-DC7Y6ESZ9J"
// };

// const vapidkey =
//     "BKg2-Dgzfl9jUQ3bRhpIAwDNKkEeL1RQrsNWKSERnhUZQzBYGcAzLNzLUO5tmIPtWcEe5J2buuScIbz8cRpsMHc";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Cloud Messaging
// const messaging = getMessaging(app);

// export const requestForToken = async (setToken) => {
//     try {
//         const currentToken = await getToken(messaging, { vapidKey: vapidkey });
//         if (currentToken) {
//             console.log("FCM Token:", currentToken);
//             localStorage.setItem("MarinfcmToken", JSON.stringify(currentToken))
//             setToken(currentToken); // Call a function to handle the token
//         } else {
//             console.warn("No registration token available.");
//         }
//     } catch (error) {
//         console.error("An error occurred while retrieving token. ", error);
//     }
// };

// // Listen for foreground messages
// export const onMessageListener = () => new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//         console.log("Message received in foreground: ", payload);
//         resolve(payload);
//     });
// });