let button = document.getElementById("button");
let opacity = document.getElementsByClassName("background-opacity");
let close = document.getElementsByClassName("close");
button.addEventListener("click",function(){
    opacity[0].classList.toggle("display");
});
close[0].addEventListener("click",function(){
    opacity[0].classList.toggle("display");
})
