
const firebaseConfig = {
  apiKey: "AIzaSyDZ9pveVqK92qsn4k1qcvSVYTrSLqp9RbA",
  authDomain: "vamosconversar-ce6f9.firebaseapp.com",
  projectId: "vamosconversar-ce6f9",
  storageBucket: "vamosconversar-ce6f9.appspot.com",
  messagingSenderId: "122244969685",
  appId: "1:122244969685:web:4c1ee9b9df48c6f395de5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

redirectToRoomName (Name)
{
  console.log (Name);
  localStorage.setItem ("roomName", name);
  window.location = "KwitterPage.html";
}

function logOut () {
localStorage.removeItem ("userName");
localStorage.removeItem ("roomName");
window.location = "Index.html";
}