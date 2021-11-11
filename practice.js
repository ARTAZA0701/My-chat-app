var firebaseConfig = {
    apiKey: "AIzaSyDuyRjwth0kh7DRHZWQPQ4e9SVS1jEzbLo",
    authDomain: "flipper-chatapp-37bf7.firebaseapp.com",
    databaseURL: "https://flipper-chatapp-37bf7-default-rtdb.firebaseio.com",
    projectId: "flipper-chatapp-37bf7",
    storageBucket: "flipper-chatapp-37bf7.appspot.com",
    messagingSenderId: "169045375369",
    appId: "1:169045375369:web:9145f9bf933eed0f6c4958"
  };
  var app = initializeApp(firebaseConfig);

 function addUser()
 {
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
     });
 }
