// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIBeQuJrynMDsYnzmxJHLurpjIaAqFf8U",
  authDomain: "nareshflixgpt.firebaseapp.com",
  projectId: "nareshflixgpt",
  storageBucket: "nareshflixgpt.firebasestorage.app",
  messagingSenderId: "1061677680394",
  appId: "1:1061677680394:web:649297340aeaab9570dcf3",
  measurementId: "G-2NLRHPVW8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();