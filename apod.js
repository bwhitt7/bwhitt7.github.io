$(document).ready(function() {
  findAPOD();
});

function findAPOD(date=""){
  var req = new XMLHttpRequest();
  var url = "https://api.nasa.gov/planetary/apod?api_key=";
  var api_key = "xEJ0WheX967HwigGbbLqsPjW6gRoZhfoGl4sEhNV";

  req.open("GET", url + api_key +"&date=" +date, true);
  req.send();

  req.onreadystatechange =  function() {
    if(req.status == 200 && req.readyState == 4){
      var response = JSON.parse(req.responseText);
      document.getElementById("title").textContent = response.title;
      document.getElementById("date").textContent = response.date;
      document.body.style.backgroundImage = "url("+response.hdurl+")";
    }
  }
}


function changeBG(){
  let inputVal = document.getElementById("apoddate").value;
  // Displaying the value
  findAPOD(inputVal);
}