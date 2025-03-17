let choice = 0;
let contact = [];
function addContact() {
  let newId = +prompt("Nhập id");
  let checkId = contact.find((element) => element.id === newId);
  if (checkId) {
    alert("Id trùng với các id trước!");
    return;
  } else if (newId % 1 != 0) {
    alert("Id không hợp lệ");
    return;
  }
  let newName = prompt("Nhập tên");
  let newEmail = prompt("Nhập email");
  let newPhone = prompt("Nhập số điện thoại");
  let NewContact = {
    id: newId,
    name: newName,
    email: newEmail,
    phone: newPhone,
  };
  contact.push(NewContact);
}
function showContact() {
  let contactList = "Danh sách danh bạ:\n";
  contact.forEach((element) => {
    contactList += `Id: ${element.id}, Name: ${element.name}, Email: ${element.email}, Phone: ${element.phone}\n`;
  });
  alert(contactList);
}
function searchContact() {
  let searchPhone = prompt("Nhập số điện thoại: ");
  let showPhone = contact.filter((element) =>
    element.phone.includes(searchPhone)
  );
  if (showPhone.length == 0) {
    alert("Không tìm thấy");
    return;
  }
  let searchList = "Danh sách tìm kiếm:\n";
  showPhone.forEach((element) => {
    searchList += `Id: ${element.id}, Name: ${element.name}, Email: ${element.email}, Phone: ${element.phone}\n`;
  });
  alert(searchList);
}
function updateContact() {
  let updateId = +prompt("Nhập id");
  let checkIdUp = contact.find((element) => element.id === updateId);
  if (checkIdUp) {
    let newName = prompt("Nhập tên mới");
    let newEmail = prompt("Nhập email mới");
    let newPhone = prompt("Nhập số điện thoại mới");
    let indexUpdate = contact.findIndex((element) => element.id === updateId);
    contact[indexUpdate].name = newName;
    contact[indexUpdate].email = newEmail;
    contact[indexUpdate].phone = newPhone;
    alert("Đã cập nhật thành công");
  } else {
    alert("Không tìm thấy id");
  }
}
function deleteContact() {
  let deleteId = +prompt("Nhập id muốn xóa");
  let checkIdDe = contact.find((element) => element.id === deleteId);
  if (checkIdDe) {
    let indexDelete = contact.findIndex((element) => element.id === deleteId);
    contact.splice(indexDelete, 1);
    alert("Xóa thành công");
  } else {
    alert("Không tìm thấy id");
  }
}
while (choice != 6) {
  choice = +prompt(`---------NENU---------
        1. Thêm đối tượng Contact vào danh sách liên hệ
        2. Hiển thị danh sách danh bạ
        3. Tìm kiếm thông tin Contact theo số điện thoại
        4. Cập nhật thông tin Contact(name, email, phone) theo id
        5. Xóa đối tượng Contact khỏi danh sách danh bạ theo id
        6. Thoát
        Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      addContact();
      break;
    case 2:
      showContact();
      break;
    case 3:
      searchContact();
      break;
    case 4:
      updateContact();
      break;
    case 5:
      deleteContact();
      break;
    case 6:
      break;
    default:
      alert(`Lựa chọn không hợp lệ, vui lòng nhập lại!`);
      break;
  }
}
