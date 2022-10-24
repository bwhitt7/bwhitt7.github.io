var url = "https://api.nasa.gov/planetary/apod?api_key=xEJ0WheX967HwigGbbLqsPjW6gRoZhfoGl4sEhNV";

var req = new XMLHttpRequest();

req.open("GET", url);
req.send();

req.addEventListener("load", function(){
    if( req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("pic").textContent = response.hdurl;
        document.getElementById("explanation").textContent = response.explanation;
        document.getElementById('content').style.backgroundImage = "url("+response.hdurl+")"
    }
})

