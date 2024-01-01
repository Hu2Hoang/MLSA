
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { fetchSignInMethodsForEmail, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,sendPasswordResetEmail,updatePassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
	  // TODO: Add SDKs for Firebase products that you want to use
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDYk7erD2WOPTU99ShdnUIhlES8GE7mi1g",
    authDomain: "mlsa-fd0c1.firebaseapp.com",
    projectId: "mlsa-fd0c1",
    storageBucket: "mlsa-fd0c1.appspot.com",
    messagingSenderId: "513333555248",
    appId: "1:513333555248:web:96b5d85ac361403cce7df5",
    measurementId: "G-Y5JK3CSXLZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const analytics = getAnalytics(app);
  
  document.getElementById("ChangePass").addEventListener("click", function() {
    var newPass =  document.getElementById("newPass").value;
    var email = document.getElementById("email").value; // Assuming you have an input field with id "email"
    var password = document.getElementById("password1").value; // Assuming you have an input field with id "password"

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
        updatePassword(user, newPass)
        .then(() => {
            alert("Update password successfully!!!");
            // emailForgot= "";      
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Sai mật khẩu!!!");
    });
});
document.getElementById("logout").addEventListener("click", function() {
    signOut(auth)
    .then(() => {
        // Sign-out successful.
        window.location.replace('Home.html')
        alert("Logged out successfully");
    })
    .catch((error) => {
        // An error happened.
        console.log(error);
        alert("Error logging out");
    });
});
// window.login= function(e) {
//     e.preventDefault();
//     var obj = {
//       email: email.value,
//       password: password.value,
//     };
  
//     signInWithEmailAndPassword(auth, obj.email, obj.password)
//       .then(function (success) {
//         alert("logined Successfully")
//         var aaaa =  (success.user.uid);
//         localStorage.setItem("uid",aaaa)
//         console.log(aaaa)
        
        
        
//         window.location.replace('Home.html')
//        // localStorage.setItem(success,user,uid)
        
//       })
//       .catch(function (err) {
//         alert("login error"+err);
//       });
  
//     console.log(obj);
//   }