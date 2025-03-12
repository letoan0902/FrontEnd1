let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)").trim().split(",");
if(arr[0]==""){
    alert("Mảng không có phần tử nào");
} else if(arr.length===1){
    alert("Dữ liệu không hợp lệ");
} else {
    let arrAfter = arr.map((element) => {
        let arrMap= element.split("-");
        let temp=arrMap[0];
        arrMap[0]=arrMap[2];
        arrMap[2]=temp;
        element = arrMap.join("/");
        return element;
    })
    if(arrAfter.length>0){
        alert(arrAfter);
    } else {
        alert('Dữ liệu không hợp lệ');
    }
}