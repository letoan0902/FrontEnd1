let students = [];
let choice = 0;
while (choice != 5) {
  choice = +prompt(`-------MENU------
        1. Nhập sanh sách sinh viên
        2. Hiển thị danh sách sinh viên
        3. Tìm sinh viên theo tên
        4. Xóa sinh viên khỏi danh sách
        5. Thoát
        Lựa chọn của bạn là: `);
  switch (choice) {
    case 1:
      students = prompt(
        `Nhập tên đầy đủ của từng sinh viên cách nhau bởi dấu phẩy (,)`
      )
        .trim()
        .split(",");
      break;
    case 2:
      showStudents(students);
      break;
    case 3:
      findName = prompt(`Nhập tên muốn tìm (,)`).trim();
      findStudents(findName, students);
      break;
    case 4:
      findName = prompt(`Nhập tên muốn xóa (,)`).trim();
      deleteStudent(findName, students);
      break;
    case 5:
      break;
    default:
      alert("Nhập sai");
      break;
  }
}

function showStudents(students) {
  if (students.length === 0) {
    alert("Danh sách sinh viên trống!");
  } else {
    alert("Danh sách sinh viên:\n" + students.join("\n"));
  }
}
function findStudents(findName, students) {
  let fullName = students.find((fullName) => fullName.includes(`${findName}`));
  if (fullName) {
    alert(`Tìm thấy sinh viên: ${fullName}`);
  } else {
    alert("Không tìm thấy sinh viên!");
  }
}
function deleteStudent(findName, students) {
  let fullName = students.find((fullName) => fullName.includes(`${findName}`));
  if (fullName) {
    let choose = +prompt(` Bạn có chắc chắn muốn xóa tên ${fullName} không?\n1. Có\n2. Không`);
    if (choose == 1) {
      students.splice(students.indexOf(fullName), 1);
    }
  } else {
    alert("Không tìm thấy tên sinh viên muốn xóa");
  }
}
