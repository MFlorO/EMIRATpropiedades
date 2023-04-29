import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
import { apiKeyFirebase, appId } from "~/env";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKeyFirebase,
  authDomain: "emirat-propiedades.firebaseapp.com",
  projectId: "emirat-propiedades",
  storageBucket: "emirat-propiedades.appspot.com",
  messagingSenderId: "1068672760143",
  appId: appId
};


// Initialize Firebase/app
export const FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase/Auth
export const FirebaseAuth = getAuth( FirebaseApp )

// Initialize Firebase/firebase/firestore/lite
export const FirebaseBD = getFirestore( FirebaseApp )