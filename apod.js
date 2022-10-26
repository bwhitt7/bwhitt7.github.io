
//jquery, once page loads, send HTTP request to get APOD data
$(document).ready(function() {
    findAPOD();
});

//find APOD. use date parameter (empty by default to get current date) for picking out the date
function findAPOD(date="", apod="astropix"){
    var req = new XMLHttpRequest(); //start HTTP request
    const url = "https://api.nasa.gov/planetary/apod?api_key="; //url of APOD nasa API
    const api_key = "xEJ0WheX967HwigGbbLqsPjW6gRoZhfoGl4sEhNV"; //current API key
    const default_bg = "https://astronomynow.com/wp-content/uploads/2015/02/1200px-PIA02863_-_Jupiter_surface_motion_animation.gif"; //default bg when picture is not found


    req.open("GET", url + api_key +"&date=" +date, true); //open HTTP request with composite URL
    req.send(); //send the request

    //if request goes through
    req.onreadystatechange =  function() {
        if(req.status == 200 && req.readyState == 4){ //these numbers mean that the request was successful

            var response = JSON.parse(req.responseText); //parse through JSON of page

            console.log(response);
            document.getElementById("title").textContent = response.title;  //put title info into text of #title
            document.getElementById("date").textContent = response.date;    //date into text of #date
            document.body.style.backgroundImage = "url("+response.hdurl+")"; //hd image into background of body

            document.getElementById("piclink").href = "https://apod.nasa.gov/apod/"+apod+".html";       //link to hd image into link of #piclink

            
            document.getElementById("exp").textContent = "\""+response.explanation+"\" - APOD"; //explaination into text of #exp


            //check copyright
            if (response.copyright === "" || response.copyright === undefined) { //if copyright is empty or undefined
                document.getElementById("copyright").textContent = ""; //dont include it
            }
            else { //otherwise, include it (using innerhtml since you can use tags)
                document.getElementById("copyright").innerHTML = ",  <i class='fa-regular fa-copyright'></i> "+response.copyright+"";
            }

            //check media type of image
            if (response.media_type === "image") { //if image, hide video disclaimer
                $("#vid").hide();
            }
            else { //if not image, show disclaimer, display default bg, and make info link go to the url instead
                $("#vid").show();
                document.body.style.backgroundImage = "url("+default_bg+")";
            }
        }
        else if (req.status == 404 && req.readyState == 4)
            alert("No APOD for this date.")
    }
}

//function called by date button
//calls find APOD function and passes on the date
function changeBG(){
    let date = document.getElementById("apoddate").value; //get value from date input
    console.log(date);

    var newdate = "ap"+date.substring(2,4) + date.substring(5,7) + date.substring(8,10);

    console.log(newdate);
    findAPOD(date, newdate);
}