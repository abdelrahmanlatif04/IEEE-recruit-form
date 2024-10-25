// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX0tWmZsca2t8pwyfB0uXFaqIRjbRYVC4",
  authDomain: "ieee-recruit-form.firebaseapp.com",
  databaseURL: "https://ieee-recruit-form-default-rtdb.firebaseio.com",
  projectId: "ieee-recruit-form",
  storageBucket: "ieee-recruit-form.appspot.com",
  messagingSenderId: "842606314313",
  appId: "1:842606314313:web:e25e680102ed265ac45098",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
