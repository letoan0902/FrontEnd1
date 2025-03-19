let employees = [
    {
        id: 1,
        name: "Join",
        age: 18,
        address: "New York"
    },
    {
        id: 2,
        name: "Mike",
        age: 22 ,
        address: "Canada"
    },
    {
        id: 3,
        name: "Linda",
        age: 19 ,
        address: "California"
    },
    {
        id: 4,
        name: "Peter",
        age: 25 ,
        address: "London"
    },
    {
        id: 5,
        name: "Tony",
        age: 17 ,
        address: "New York"
    },
];
let table = document.getElementById("table");
employees.forEach(element=>{
    let newTr = document.createElement("tr");
    table.appendChild(newTr);
    let newTd1 = document.createElement("td");
    newTd1.textContent = `${element.id}`;
    newTr.appendChild(newTd1);
    let newTd2 = document.createElement("td");
    newTd2.textContent = `${element.name}`;
    newTr.appendChild(newTd2);
    let newTd3 = document.createElement("td");
    newTd3.textContent = `${element.age}`;
    newTr.appendChild(newTd3);
    let newTd4 = document.createElement("td");
    newTd4.textContent = `${element.address}`;
    newTr.appendChild(newTd4);
})