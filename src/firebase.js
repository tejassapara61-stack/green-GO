// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZcs0aVVztosXP5ru9lF0yv4Xt65-u2-A",
  authDomain: "greengo-crop-helper.firebaseapp.com",
  projectId: "greengo-crop-helper",
  storageBucket: "greengo-crop-helper.appspot.com",
  messagingSenderId: "686269154478",
  appId: "1:686269154478:web:bfebb72fa592c24cdc193f",
  measurementId: "G-02RV7QLPXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
