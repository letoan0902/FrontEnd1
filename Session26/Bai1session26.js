let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)").trim().split(",");
let checkString = arr.filter((element) => +element%1!==0);
if(checkString.length>0){
    alert("Dữ liệu không hợp lệ");
} else {
    let arrAfter = arr.filter((element) => +element >= 10);
    if(arrAfter.length>0){
        alert(arrAfter);
    } else {
        alert("Mảng không có phần tử nào");
    }
}