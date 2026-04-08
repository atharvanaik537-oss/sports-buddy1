// src/auth.js
// 1. Import your initialized Firebase instances
import { auth, db } from './firebase-config.js';

// 2. Import Firebase Authentication methods
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// 3. Import Firestore methods
import { 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// 4. Import custom Logger (Required for source: 44)
import { logAction } from './logger.js';

// --- 1. Register User ---
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Determine if this is an Admin or a regular User based on the current page
        const isAdminReg = window.location.pathname.includes('admin-register');

        // Create a profile in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: email,
            role: isAdminReg ? 'admin' : 'user', 
            createdAt: new Date()
        });

        logAction('Registration', 'Success', { email, role: isAdminReg ? 'admin' : 'user' });
        
        alert("Account Created Successfully! Please login to continue.");

        // Redirect to the appropriate login page
        if (isAdminReg) {
            window.location.href = 'admin-login.html';
        } else {
            window.location.href = 'index.html'; // Your main user login page
        }

    } catch (error) {
        logAction('Registration', 'Error', { message: error.message });
        alert("Registration Failed: " + error.message);
    }
};

// --- 2. Login User/Admin ---
export const loginUser = async (email, password, redirectUrl) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        logAction('Login', 'Success', { email });
        alert("Login Successful! Redirecting...");
        window.location.href = redirectUrl;
    } catch (error) {
        logAction('Login', 'Error', { message: error.message });
        alert("Login Failed: " + error.message);
    }
};