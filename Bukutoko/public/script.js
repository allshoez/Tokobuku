// Import Firebase SDK v9+
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Config lo dari Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAemOY8wxyBp6g8tdmrQLtekomChA0ej9Q",
  authDomain: "bukutoko-5fd1c.firebaseapp.com",
  projectId: "bukutoko-5fd1c",
  storageBucket: "bukutoko-5fd1c.firebasestorage.app",
  messagingSenderId: "474256261023",
  appId: "1:474256261023:web:f1a23f2ebdb4c7786ec7aa"
};
// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);