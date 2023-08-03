
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
var data = "";
onValue(value, (snapshot) => {
  console.log(snapshot.val())

  data = snapshot.val();
  update(data);
  // PopulateTable(data);
  window.data = data;
});


function update(data) {
  // counter will be the total number of scripts
  // every time a change is made to the database, iterate through all the scripts to update the table
  var counter = 0;
  data = {};
  for (var key in data) {
    for (var sub_key in data[key]) {
      for (var version in data[key][sub_key]) {
        console.log(data[key][sub_key]);
        var temp = data[key][sub_key][version];
        // get the most recent record based on data 
        if (data[date] > temp[date]) {
          data = temp;
        } 
        
      }
    }
  }
    

}

  

function PopulateTable(summary_data) {
  console.log(summary_data);

  var final_data = [];

  for (var key in summary_data) {
    var mydata =
      {
        "name": summary_data[key].name,
        "description": summary_data[key].description,
        "lastran": summary_data[key].lastran,
        "emailed": summary_data[key].emailed,
      }
    
    final_data.push(mydata);
  
  }

  console.log(final_data);

  var $table = $('#ScriptSummary');
  $table.bootstrapTable('destroy');
  $(function () {
    $table.bootstrapTable({
        data: final_data,
    });
  });
  

}





// const signInButton = document.getElementById('signInBtn');
// signInButton.onclick = () => auth.signInWithPopup(provider);

// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log('logged in')
//   } else {
//     console.log('logged out')
//   }
// });

