let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    },
];

let ul = document.getElementById("myUL");

function displayTodoList() {
    ul.innerHTML = "";
    todoList.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = `<span class="textContent">${element.task}</span><span class = "close">X</span>`
        if (element.completed) {
            li.classList.add("checked");
        }
        let close = li.querySelector(".close");
        close.addEventListener("click",function(){
            let indexClose = todoList.findIndex(value => value.id===element.id);
            todoList.splice(indexClose,1);
            displayTodoList();
        });
        li.addEventListener("click", function() {
            let task = todoList.find(value => value.id === element.id);
            if (task) {
                task.completed = !task.completed;
                li.classList.toggle("checked");
            }
        });

        ul.appendChild(li);
    });
}

displayTodoList();

let add = document.querySelector(".addBtn");
add.addEventListener("click", function() {
    let newItem = {
        id: todoList.length + 1,
        task: document.getElementById("myInput").value,
        completed: false,
    };
    todoList.push(newItem);
    document.getElementById("myInput").value = "";
    displayTodoList();
});
