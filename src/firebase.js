import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-Tp-s6Rwpee1DkXm26DBvkPqMYE4IqGw",
  authDomain: "new-abbascuss.firebaseapp.com",
  projectId: "new-abbascuss",
  storageBucket: "new-abbascuss.firebasestorage.app",
  messagingSenderId: "941478316109",
  appId: "1:941478316109:web:14d15d7fe6d25d40b37404",
  measurementId: "G-V1ENZZYCXJ"
};

// Validate individual config values
const requiredFields = ['apiKey', 'authDomain', 'projectId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field]);

if (missingFields.length > 0) {
  throw new Error(`Missing required Firebase configuration: ${missingFields.join(', ')}`);
}

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window === 'undefined' ? null : getAnalytics(app);