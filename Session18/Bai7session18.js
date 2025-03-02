let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let operation = prompt("Nhập phép tính");
let result = "";
if (operation==="+"){
    result = a + b;
} else if (operation==="-"){
    result = a - b;
} else if (operation==="*"){
    result = a * b;
}else if (operation==="/"){
    result = a / b;
} else {
    alert("Nhap khong dung dinh dang");
}
alert(`a ${operation} b = ${result}`);