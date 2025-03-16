let employees = [];

function addEmployee(id, name, position, salary) {
  let employee = {
    id: id,
    name: name,
    position: position,
    salary: salary,
  };
  employees.push(employee);
  alert("Nhân viên đã được thêm thành công!");
}
function removeEmployee(id) {
  let index = employees.findIndex((element) => element.id === id);
  if (index !== -1) {
    let deleteEm = employees[index];
    employees.splice(index, 1);
    alert(`Nhân viên ${deleteEm.name} đã bị xóa.`);
  } else {
    alert("Không tìm thấy nhân viên với ID này.");
  }
}
function updateSalary(id, newSalary) {
  let employee = employees.find((element) => element.id === id);
  if (employee) {
    employee.salary = newSalary;
    alert(`Mức lương của nhân viên ${employee.name} đã được cập nhật.`);
  } else {
    alert("Không tìm thấy nhân viên với ID này.");
  }
}
function searchEmployee(name) {
  let result = employees.filter((element) =>
    element.name.toLowerCase().includes(name.toLowerCase())
  );
  if (result.length > 0) {
    let employeeList = "Danh sách nhân viên tìm thấy:\n";
    result.forEach((element) => {
      employeeList += `ID: ${element.id}, Name: ${element.name}, Position: ${element.position}, Salary: ${element.salary}\n`;
    });
    alert(employeeList);
  } else {
    alert("Không tìm thấy nhân viên với tên này.");
  }
}

let choice;
do {
  choice = prompt(
    `------ MENU ------ 
            1. Thêm nhân viên mới
            2. Xóa nhân viên theo ID 
            3. Cập nhật mức lương nhân viên theo ID 
            4. Tìm kiếm nhân viên theo tên 
            5. Thoát 
            Chọn chức năng (1-5):`
  );
  switch (choice) {
    case "1":
      let id = prompt("Nhập ID nhân viên:");
      let name = prompt("Nhập tên nhân viên:");
      let position = prompt("Nhập vị trí công việc:");
      let salary = prompt("Nhập mức lương nhân viên:");
      addEmployee(id, name, position, salary);
      break;
    case "2":
      let removeId = prompt("Nhập ID nhân viên cần xóa:");
      removeEmployee(removeId);
      break;
    case "3":
      let updateId = prompt("Nhập ID nhân viên cần cập nhật mức lương:");
      let newSalary = prompt("Nhập mức lương mới:");
      updateSalary(updateId, newSalary);
      break;
    case "4":
      let searchName = prompt("Nhập tên nhân viên để tìm kiếm:");
      searchEmployee(searchName);
      break;
    case "5":
      break;
    default:
      alert("Chức năng không hợp lệ, vui lòng chọn lại.");
  }
} while (choice !== "5");
