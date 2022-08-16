// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsWdGkX4ddIDOTcAQz30dAvfAqgwl-nUo",
  authDomain: "chat-app-ayush13.firebaseapp.com",
  projectId: "chat-app-ayush13",
  storageBucket: "chat-app-ayush13.appspot.com",
  messagingSenderId: "548551724666",
  appId: "1:548551724666:web:8652bd0e7f99b7fc2775c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);