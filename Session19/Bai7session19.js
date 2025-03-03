let a = +prompt("Số thứ 1");
let b = +prompt("Số thứ 2");
let c = +prompt("Số thứ 3");
(isNaN(a)||isNaN(b)||isNaN(c)) ? alert("Nhập sai sữ liệu") : (a>b&&a>c) ? alert(`${a} lớn nhất`) : (b>a&&b>c) ? alert(`${b} lớn nhất`) : alert(`${c} lớn nhất`);;
