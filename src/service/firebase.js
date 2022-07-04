import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
  getRedirectResult,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "@firebase/firestore";

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

export const auth = getAuth(app);
export const db = getFirestore(app);

export const logIn = async () => await signInWithRedirect(auth, provider);

export const redirectResult = async () => {
  try {
    const res = await getRedirectResult(auth);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};
