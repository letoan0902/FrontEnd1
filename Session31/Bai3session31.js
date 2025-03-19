let body = document.getElementById("body");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

box1.addEventListener("click",function(){
    body.style.backgroundColor="green";
})
box2.addEventListener("click",function(){
    body.style.backgroundColor="red";
});
box3.addEventListener("click",function(){
    body.style.backgroundColor="violet";
})
