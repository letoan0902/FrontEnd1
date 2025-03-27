let add = document.querySelector(".add");
let pendingTasks = document.querySelector("#pendingTasks");
let inProgressTasks = document.querySelector("#inProgressTasks");
let doneTasks = document.querySelector("#doneTasks");
let taskName = document.querySelector("#taskName");


let works = localStorage.getItem("works");
if(works){
    works = JSON.parse(works);
} else {
    works = [];
}

function render(){
    pendingTasks.innerHTML=``;
    inProgressTasks.innerHTML=``;
    doneTasks.innerHTML=``;
    works.forEach((element,index) => {
        let div = document.createElement("div");
        div.className = "work";
        if (element.status === "doneTasks") {
            div.innerHTML = `<p class="textWork">${element.textWork}</p>`;
        } else {
            div.innerHTML = `<p class="textWork">${element.textWork}</p>
                             <button class="next">chuyển tiếp</button>`;
            let next = div.querySelector(".next");
            next.addEventListener("click", function () {
                if (element.status === "pendingTasks") {
                    element.status = "inProgressTasks";
                } else if (element.status === "inProgressTasks") {
                    element.status = "doneTasks";
                }
                render();
            });
        }
        if(element.status=="pendingTasks"){
            pendingTasks.appendChild(div);
        } else if(element.status=="inProgressTasks"){
            inProgressTasks.appendChild(div);
        } else {
            doneTasks.appendChild(div);
        }
    });
    localStorage.setItem("works",JSON.stringify(works));
}



add.addEventListener("click",function(){
    let work = {
        textWork: taskName.value,
        status: "pendingTasks"
    }
    works.push(work);
    taskName.value = "";
    render();
});

render();

