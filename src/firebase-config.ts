// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0UIhYuyQnb2pxb70P_wHNChNRX235fPw",
  authDomain: "mood-87fad.firebaseapp.com",
  projectId: "mood-87fad",
  storageBucket: "mood-87fad.appspot.com",
  messagingSenderId: "934725375866",
  appId: "1:934725375866:web:f6a2230f0ac1f2975828c3",
  measurementId: "G-KBGV7LKK59",
});

// Initialize Firebase
export const auth = app.auth();
export const db = getFirestore(app);
export default app;
