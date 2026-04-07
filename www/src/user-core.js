// src/user-core.js
import { db, auth } from './firebase-config.js';
import { 
    collection, 
    addDoc, 
    doc, 
    setDoc, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { logAction } from './logger.js';

// --- 1. Export: Add Sports Event (With User-Defined Location) ---
export const addSportsEvent = async (eventData) => {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error("User not logged in");

        // We save the event with the specific location typed by the user
        const docRef = await addDoc(collection(db, "events"), {
            title: eventData.title,
            sport: eventData.sport,
            location: eventData.location, // Capturing the user-defined string
            time: eventData.time,
            hostId: user.uid,
            hostEmail: user.email,
            createdAt: serverTimestamp()
        });

        logAction('User: Post Event', 'Success', { eventId: docRef.id, location: eventData.location });
        return true;
    } catch (error) {
        logAction('User: Post Event', 'Error', { message: error.message });
        alert("Failed to post event: " + error.message);
        return false;
    }
};

// --- 2. Export: Save User Profile ---
export const saveUserProfile = async (profileData) => {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error("User not logged in");

        await setDoc(doc(db, "users", user.uid), {
            abilityLevel: profileData.level,
            interest: profileData.interest,
            updatedAt: serverTimestamp()
        }, { merge: true });

        logAction('User: Update Profile', 'Success', { uid: user.uid });
        return true;
    } catch (error) {
        logAction('User: Update Profile', 'Error', { message: error.message });
        alert("Failed to update profile: " + error.message);
        return false;
    }
};