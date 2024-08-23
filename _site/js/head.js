function changeStar(){
    var star_class = document.getElementById("star").className
    if (star_class == "fa-regular fa-star fa-3x m-1 fa-spin accent")
        document.getElementById("star").className = "fas fa-star fa-3x m-1 fa-spin accent";
    else
        document.getElementById("star").className = "fa-regular fa-star fa-3x m-1 fa-spin accent"
}