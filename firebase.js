// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr9b30-Nel0VMIYpR16fwc0oWMlQkB9A4",
  authDomain: "rn-ig-clone-b9a7d.firebaseapp.com",
  projectId: "rn-ig-clone-b9a7d",
  storageBucket: "rn-ig-clone-b9a7d.appspot.com",
  messagingSenderId: "925225383612",
  appId: "1:925225383612:web:f96bece8b2174c066002b9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export { app, db, storage, auth };
