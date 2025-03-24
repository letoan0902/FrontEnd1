
let employees = localStorage.getItem("employees");
if(employees){
    employees = JSON.parse(employees);
    console.log(employees);
} else{
    employees=[
        { id: 1, name: 'Nguyễn Văn A', position: 'Developer' },
        { id: 2, name: 'Trần Thị B', position: 'Designer' },
        { id: 3, name: 'Phạm Văn C', position: 'Project Manager' }
    ];
    localStorage.setItem("employees", JSON.stringify(employees));
}


function displayEmployees() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    employees.forEach((employee) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        tbody.appendChild(tr);
    });
    localStorage.setItem("employees", JSON.stringify(employees));
}


let button = document.getElementById("button")
button.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    if (name && position) {
        const newId = employees.length + 1;
        let newEmployee = {
            id: newId,
            name: name,
            position: position
        }
        employees.push(newEmployee);
        displayEmployees();;
        name.value = '';
        position.value = '';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
});

displayEmployees();