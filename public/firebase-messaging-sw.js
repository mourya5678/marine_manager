// importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// const firebaseConfig = {
//     apiKey: "AIzaSyCJD2CFeBhHgPGLfcKk4x3kAVATUdfcxGI",
//     authDomain: "marinemanager-943fb.firebaseapp.com",
//     projectId: "marinemanager-943fb",
//     storageBucket: "marinemanager-943fb.firebasestorage.app",
//     messagingSenderId: "26494334722",
//     appId: "1:26494334722:web:a4ececa97e26a54aff341b",
//     measurementId: "G-DC7Y6ESZ9J"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// console.log({ messaging })

// messaging.onBackgroundMessage((payload) => {
//     console.log('Received background message:--- ', payload.notification);

//     const notificationTitle = payload.notification.title || "Default Title"; // Fallback title
//     const notificationOptions = {
//         body: payload.notification.body || "Default body message.", // Fallback body
//         icon: payload.notification.icon || 'YOUR_NOTIFICATION_ICON_URL', // Optional icon
//     };

//     // Show the notification
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });