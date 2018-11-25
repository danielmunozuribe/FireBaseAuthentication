

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert("User Signed In.");

    var user = firebase.auth().currentUser;
	var name, email, photoUrl, uid, emailVerified;

	if (user != null) {
  	name = user.displayName;
  	email = user.email;
  	photoUrl = user.photoURL;
  	emailVerified = user.emailVerified;
  	uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
                    window.alert("User email: " + email + "Verified?: " + emailVerified);
}
  } 
 
  
  });







var btn = document.getElementById('loginButton');

btn.addEventListener('click', function() {
	login();
	})
	
	function login(){
	
	
	var userEmail = document.getElementById('inputEmail').value;
	var userPassword = document.getElementById('inputPassword').value;
	
	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
 	// Handle Errors here.
 	var errorCode = error.code;
 	var errorMessage = error.message;

$("#alertaLogin").show("fast");

setTimeout(function() { $("#alertaLogin").hide("fast"); }, 5000);


});
}







