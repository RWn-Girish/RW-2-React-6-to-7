// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYfsxmXEW8av4WMho83BrXwUKHv7__POQ",
  authDomain: "react-rw2-5pm.firebaseapp.com",
  projectId: "react-rw2-5pm",
  storageBucket: "react-rw2-5pm.firebasestorage.app",
  messagingSenderId: "22753502918",
  appId: "1:22753502918:web:1a8364d784a912ca20d9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);