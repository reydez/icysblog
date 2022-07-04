import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSLbFYD3m18In_GA0cZlA3c_JDjf_SnOw",
  authDomain: "icysblog-e7ef6.firebaseapp.com",
  projectId: "icysblog-e7ef6",
  storageBucket: "icysblog-e7ef6.appspot.com",
  messagingSenderId: "1077474802692",
  appId: "1:1077474802692:web:12a26febce4d574ecdc951",
  measurementId: "G-XTN27CL1K5",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const db = getFirestore(app);
