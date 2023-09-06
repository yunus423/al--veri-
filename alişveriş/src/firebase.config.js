import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3oEH_N__dPF5DM1WjYSS2JhoG_-xzU5c",
  authDomain: "alisveris-8b8e0.firebaseapp.com",
  projectId: "alisveris-8b8e0",
  storageBucket: "alisveris-8b8e0.appspot.com",
  messagingSenderId: "5240710355",
  appId: "1:5240710355:web:e5e67fa778608965bf2026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
