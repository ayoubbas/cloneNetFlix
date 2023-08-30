// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF_WH3JjapGyclVRK3yeD1VKnx8bnyoCY",
  authDomain: "clonentflix.firebaseapp.com",
  projectId: "clonentflix",
  storageBucket: "clonentflix.appspot.com",
  messagingSenderId: "150030081440",
  appId: "1:150030081440:web:04d40ddcf939f2046f98c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)