// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABE_MmKgXqE6omt56nCOW0851bnp5WVUo",
  authDomain: "aryaportofolio-faadf.firebaseapp.com",
  projectId: "aryaportofolio-faadf",
  storageBucket: "aryaportofolio-faadf.firebasestorage.app",
  messagingSenderId: "116315344475",
  appId: "1:116315344475:web:127680a628e7ec8f31f97e"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
