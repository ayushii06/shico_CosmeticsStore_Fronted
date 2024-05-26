// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6IQn9EHj_ol152pPJst_LrFY0kZ--K7c",
  authDomain: "sendotp-8ecff.firebaseapp.com",
  projectId: "sendotp-8ecff",
  storageBucket: "sendotp-8ecff.appspot.com",
  messagingSenderId: "8651199",
  appId: "1:8651199:web:8e6e8bccce7da1b4d7210a",
  measurementId: "G-Y7LPJ13KDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);