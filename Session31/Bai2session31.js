let body = document.getElementById("body");
let h1 = document.getElementById("h1");
let p = document.getElementById("p");
let button = document.getElementById("button");
button.addEventListener("click", function(){
    body.classList.toggle("change-togge");
    h1.classList.toggle("change-togge");
    p.classList.toggle("change-togge");
})