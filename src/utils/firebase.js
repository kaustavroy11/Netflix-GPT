// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1OzeA0DEPmNYUa3lIEEf9rza6CIwLoB4",
  authDomain: "netflixgpt-25833.firebaseapp.com",
  projectId: "netflixgpt-25833",
  storageBucket: "netflixgpt-25833.firebasestorage.app",
  messagingSenderId: "278923808103",
  appId: "1:278923808103:web:9d6e673753bfead71173c2",
  measurementId: "G-3SWT2JBC2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
