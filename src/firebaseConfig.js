// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8dfjfOnBr4KYM31nre5Qjwy_iJiPMhPk",
  authDomain: "proyecto-final-reactjs-d0347.firebaseapp.com",
  projectId: "proyecto-final-reactjs-d0347",
  storageBucket: "proyecto-final-reactjs-d0347.appspot.com",
  messagingSenderId: "261109502095",
  appId: "1:261109502095:web:d4e6cb6f234eb1943ca0fa",
  measurementId: "G-6TVE9LVXJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)