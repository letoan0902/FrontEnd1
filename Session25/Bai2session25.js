let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
if(a%1!==0||b%1!==0){
    alert("Dữ liệu không hợp lệ");
} else {
    someElement(a,b);
}
function someElement(a,b){
    let total = a+b;
    alert(total);
}