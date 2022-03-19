// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACNQkpRDyKBB8ZBp04Vb-goAevC847v04",
  authDomain: "megether-lottery.firebaseapp.com",
  projectId: "megether-lottery",
  storageBucket: "megether-lottery.appspot.com",
  messagingSenderId: "402055877153",
  appId: "1:402055877153:web:8ea0be4689c9e12c500960",
  measurementId: "G-PVDHLMTE0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);