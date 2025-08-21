// Firebase Config Project lo
const firebaseConfig = {
  apiKey: "API_KEY_LO",
  authDomain: "NAMA_PROJECT.firebaseapp.com",
  projectId: "NAMA_PROJECT",
  storageBucket: "NAMA_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX"
};

// Init Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();