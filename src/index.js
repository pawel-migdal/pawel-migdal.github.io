
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getDatabase, ref, child, get, onValue } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs1rLyOoMOvEomhIwtdVqu9PhOWfq0MHE",
  authDomain: "dashboard-test-4ff8e.firebaseapp.com",
  databaseURL: "https://dashboard-test-4ff8e-default-rtdb.firebaseio.com",
  projectId: "dashboard-test-4ff8e",
  storageBucket: "dashboard-test-4ff8e.appspot.com",
  messagingSenderId: "802722798473",
  appId: "1:802722798473:web:33de9d8fbdddc32047df58",
  measurementId: "G-Z9FTK26PHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

const value = ref(db, '/');
console.log(value)
onValue(value, (snapshot) => {
  console.log(snapshot.val())
});





// const signInButton = document.getElementById('signInBtn');
// signInButton.onclick = () => auth.signInWithPopup(provider);

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log('logged in')
//   } else {
//     console.log('logged out')
//   }
// });

