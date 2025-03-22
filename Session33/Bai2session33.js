let textarea = document.getElementById("textarea");
let count = document.getElementById("count");
let check = document.getElementById("check");

check.addEventListener("click",function(){
    count.textContent = `${textarea.value.length} ký tự`;
});
