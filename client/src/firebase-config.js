// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cI9tskZwhPd0gb7XkC054ACHlkZEwNA",
  authDomain: "food-ordering-e52ad.firebaseapp.com",
  projectId: "food-ordering-e52ad",
  storageBucket: "food-ordering-e52ad.appspot.com",
  messagingSenderId: "192096666376",
  appId: "1:192096666376:web:f4719a20b2dac6a88962bd",
  measurementId: "G-22KLHWL7PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
