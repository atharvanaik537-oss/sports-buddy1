// src/admin-core.js
import { db } from './firebase-config.js';
import { 
    collection, 
    addDoc, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { logAction } from './logger.js';
import { deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// --- 1. Add Sports Category ---
export const addCategory = async (categoryName) => {
    try {
        if (!categoryName) return alert("Please enter a category name");

        const docRef = await addDoc(collection(db, "categories"), {
            name: categoryName,
            createdAt: serverTimestamp()
        });

        logAction('Admin: Add Category', 'Success', { name: categoryName, id: docRef.id });
        alert(`Category "${categoryName}" added successfully!`);
        return true;
    } catch (error) {
        logAction('Admin: Add Category', 'Error', { message: error.message });
        alert("Error adding category: " + error.message);
        return false;
    }
};

// --- 2. Add City & Area ---
export const addLocation = async (cityName, areaName) => {
    try {
        if (!cityName || !areaName) return alert("Please fill both City and Area");

        const docRef = await addDoc(collection(db, "cities"), {
            city: cityName,
            area: areaName,
            createdAt: serverTimestamp()
        });

        logAction('Admin: Add Location', 'Success', { city: cityName, area: areaName });
        alert(`Location "${areaName}, ${cityName}" saved!`);
        return true;
    } catch (error) {
        logAction('Admin: Add Location', 'Error', { message: error.message });
        alert("Error saving location: " + error.message);
        return false;
    }
};

// --- 3. Delete Logic ---
export const deleteItem = async (collectionName, id) => {
    if (!confirm("Are you sure you want to delete this?")) return;
    
    try {
        await deleteDoc(doc(db, collectionName, id));
        logAction(`Admin: Delete from ${collectionName}`, 'Success', { id });
        alert("Deleted successfully!");
    } catch (error) {
        logAction(`Admin: Delete from ${collectionName}`, 'Error', { message: error.message });
        alert("Error deleting: " + error.message);
    }
};