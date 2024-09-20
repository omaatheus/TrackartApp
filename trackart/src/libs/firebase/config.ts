// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA26kst1bPEVk5I7oIbw5UBIm3fhy3AXwM",
  authDomain: "micro-sas.firebaseapp.com",
  databaseURL: "https://micro-sas-default-rtdb.firebaseio.com",
  projectId: "micro-sas",
  storageBucket: "micro-sas.appspot.com",
  messagingSenderId: "356191662507",
  appId: "1:356191662507:web:ee8355e23be4178e08e2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app