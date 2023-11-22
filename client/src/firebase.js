// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernproject1-9265b.firebaseapp.com",
  projectId: "mernproject1-9265b",
  storageBucket: "mernproject1-9265b.appspot.com",
  messagingSenderId: "70486492741",
  appId: "1:70486492741:web:a508e3908606a58bba852c",
  measurementId: "G-1W5BK25GJR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
