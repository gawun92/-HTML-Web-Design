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

  var rootRef = firebase.database().ref('User');
  var newKey;

  $('#signupbtn').click(function(){
    document.getElementById('noName').innerHTML = "";
    document.getElementById('noEmail').innerHTML = "";
    document.getElementById('noPW').innerHTML = "";
    document.getElementById('noCheck').innerHTML = "";
    var checkBox = document.getElementById('checking');
    var existing_email = false;
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#psw').val();
    var rp_pw = $('#rp_psw').val();

    rootRef.orderByChild("Emails").equalTo(email).on('value', function(snapshot){
      if (snapshot.exists())
        document.getElementById("noEmail").innerHTML = "<p>This Email Already Exists</p>";
      else
        existing_email = true;
    });

    if (name == '')
    {
      document.getElementById('noName').innerHTML = "<p>Please Enter Your Name</p>";
    }
    if (email == '')
    {
      document.getElementById('noEmail').innerHTML = "<p>Please Enter Your Email</p>";
    }
    if (password == '')
    {
      document.getElementById('noPW').innerHTML = "<p>Please Enter Your Password</p>";
    }
    if (password != rp_pw)
    {
      document.getElementById('mismatch').innerHTML = "<p>Please Enter Exactly Same Password</p>";
    }
    if (checkBox.checked == false)
    {
      document.getElementById('noCheck').innerHTML = "<p>Please Check the Box</p>"
    }

    if (name != '' && email != '' && password !='' && password == rp_pw 
      && existing_email == true && checkBox.checked == true){
    var newItem = rootRef.push();

    newItem.update({
      Names: name,
      Emails: email,
      Passwords: password
    });

    
  }
  if (name != '' && email != '' && password !='' && password == rp_pw 
      && existing_email == true && checkBox.checked == true)
    location.href = "SignUpComp.html";
  });
  
});