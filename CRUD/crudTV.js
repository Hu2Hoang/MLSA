
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { fetchSignInMethodsForEmail, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,sendPasswordResetEmail,updatePassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
	  // TODO: Add SDKs for Firebase products that you want to use
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig={
    apiKey: "AIzaSyDYk7erD2WOPTU99ShdnUIhlES8GE7mi1g",
    authDomain: "mlsa-fd0c1.firebaseapp.com",
    databaseURL: "https://mlsa-fd0c1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mlsa-fd0c1",
    storageBucket: "mlsa-fd0c1.appspot.com",
    messagingSenderId: "513333555248",
    appId: "1:513333555248:web:96b5d85ac361403cce7df5",
    measurementId: "G-Y5JK3CSXLZ"
  };
  firebase.initializeApp(firebaseConfig);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const analytics = getAnalytics(app);
  

document.getElementById('addRecordButton').addEventListener('click', function() {
    // Code to create a new record in Firebase
    var Name = document.getElementById('email').value;
    var Date = document.getElementById('Date').value;
    var Phone = document.getElementById('Phone').value;
    var Email = document.getElementById('Email').value;
    var Rank = document.getElementById('ThanhTuu').value;
    var Avatar = "https://firebasestorage.googleapis.com/v0/b/mlsa-fd0c1.appspot.com/o/LP.jpeg?alt=media&token=c28d9c12-6f54-491e-bcf8-9d760c4c6a6d";
    var Intro = document.getElementById('Intro').value;
    var HocVan = document.getElementById('Learn').value
    var DiaChi = document.getElementById('Country').value
    var ThoiGianThamgia = document.getElementById('Time').value
    var Password = document.getElementById('password').value;
    var newRecord = firebase.database().ref('user').push();

    // Set the data for the new record
    
    newRecord.set({
        Name: Name,
        Date: Date,
        Phone: Phone,
        Email: Email,
        Rank: Rank,
        Avatar: Avatar,
        Intro: Intro,
        ThoiGianThamgia: ThoiGianThamgia,
        HocVan: HocVan,
        DiaChi: DiaChi,
    });
    createUserWithEmailAndPassword(auth, Email, Password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert("Registration successfully!!");
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(errorMessage);
		    alert(error);
		  });		  
    alert("Thêm thành công!!!");
    window.location.replace('../Admin/Page-2 copy.html')
 
    // Refresh the table
   
});