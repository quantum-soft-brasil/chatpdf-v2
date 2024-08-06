import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfmEfQXDF403N8FDW8YQ5DOd8qkrLoNKA",
  authDomain: "infopdf-d9527.firebaseapp.com",
  projectId: "infopdf-d9527",
  storageBucket: "infopdf-d9527.appspot.com",
  messagingSenderId: "193569526109",
  appId: "1:193569526109:web:5e3aec9937c93801be58b4",
  measurementId: "G-EDKP1P14DB",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
