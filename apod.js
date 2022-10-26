$(document).ready(function() {
  findAPOD();
});

function findAPOD(date=""){
  var req = new XMLHttpRequest();
  var url = "https://api.nasa.gov/planetary/apod?api_key=";
  var api_key = "xEJ0WheX967HwigGbbLqsPjW6gRoZhfoGl4sEhNV";
  var default_bg = "https://astronomynow.com/wp-content/uploads/2015/02/1200px-PIA02863_-_Jupiter_surface_motion_animation.gif";

  req.open("GET", url + api_key +"&date=" +date, true);
  req.send();

  req.onreadystatechange =  function() {
    if(req.status == 200 && req.readyState == 4){
      var response = JSON.parse(req.responseText);
      document.getElementById("title").textContent = response.title;
      document.getElementById("date").textContent = response.date;
      document.body.style.backgroundImage = "url("+response.hdurl+")";
      document.getElementById("piclink").href = response.hdurl;
      document.getElementById("exp").textContent = "\""+response.explanation+"\" - APOD";


      if (response.copyright === "" || response.copyright === undefined)
        document.getElementById("copyright").textContent = "";
      else 
        document.getElementById("copyright").innerHTML = ",  <i class='fa-regular fa-copyright'></i> "+response.copyright+"";


      if (response.media_type === "image"){
        $("#vid").hide();
      }
      else{
        $("#vid").show();
        document.body.style.backgroundImage = "url("+default_bg+")";
        document.getElementById("piclink").href = response.url;
      }
    }
  }
}


function changeBG(){
  let inputVal = document.getElementById("apoddate").value;
  findAPOD(inputVal);
}