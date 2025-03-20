let buttonIncreae = document.getElementById("increase");
let buttonDecreae = document.getElementById("decrease");
let divAfter = document.getElementById("divAfter");
let main = document.getElementById("main");
let percent = 0;
let opacity = 0.1 + (percent / 100) * 0.9;
buttonIncreae.addEventListener("click",function(){
    if(percent!==100){
        percent += 10;
        opacity = 0.1 + (percent / 100) * 0.9;
        divAfter.style.width = `${percent}%`;
        main.style.opacity = `${opacity}`;
    }
    if(percent==100){
        divAfter.style.borderTopRightRadius = "5px";
        divAfter.style.borderBottomRightRadius = "5px";
    }
});
buttonDecreae.addEventListener("click",function(){
    if(percent!==0){
        percent -= 10;
        opacity = 0.1 + (percent / 100) * 0.9;
        divAfter.style.width = `${percent}%`;
        main.style.opacity = `${opacity}`;
    }
});