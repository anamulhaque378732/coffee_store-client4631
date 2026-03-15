import { getAuth } from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ImPodcast } from "react-icons/im";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: "coffee-store4631-cc75b.firebaseapp.com",
//     projectId: "coffee-store4631-cc75b",
//     storageBucket: "coffee-store4631-cc75b.firebasestorage.app",
//     messagingSenderId: "806060846021",
//     appId: "1:806060846021:web:14ca406e23c59e967039ac"
// };
// const firebaseConfig = {
//     apiKey: "AIzaSyABLOoHYbOmCb_0YF0PxGl1Nv7vWNtlmo4",
//     authDomain: "coffee-store4631-cc75b.firebaseapp.com",
//     projectId: "coffee-store4631-cc75b",
//     storageBucket: "coffee-store4631-cc75b.firebasestorage.app",
//     messagingSenderId: "806060846021",
//     appId: "1:806060846021:web:14ca406e23c59e967039ac"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)




























































