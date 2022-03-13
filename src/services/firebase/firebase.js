import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDk8KCPSHPLATew4jwIgymOt7z0y9WVfn8",
  authDomain: "app-24925.firebaseapp.com",
  projectId: "app-24925",
  storageBucket: "app-24925.appspot.com",
  messagingSenderId: "399199937955",
  appId: "1:399199937955:web:ce6b33174fa2fe8fdf2616",
  measurementId: "G-NX90GSGX8K"
};


const app = initializeApp(firebaseConfig);


export const firestoreDb = getFirestore(app)