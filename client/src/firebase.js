// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7AX9TlTnq1ms8XYVbceBoMmy16SjHq0E",
  authDomain: "notes-app-acf6d.firebaseapp.com",
  projectId: "notes-app-acf6d",
  storageBucket: "notes-app-acf6d.appspot.com",
  messagingSenderId: "710004534878",
  appId: "1:710004534878:web:f020a2b88b5bbcb2414ecf",
  measurementId: "G-XZVPVGG8V6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);