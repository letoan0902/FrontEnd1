let todoList = [
  {
    id: 1,
    task: "Hit the gym",
    completed: false,
  },
  {
    id: 2,
    task: "Pay bills",
    completed: true,
  },
  {
    id: 3,
    task: "Meet george",
    completed: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];

let ul = document.getElementById("myUL");

ul.innerHTML = "";
todoList.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = element.task;

  if (element.completed) {
    li.classList.add("checked");
  }

  li.addEventListener("click", function () {
    let task = todoList.find((value) => value.id === element.id);
    if (task) {
      task.completed = !task.completed;
      li.classList.toggle("checked");
    }
  });

  ul.appendChild(li);
});
