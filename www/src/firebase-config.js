import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5duT3BfitbARmR7ISjbGNkGCLc1Yv-8Y",
  authDomain: "sports-buddy1.firebaseapp.com",
  projectId: "sports-buddy1",
  storageBucket: "sports-buddy1.firebasestorage.app",
  messagingSenderId: "437017028504",
  appId: "1:437017028504:web:f96545046db4112f332ded",
  measurementId: "G-FJKXCV7BH0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);