let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)").trim().split(",");
if(arr.length>10){
    alert("Nhập dưới 10 phần tử");
} else {
    let checkString = arr.filter((element) => +element%1!==0);
    if(checkString.length>0){
        alert("Dữ liệu không hợp lệ");
    } else {
        arr=arr.map(Number);
        let arrAfter = arr.map((element) => element**2).filter((element) => element%2==0);
        if(arrAfter.length>0){
            alert(arrAfter);
        } else {
            alert("Mảng không có phần tử nào");
        }
    }
}
