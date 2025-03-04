let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
if(a%1===0&&b%1===0){
    alert(Math.pow(a,b));
} else {
    alert("Không hợp lệ");
}