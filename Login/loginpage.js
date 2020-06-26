
$( document ).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiszQtqQ82up58DVKGwwSlRYaiFTQzEsk",
    authDomain: "reconstruction-inc.firebaseapp.com",
    databaseURL: "https://reconstruction-inc.firebaseio.com",
    projectId: "reconstruction-inc",
    storageBucket: "reconstruction-inc.appspot.com",
    messagingSenderId: "1072545534960"
  };
  firebase.initializeApp(config);

  // Hovering popup (help)
  $("label").hover(function(){
    loginPopup(this.children[2].id); },
    function(){
    loginClose(this.children[2].id);
  });

  var rootRef = firebase.database().ref('User');
  var newKey;

  $('#log').click(function() {
  	var correctEmail = false;
  	var correctPW = false;

  	var email = $('#uname').val();
  	var paswd = $('#psw').val();

  	rootRef.orderByChild("Emails").equalTo(email).on('value', function(snapshot){
  		if (snapshot.exists() == false){
  			document.getElementById("wrong_psw").innerHTML = "<p>WRONG EMAIL!</p>";
  		}
  		else
  			correctEmail = true;
  	});

  	rootRef.orderByChild("Emails").equalTo(email).on("child_added", function(snapshot){
  		var solution = snapshot.val();
  		if (solution.Passwords != paswd){
  			document.getElementById("wrong_psw").innerHTML = "<p>WRONG PASSWORD!</p>";
  		}
  		else
        location.href = "../new_design/index.html";
  			//correctPW = true;
  	});

  //	if (correctEmail == true && correctPW == true)
  //		location.href = "../Main/main.html";

 	});
});


function loginPopup(specifier) {
  var popup = document.getElementById(specifier);
  popup.classList.toggle("show");
}

function loginClose(specifier) {
  var popup = document.getElementById(specifier);
  popup.classList.toggle("unshow");
}