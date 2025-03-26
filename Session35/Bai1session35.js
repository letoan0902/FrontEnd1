let input = document.getElementById("input");
let add = document.getElementById("add");
let ul = document.getElementById("ul");


let todoList=localStorage.getItem("todoList");
if(todoList){
    todoList=JSON.parse(todoList);
    console.log(todoList);
} else {
    todoList=[];
}

function render(){
    ul.innerHTML="";
    todoList.forEach((element,index)=>{
        let text = element;
        let li = document.createElement("li");
        li.innerHTML=`<span class="text">${text}</span><span class="edit">Sửa</span><span class="close">x</span>`;
        ul.appendChild(li);
        let close = li.querySelector(".close");
        close.addEventListener("click",function(){
            if(confirm("Xác nhận xóa?")){
                li.classList.add("display");
                todoList = todoList.filter(element => element !=text);
                localStorage.setItem("todoList",JSON.stringify(todoList));
            }
        });
        let edit = li.querySelector(".edit");
        edit.addEventListener("click",function(){
            let textOld = li.querySelector(".text");
            let textEdit = prompt("Nhập thông tin mới",textOld.textContent);
            if(textEdit!=null&&textEdit!=""){
                todoList[index] = textEdit;
                localStorage.setItem("todoList", JSON.stringify(todoList));
                render();
            }
        });
    });
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

add.addEventListener("click",function(){
    if(input.value==""){
        alert("Không được để trống");
    } else {
        let text = input.value;
        todoList.push(text);
        render();
        input.value="";
    }
});

render();