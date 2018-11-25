// Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyDLNDFhsfeAJii4zRMKs60Nxn8v2xEZUo8",
		    authDomain: "web-login-1fe9e.firebaseapp.com",
		    databaseURL: "https://web-login-1fe9e.firebaseio.com",
		    projectId: "web-login-1fe9e",
		    storageBucket: "web-login-1fe9e.appspot.com",
		    messagingSenderId: "858384282131"
		  };
		  firebase.initializeApp(config);

		 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
	window.location = './loggedin.html';

  } 
 
  
  });


var btn = document.getElementById('loginButton');

btn.addEventListener('click', function() {
	 window.alert("Identificador Conectado");
	signup();
	})
	
	function signup(){
	
	
	var userEmail = document.getElementById('inputEmail').value;
	var userPassword = document.getElementById('inputPassword').value;
	
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	   window.alert("Error: " + errorMessage);
	});
};
