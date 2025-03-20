let button = document.getElementById("button");
let body = document.getElementById('body');
let check = 0;
let checkButton = document.createElement("p");
body.appendChild(checkButton);
checkButton.textContent = `Số lần bấm: ${check}`;
button.addEventListener("click", function(){
    check++;
    checkButton.textContent = `Số lần bấm: ${check}`;
});