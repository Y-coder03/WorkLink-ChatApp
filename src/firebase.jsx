
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBbbXptCmGFx1auP54mT3OWRn3N2lgH3Ao",
  authDomain: "worklink-chat.firebaseapp.com",
  projectId: "worklink-chat",
  storageBucket: "worklink-chat.appspot.com",
  messagingSenderId: "896763373479",
  appId: "1:896763373479:web:55de1076308347229a7882"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
