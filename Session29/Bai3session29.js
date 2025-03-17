let choice = 0;
let tom = [];
let monAnChoi = [];
let nuoc = [];
let dishs = [tom, monAnChoi, nuoc];
function addDishs() {
  let choiceCategory = +prompt(`Chọn danh mục
                        1. Tôm
                        2. Món Ăn Chơi
                        3. Nước
                        Lựa chọn của bạn: `);
  if (choiceCategory != 1 && choiceCategory != 2 && choiceCategory != 3) {
    alert("Lựa chọn không hợp lệ");
    return;
  }
  let nameDish = prompt("Nhập tên món ăn mới");
  let checkName = dishs[choiceCategory - 1].some((dish) => dish.name.toLowerCase() === nameDish.toLowerCase());
  if (checkName) {
    alert("Tên món ăn bị trùng");
    return;
  }
  let priceDish = +prompt("Nhập giá món ăn mới");
  let infoDish = prompt("Nhập mô tả");
  let newDish = {
    name: nameDish,
    price: priceDish,
    describe: infoDish,
  };
  dishs[choiceCategory - 1].push(newDish);
}
function showDishs() {
  let dishsList = "Danh sách danh mục và món ăn:\n";
  dishs.forEach((element) => {
    if(element == tom){
        dishsList+= "\nDanh mục: Tôm\n";
    } else if(element==monAnChoi){
        dishsList+= "\nDanh mục: Món Ăn Chơi\n"
    } else if(element==nuoc){
        dishsList+= "\nDanh mục: Nước\n"
    }
    element.forEach((value) => {
      dishsList += `Name: ${value.name}, Price: ${value.price}, Describe: ${value.describe}\n`;
    });
  });
  alert(dishsList);
}
function searchDishs() {
  let searchDish = prompt("Nhập tên món ăn: ");
  let showDish = dishs.map((element) => element.filter((value) => value.name.toLowerCase().includes(searchDish.toLowerCase())));
if (showDish.length == 0) {
  alert("Không tìm thấy");
  return;
}
let dishsList = "Danh sách tìm kiếm: \n";
showDish.forEach((element) => {
    if(element == tom){
        dishsList+= "\nDanh mục: Tôm\n";
    } else if(element==monAnChoi){
        dishsList+= "\nDanh mục: Món Ăn Chơi\n"
    } else if(element==nuoc){
        dishsList+= "\nDanh mục: Nước\n"
    }
  element.forEach((value) => {
    dishsList += `Name: ${value.name}, Price: ${value.price}, Describe: ${value.describe}\n`;
  });
});
alert(dishsList);
}
function updateDishs() {
  let searchDishUp = prompt("Nhập tên món ăn");
  let flag = 0;
  for (element of dishs) {
    for (value of element) {
      if (value.name.toLowerCase() === searchDishUp) {
        let newName = prompt("Nhập tên mới món ăn");
        let newPrice = +prompt("Nhập giá mới món ăn");
        let newInfo = prompt("Nhập mô tả mới");
        value.name = newName;
        value.price = newPrice;
        value.describe = newInfo;
        flag = 1;
      }
    }
  }
  if (flag == 0) {
    alert("Không tìm thấy món ăn");
    return;
  }
}
function deleteDishs() {
  let choiceCategory = +prompt(`Chọn danh mục
        1. Tôm
        2. Món Ăn Chơi
        3. Nước
        Lựa chọn của bạn: `);
  if (choiceCategory != 1 && choiceCategory != 2 && choiceCategory != 3) {
    alert("Lựa chọn không hợp lệ");
    return;
  }
  let deleteName = prompt("Nhập tên món ăn muốn xóa");
  let checkNameDe = dishs[choiceCategory - 1].find(
    (element) => element.name.toLowerCase() === deleteName.toLowerCase()
  );
  if (checkNameDe) {
    let indexDelete = dishs[choiceCategory - 1].findIndex(
      (element) => element.name.toLowerCase() === deleteName.toLowerCase()
    );
    dishs[choiceCategory - 1].splice(indexDelete, 1);
    alert("Xóa thành công");
  } else {
    alert("Không tìm thấy món ăn");
  }
}
while (choice != 6) {
  choice = +prompt(`---------NENU---------
        1. Thêm món ăn vào danh mục
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát
        Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      addDishs();
      break;
    case 2:
      deleteDishs();
      break;
    case 3:
      updateDishs();
      break;
    case 4:
      showDishs();
      break;
    case 5:
      searchDishs();
      break;
    case 6:
      break;
    default:
      alert(`Lựa chọn không hợp lệ, vui lòng nhập lại!`);
      break;
  }
}