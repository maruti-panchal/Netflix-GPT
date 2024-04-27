// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOoxWiDrei8vNQWMf4WRs5DxFh5EBZUOs",
  authDomain: "netflixgpt-272d2.firebaseapp.com",
  projectId: "netflixgpt-272d2",
  storageBucket: "netflixgpt-272d2.appspot.com",
  messagingSenderId: "551907583836",
  appId: "1:551907583836:web:9cd31a51930b1ef6064399",
  measurementId: "G-E48RL4JYPB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
