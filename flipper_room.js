var firebaseConfig = {
      apiKey: "AIzaSyDuyRjwth0kh7DRHZWQPQ4e9SVS1jEzbLo",
      authDomain: "flipper-chatapp-37bf7.firebaseapp.com",
      databaseURL: "https://flipper-chatapp-37bf7-default-rtdb.firebaseio.com",
      projectId: "flipper-chatapp-37bf7",
      storageBucket: "flipper-chatapp-37bf7.appspot.com",
      messagingSenderId: "169045375369",
      appId: "1:169045375369:web:9145f9bf933eed0f6c4958"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "WELCOME "+ user_name;
  
    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "flipper_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "flipper_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "flipper_login.html";
}
