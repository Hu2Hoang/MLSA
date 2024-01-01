
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

document.getElementById("signin").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    //   alert(user.email+" Login successfully!!!");
      window.location.replace('Home.html')
    //   document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("Tài khoản/mật khẩu không đúng!!!");
    });		  		  
});
document.getElementById("forgotPass").addEventListener("click", function() {
    var emailForgot =  document.getElementById("emailForgot").value;
   

    sendPasswordResetEmail(auth, emailForgot)
    .then(() => {
        emailForgot= "";      
       alert("Vui lòng check email: "+user.email+" để lấy lại mật khẩu!!!");
      window.location.replace('Home.html')
    //   document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      swal("Vui lòng nhập đúng email!!! ");
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