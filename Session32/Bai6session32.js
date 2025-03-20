let p = document.getElementById("p");
let increase = document.getElementById("increase");
let degrease = document.getElementById("degrease");
let fontSize = 15;
increase.addEventListener("click",function(){
    fontSize += 1;
    p.style.fontSize =`${fontSize}px`; 
});
degrease.addEventListener("click",function(){
    fontSize -= 1;
    p.style.fontSize = `${fontSize}px`; 
});
