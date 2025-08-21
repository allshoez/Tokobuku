
// firebase.js (root folder, jangan masuk ke public)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAemOY8wxyBp6g8tdmrQLtekomChA0ej9Q",
  authDomain: "bukutoko-5fd1c.firebaseapp.com",
  projectId: "bukutoko-5fd1c",
  storageBucket: "bukutoko-5fd1c.firebasestorage.app",
  messagingSenderId: "474256261023",
  appId: "1:474256261023:web:f1a23f2ebdb4c7786ec7aa"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
