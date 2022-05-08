import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLCD5HdDlBBqcARXoQ0ZyG5EWdPewsuLw",
  authDomain: "feed-and-back.firebaseapp.com",
  projectId: "feed-and-back",
  storageBucket: "feed-and-back.appspot.com",
  messagingSenderId: "66219640626",
  appId: "1:66219640626:web:d98f9f0545fb06d540392b",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
