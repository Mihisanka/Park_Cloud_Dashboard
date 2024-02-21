// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/analytics';
import 'firebase/database';
//import io from 'socket.io-client';
//import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2NQe9YIiKk8qipxrCxPlZkfNfogBePKI",
  authDomain: "car-parking-f9338.firebaseapp.com",
  databaseURL:
    "https://car-parking-f9338-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "car-parking-f9338",
  storageBucket: "car-parking-f9338.appspot.com",
  messagingSenderId: "357367526616",
  appId: "1:357367526616:web:461c0dca8edf47f36053ad",
  measurementId: "G-48XWCTC9Z1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
