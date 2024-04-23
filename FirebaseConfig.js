import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLHroMkvDFuTYpZeEl_fWbnYbA8YvxmEU",
  authDomain: "roommate-b495b.firebaseapp.com",
  projectId: "roommate-b495b",
  storageBucket: "roommate-b495b.appspot.com",
  messagingSenderId: "797925756036",
  appId: "1:797925756036:web:03c5b6d57c09f1c1af06d1",
  measurementId: "G-XLNWP0HZEN"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth= getAuth()
