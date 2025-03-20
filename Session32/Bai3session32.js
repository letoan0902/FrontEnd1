let button = document.getElementById("button");
let input = document.getElementById("input");
let ol = document.getElementById("ol");
button.addEventListener("click",function(){
    let li = document.createElement("li");
    li.textContent = input.value;
    ol.appendChild(li);
    input.value= "";
})
