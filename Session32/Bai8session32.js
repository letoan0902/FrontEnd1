let input = document.getElementById("input");
let add = document.getElementById("add");
let ul = document.getElementById("ul");

add.addEventListener("click",function(){
    if(input.value==""){
        alert("Không được để trống");
    } else {
        let text = input.value;
        let li = document.createElement("li");
        li.innerHTML=`<span class="text">${text}</span><span class="edit">Sửa</span><span class="close">x</span>`;
        ul.appendChild(li);
        input.value = "";
        let close = li.querySelector(".close");
        close.addEventListener("click",function(){
            if(confirm("Xác nhận xóa?")){
                li.classList.add("display");
            }
        });
        let edit = li.querySelector(".edit");
        edit.addEventListener("click",function(){
            let textOld = li.querySelector(".text");
            let textEdit = prompt("Nhập thông tin mới",textOld.textContent);
            if(textEdit!=null&&textEdit!=""){
                textOld.textContent = textEdit;
            }
        });
    }
});

function demo () {
        let text = "Làm bài tập 8";
        let li = document.createElement("li");
        li.innerHTML=`<span class="text">${text}</span><span class="edit">Sửa</span><span class="close">x</span>`;
        ul.appendChild(li);
        input.value = "";
        let close = li.querySelector(".close");
        close.addEventListener("click",function(){
            if(confirm("Xác nhận xóa?")){
                li.classList.add("display");
            }
        });
        let edit = li.querySelector(".edit");
        edit.addEventListener("click",function(){
            let textOld = li.querySelector(".text");
            let textEdit = prompt("Nhập thông tin mới",textOld.textContent);
            if(textEdit!=null&&textEdit!=""){
                textOld.textContent = textEdit;
            }
        });
}

demo();