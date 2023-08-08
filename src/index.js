
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
  // console.log(snapshot.val())

  data = snapshot.val();
  update(data);
  // PopulateTable(data);
  window.data = data;
});


function update(data) {
  // counter will be the total number of scripts
  // every time a change is made to the database, iterate through all the scripts to update the table


  var final_data = {};
  var middle_data = {};
  for (var key in data) { // script name
    for (var sub_key in data[key]) { // Version
      for (var version in data[key][sub_key]) { // Unique version key
        // console.log(data[key][sub_key]);
        var temp = data[key][sub_key][version];
        // get the most recent record based on data
        if (JSON.stringify(middle_data) === JSON.stringify({})) {
          middle_data = Object.assign({}, temp);
          // console.log(middle_data)

        } else if(compareDates(temp.lastUpdated,middle_data.lastUpdated)) {
          middle_data = Object.assign({}, temp);
        }
      }

      // console.log(middle_data)
      final_data[key] = Object.assign({}, middle_data);
      middle_data = {};
    }
  }

  // console.log(final_data);
  PopulateTable(final_data);

}

function compareDates(d1, d2) {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();
  
  // console.log(d1, d2);
  // console.log(date1, date2);

  if (date1 < date2) {
    // console.log(`${d1} is less than ${d2}`);
    return false;
  } else if (date1 > date2) {
    // console.log(`${d1} is greater than ${d2}`);
    return true; 
  } else {
    console.log(`Both dates are equal`);
    // console.log(d1, d2);
  }
};
  

function PopulateTable(summary_data) {
  console.log(summary_data);

  var final_data = [];

  for (var key in summary_data) {
    // console.log();
    var mydata =
    {
      "description": summary_data[key].description,
      "emailed": summary_data[key].emailed,
      "lastran": summary_data[key].lastUpdated,
      "name": summary_data[key].name,
    }
  
    final_data.push(mydata);
  }

  // console.log(final_data);

  var $table = $('#ScriptSummary');
  $table.bootstrapTable('destroy');
  $(function () {
    $table.bootstrapTable({
        data: final_data,
    });
  });
  

}

function cellStyle(value, row, index) {
  var classes = [
    'bg-blue',
    'bg-green',
    'bg-orange',
    'bg-yellow',
    'bg-red'
  ]
  console.log("CellStyle")
  if (index % 2 === 0 && index / 2 < classes.length) {
    return {
      classes: classes[index / 2]
    }
  }
  if (value == "Failed") {
    return {
      classes: 'bg-red'
    }
  }
  return {
    css: {
      color: 'blue'
    }
  }
}
