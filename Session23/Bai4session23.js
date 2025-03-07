let n = +prompt("Nhập số phần tử của mảng");
let arr=[];
let count='';
if(n===0){
    alert("Không có ký tự số");
} else if (n<0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    arr = prompt("Nhập các phần tử, cách nhau bằng ,").split(",");
    for(let element of arr){
        if(+element%1==0){
            count += " " + element;
        } 
    }
    alert(count);
}