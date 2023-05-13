import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
import { apiKeyFirebase, appId, projectId } from "~/env.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKeyFirebase,
  authDomain: "emiratpropiedades-6881b.firebaseapp.com",
  projectId: projectId,
  storageBucket: "emiratpropiedades-6881b.appspot.com",
  messagingSenderId: "749891792389",
  appId: appId
};


// Initialize Firebase/app
export const FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase/Auth
export const FirebaseAuth = getAuth( FirebaseApp )

// Initialize Firebase/firebase/firestore/lite
export const FirebaseBD = getFirestore( FirebaseApp )