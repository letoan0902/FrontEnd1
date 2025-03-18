let books = [
  {
    id: 1,
    name: "Doraemon tập 1",
    price: 20000,
    quantity: 20,
    category: "Doraemon",
  },
  {
    id: 2,
    name: "Doraemon tập 2",
    price: 20000,
    quantity: 20,
    category: "Doraemon",
  },
  {
    id: 3,
    name: "Doraemon tập 3",
    price: 20000,
    quantity: 20,
    category: "Doraemon",
  },
  {
    id: 4,
    name: "Doraemon tập 4",
    price: 20000,
    quantity: 20,
    category: "Doraemon",
  },
  {
    id: 5,
    name: "Conan tập 1",
    price: 25000,
    quantity: 20,
    category: "Conan",
  },
  {
    id: 6,
    name: "Conan tập 2",
    price: 25000,
    quantity: 20,
    category: "Conan",
  },
  {
    id: 7,
    name: "Conan tập 3",
    price: 25000,
    quantity: 20,
    category: "Conan",
  },
  {
    id: 8,
    name: "Conan tập 4",
    price: 25000,
    quantity: 20,
    category: "Conan",
  },
  {
    id: 9,
    name: "Naruto tập 1",
    price: 30000,
    quantity: 20,
    category: "Naruto",
  },
  {
    id: 10,
    name: "Naruto tập 2",
    price: 30000,
    quantity: 20,
    category: "Naruto",
  },
  {
    id: 11,
    name: "Naruto tập 3",
    price: 30000,
    quantity: 20,
    category: "Naruto",
  },
  {
    id: 12,
    name: "Naruto tập 4",
    price: 30000,
    quantity: 20,
    category: "Naruto",
  },
  {
    id: 13,
    name: "OnePiece tập 1",
    price: 15000,
    quantity: 20,
    category: "OnePiece",
  },
  {
    id: 14,
    name: "OnePiece tập 2",
    price: 15000,
    quantity: 20,
    category: "OnePiece",
  },
  {
    id: 15,
    name: "OnePiece tập 3",
    price: 15000,
    quantity: 20,
    category: "OnePiece",
  },
];
let cart = [];
let choice = 0;
while (choice != 8) {
  choice = +prompt(`-----------MENU-----------
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id.
4. Mua sách
5. Sắp xếp sách theo giá.
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.
Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      let categorys = books
        .map((book) => book.category)
        .filter((value, index, arr) => arr.indexOf(value) === index);
      let category = categorys.join("\n");
      let choose = prompt(
        `Lựa chọn thể loại:\n${category}\nThể loại muốn hiển thị: `
      );
      let results = "Danh sách:\n";
      let bookList = books.filter((element) =>
        element.category.toLowerCase().includes(choose.toLowerCase())
      );
      if (bookList.length == 0) {
        alert("Không tìm thấy thể loại");
        break;
      } else {
        bookList.forEach(
          (element) =>
            (results += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Quantity: ${element.quantity}\n`)
        );
      }
      alert(results);
      break;
    case 2:
      let id = +prompt("Nhập id:");
      if (id % 1 != 0) {
        alert("Nhập sai định dạng!");
        break;
      } else if (books.find((element) => element.id === id)) {
        let quantityNew = +prompt("Nhập số lượng sách muốn thêm");
        books.map((element) => {
          if (element.id === id) {
            element.quantity += quantityNew;
          }
        });
        break;
      }
      let name = prompt("Nhập tên sách");
      let price = +prompt("Nhập giá sách");
      let quantity = +prompt("Nhập số lượng");
      let categoryBook = prompt("Nhập thể loại");
      let newBook = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: categoryBook,
      };
      books.push(newBook);
      break;
    case 3:
      let searchBook = +prompt("Lựa chọn: \n1.Theo tên\n2.Theo id");
      if (searchBook == 1) {
        let searchName = prompt("Nhập tên");
        let results = "Danh sách\n";
        let searchList = books.filter((element) =>
          element.name.toLowerCase().includes(searchName.toLowerCase())
        );
        searchList.forEach(
          (element) =>
            (results += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Quantity: ${element.quantity}, Category: ${element.category}\n`)
        );
        alert(results);
      } else if (searchBook == 2) {
        let searchId = +prompt("Nhập id");
        let results = "Danh sách\n";
        let searchList = books.filter((element) => element.id === searchId);
        searchList.forEach(
          (element) =>
            (results += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Quantity: ${element.quantity}, Category: ${element.category}\n`)
        );
        alert(results);
      } else {
        alert("Lựa chọn không hợp lệ!");
      }
      break;
    case 4:
      let buyId = +prompt("Nhập id sách muốn mua");
      let flag = 0;
      for (element of books) {
        if (element.id === buyId) {
          flag = 1;
          let purchaseQuantity = +prompt("Nhập số lượng muốn mua:");
          if (purchaseQuantity % 1 != 0) {
            alert("Số lượng không hợp lệ");
            break;
          } else if (element.quantity < purchaseQuantity) {
            alert(
              `Số lượng trong kho chỉ còn ${element.quantity}, vui lòng nhập số lượng ít hơn`
            );
            break;
          } else {
            element.quantity = element.quantity - purchaseQuantity;
            let addCard = {
              id: element.id,
              name: element.name,
              price: element.price,
              quantity: purchaseQuantity,
              category: element.category,
            };
            cart.push(addCard);
            break;
          }
        }
      }
      if (flag == 0) {
        alert("Không tìm thấy id");
      }
      break;
    case 5:
      let sortBook = +prompt(`Lựa chọn
                1. Tăng dần
                2. Giảm dần`);
      if (sortBook == 1) {
        books = books.sort((a, b) => a.price - b.price);
        alert("Đã sắp xếp theo giá tăng dần!");
      } else if (sortBook == 2) {
        books = books.sort((a, b) => b.price - a.price);
        alert("Đã sắp xếp theo giá giảm dần!");
      } else {
        alert("Lựa chọn không hợp lệ");
      }
      break;
    case 6:
        let notif= "";
        let sumBook = 0;
        cart.forEach(element => sumBook += element.quantity);
            notif += `Tổng số lượng sách trong giỏ hàng là: ${sumBook}\n`;
        let totalPayment =0;
            cart.forEach(element => totalPayment += element.price*element.quantity);
            notif += ` Tổng số tiền trong giỏ hàng của bạn là: ${totalPayment}\n`;
        alert(notif);
      break;
    case 7:
        let totalBooks = 0;
        books.forEach(element => totalBooks += element.quantity);
            alert(`Tổng số lượng sách trong kho là: ${totalBooks}`);
      break;
    case 8:
      break;
    default:
      break;
  }
}
