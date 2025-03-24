let input = document.getElementById("input");
let add = document.getElementById("add");
let ul = document.getElementById("ul");

let todoList = localStorage.getItem("todoList");
if(todoList){
    todoList = JSON.parse(todoList);
    console.log(todoList);
} else{
    todoList=[];
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

todoList.forEach(element => {
    let text = element;
    let li = document.createElement("li");
    li.innerHTML=`<span class="text">${text}</span><span class="close">x</span>`;
    ul.appendChild(li);
    let close = li.querySelector(".close");
    close.addEventListener("click",function(){
        if(confirm("Xác nhận xóa?")){
            li.classList.add("display");
            todoList = todoList.filter(item => item !== text);
            console.log(todoList);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        }
    });
});

add.addEventListener("click",function(){
    if(input.value==""){
        alert("Không được để trống");
    } else {
        let text = input.value;
        let li = document.createElement("li");
        li.innerHTML=`<span class="text">${text}</span><span class="close">x</span>`;
        ul.appendChild(li);
        todoList.push(text);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        input.value = "";
        let close = li.querySelector(".close");
        close.addEventListener("click",function(){
            if(confirm("Xác nhận xóa?")){
                li.classList.add("display");
                todoList = todoList.filter(item => item !== text);
                localStorage.setItem("todoList", JSON.stringify(todoList));
            }
        });
    }
});