let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)").trim().split(",");
if(arr[0]==""){
    alert("Mảng không có phần tử nào");
} else if(arr.length===1){
    alert("Dữ liệu không hợp lệ");
} else {
    let arrAfter = arr.filter((element) => (element.indexOf(" ") == -1 && element.indexOf("@") !== -1) );
    if(arrAfter.length>0){
        alert(arrAfter);
    } else {
        alert('Không có email nào thỏa mãn điều kiện');
    }
}