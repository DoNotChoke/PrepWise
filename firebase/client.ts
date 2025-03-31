import { initializeApp, getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCt4LOCgdAJ1GojqnJYUouaIFwNrbGw3_c",
    authDomain: "prepwise-f5042.firebaseapp.com",
    projectId: "prepwise-f5042",
    storageBucket: "prepwise-f5042.firebasestorage.app",
    messagingSenderId: "388022660076",
    appId: "1:388022660076:web:44b8889d8d33d62c942ec9",
    measurementId: "G-TVQ15SL26W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);