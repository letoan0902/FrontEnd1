let products = [];
let choice =0;
function addProduct() {
  let newId = +prompt("Nhập id");
  let checkId = products.find((element) => element.id === newId);
  if (checkId) {
    alert("Id trùng với các id trước!");
    return;
  } else if (newId % 1 != 0) {
    alert("Id không hợp lệ");
    return;
  }
  let newName = prompt("Nhập tên");
  let newPrice = prompt("Nhập giá");
  let newCategory = prompt("Nhập danh mục sản phẩm");
  let newQuantity = +prompt("Nhập số lượng sản phẩm");
  if(newQuantity<0 || newQuantity%1!=0){
    alert("Số lượng sản phẩm không hợp lệ!");
    return;
  }
  let NewProduct = {
    id: newId,
    name: newName,
    price: newPrice,
    category: newCategory,
    quantity: newQuantity
  };
  products.push(NewProduct);
}
function showProduct() {
  let productList = "Danh sách sản phẩm:\n";
  products.forEach((element) => {
    productList += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Category: ${element.category}, Quantity: ${element.quantity}\n`;
  });
  alert(productList);
}
function searchProduct() {
  let searchId = +prompt("Nhập id: ");
  let showProduct = products.filter((element) => element.id === searchId );
  if (showProduct.length == 0) {
    alert("Không tìm thấy");
    return;
  }
  let searchList = "Danh sách tìm kiếm:\n";
  showProduct.forEach((element) => {
    searchList += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Category: ${element.category}, Quantity: ${element.quantity}\n`;
  });
  alert(searchList);
}
function updateProduct() {
  let updateId = +prompt("Nhập id");
  let checkIdUp = products.find((element) => element.id === updateId);
  if (checkIdUp) {
    let newName = prompt("Nhập tên mới");
    let newPrice = prompt("Nhập Price mới");
    let newCategory = prompt("Nhập danh mục sản phẩm mới");
    let newQuantity = +prompt("Nhập số lượng mới");
    let indexUpdate = products.findIndex((element) => element.id === updateId);
    products[indexUpdate].name = newName;
    products[indexUpdate].price = newPrice;
    products[indexUpdate].category = newCategory;
    products[indexUpdate].quantity = newQuantity;
    alert("Đã cập nhật thành công");
  } else {
    alert("Không tìm thấy id");
  }
}
function deleteProduct() {
  let deleteId = +prompt("Nhập id muốn xóa");
  let checkIdDe = products.find((element) => element.id === deleteId);
  if (checkIdDe) {
    let indexDelete = products.findIndex((element) => element.id === deleteId);
    products.splice(indexDelete, 1);
    alert("Xóa thành công");
  } else {
    alert("Không tìm thấy id");
  }
}
function filterProduct(){
    let priceRange = prompt("Nhập khoảng giá cách nhau bằng dấu phẩy (,), từ nhỏ đến lớn").split(",").map(Number);
    if(priceRange.length!=2|| priceRange.some(isNaN)){
        alert("Khoảng giá không hợp lệ!");
        return;
    }
    let filterList = products.filter((element) => +element.price>priceRange[0]&&+element.price<priceRange[1]);
    if (filterList.length === 0) {
        alert("Không có sản phẩm nào trong khoảng giá này.");
        return;
    }
    let resultList = "Danh sách:\n";
    filterList.forEach((element) => {
    resultList += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Category: ${element.category}, Quantity: ${element.quantity}\n`;
  });
  alert(resultList);
}
while (choice != 7) {
  choice = +prompt(`---------MENU---------
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo id.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát
        Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      showProduct();
      break;
    case 3:
      searchProduct();
      break;
    case 4:
      updateProduct();
      break;
    case 5:
      deleteProduct();
      break;
    case 6:
    filterProduct();
      break;
    case 7:
        break;
    default:
      alert(`Lựa chọn không hợp lệ, vui lòng nhập lại!`);
      break;
  }
}
