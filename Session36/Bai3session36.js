let main = document.querySelector(".main");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");
let violet = document.querySelector(".violet");

let colorMain = localStorage.getItem("colorMain");
if(colorMain){
    colorMain=JSON.parse(colorMain);
} else {
    colorMain="white";
}
function render(){
    localStorage.setItem("colorMain",JSON.stringify(colorMain));
    main.style.backgroundColor = colorMain;
}
red.addEventListener("click",function(){
    colorMain= "rgb(198, 12, 12)"
    render();
});
blue.addEventListener("click",function(){
    colorMain= "rgb(107, 177, 253)"
    render();
});
yellow.addEventListener("click",function(){
    colorMain= "rgb(255, 198, 66)"
    render();
});
violet.addEventListener("click",function(){
    colorMain= "rgb(233, 63, 233)"
    render();
});
render();