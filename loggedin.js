


var user = firebase.auth().currentUser;

if (user == null) {
window.alert("User Equals NULL")
}
 
 var email = user.email;
 var emailVerified = user.emailVerified;
 var uid = user.uid;  


    	
    				  




var logOut = document.getElementById('logOut');

logOut.addEventListener('click', function() {
	logout();
	});
	
	function logout(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  window.location = './index.html';
}).catch(function(error) {
  // An error happened.
});
};


