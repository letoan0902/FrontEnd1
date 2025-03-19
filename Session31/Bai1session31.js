let h1 = document.getElementById("h1");
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
button1.addEventListener("click", function(){
    h1.style.visibility = "hidden";
});
button2.addEventListener("click",function(){
    h1.style.visibility = "visible";
})