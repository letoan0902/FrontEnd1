let darkMode = document.querySelector(".dark-mode-toggle");
let body = document.querySelector(".body");

let statusMain = localStorage.getItem("statusMain");
if(statusMain){
    statusMain=JSON.parse(statusMain);
} else {
    statusMain="light";
}

function render(){
    if(statusMain=="dark"){
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
    localStorage.setItem("statusMain",JSON.stringify(statusMain));
}
darkMode.addEventListener("click",function(){
    if(statusMain=="light"){
        statusMain="dark";
    } else {
        statusMain="light";
    }
    render();
});
render();