let arr = prompt("Nhập các giá trị của mảng cách nhau bằng dấu phẩy (,)").trim().split(",");
minElement(arr);
function minElement(arr){
    let min = Math.min(...arr);
    if(min%1!=0){
        alert("Giá trị không hợp lệ");
    } else if (arr[0]==""){
        alert("Mảng không chứ phần tử");
    } else {
        alert(`Phần tử nhỏ nhất trong mảng là: ${min}`);
    }
}