let addName = document.querySelector(".addName");
let showName = document.querySelector(".showName");
let input = document.querySelector(".input");
let save = document.querySelector(".save");
let change = document.querySelector(".change");
let headShow = document.querySelector(".headShow");

let nameAdd = localStorage.getItem("nameAdd");
if(nameAdd){
    nameAdd=JSON.parse(nameAdd);
} else {
    nameAdd="";
}
function render(){
    if(nameAdd==""){
        addName.classList.remove("display");
        showName.classList.add("display");
    } else {
        addName.classList.add("display");
        showName.classList.remove("display");
        headShow.textContent=`👋 Chào bạn, ${nameAdd}`;
    }
}

save.addEventListener("click",function(){
    nameAdd=input.value;
    input.value="";
    localStorage.setItem("nameAdd",JSON.stringify(nameAdd));
    render();
});

change.addEventListener("click",function(){
    nameAdd="";
    render();
})

render();
