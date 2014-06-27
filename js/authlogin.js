$(document).ready(function(){


	var chatRef = new Firebase('https://codehscore.firebaseio.com');
	var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
	  if (error) {
	    // an error occurred while attempting login
	    console.log(error);
	  } else if (user) {
	    // user authenticated with Firebase
	    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
	  } else {
	    // user is logged out
	  }
	});




	$('.login').on('click', function(){
		var userEmail = $('.userEmail').val();
		var userPassword = $('.userPassword').val();
		var rememberMe = false;
		if ($('#checkbox').is(":checked"))
		{	
 			rememberMe = true;
		}
		console.log(userEmail);
		
		auth.login('password', {
		email: userEmail,
		password: userPassword,
		rememberMe: rememberMe;
		});
		
	});
});