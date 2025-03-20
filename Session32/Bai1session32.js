let button = document.getElementById("button");
let body = document.getElementById('body');
button.addEventListener("click", function(){
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    body.style.backgroundColor = `rgb(${a},${b},${c})`;
});