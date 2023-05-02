// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL83k7hQlfWWYFsjV4qIqAwFyTNV3Csds",
  authDomain: "reactbikes.firebaseapp.com",
  databaseURL: "https://reactbikes-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactbikes",
  storageBucket: "reactbikes.appspot.com",
  messagingSenderId: "120470000752",
  appId: "1:120470000752:web:e3ce490552fcc96fe750b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;