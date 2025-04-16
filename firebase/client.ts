import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVrieBSSwGCaIisLo2eh-kgA2CidK1Z_w",
  authDomain: "prepwise-3053e.firebaseapp.com",
  projectId: "prepwise-3053e",
  storageBucket: "prepwise-3053e.firebasestorage.app",
  messagingSenderId: "579538290974",
  appId: "1:579538290974:web:ae9f37912407fc0190610f",
  measurementId: "G-NG6TM0DMXP"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)