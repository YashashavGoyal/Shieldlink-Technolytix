// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ZVm6xE6JJ35y9_P_PIJM28WI2YAfeiI",
  authDomain: "bright-shark.firebaseapp.com",
  databaseURL: "https://bright-shark-default-rtdb.firebaseio.com",
  projectId: "bright-shark",
  storageBucket: "bright-shark.appspot.com",
  messagingSenderId: "132356090033",
  appId: "1:132356090033:web:009913014ec39f734f9a90",
  measurementId: "G-37BHSPBBYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);

