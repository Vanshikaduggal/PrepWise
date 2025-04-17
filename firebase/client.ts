import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ14IDsuCvJPb6e53wAxJEXLZJ8tSYpzI",
  authDomain: "ai-agent-7b97c.firebaseapp.com",
  projectId: "ai-agent-7b97c",
  storageBucket: "ai-agent-7b97c.firebasestorage.app",
  messagingSenderId: "195093023023",
  appId: "1:195093023023:web:00ae6c03fac2fac36db9da",
  measurementId: "G-Z2ZJ9QK40W"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)