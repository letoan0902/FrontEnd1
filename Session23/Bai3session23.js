let n = +prompt("Nhập số phần tử của mảng");
let arr=[];
let count =0;
if(n===0){
    alert("Mảng không có phần tử");
} else if (n<0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    arr = prompt("Nhập các phần tử, cách nhau bằng ,").split(",");
    for(let element of arr){
        if(+element < 0){
            count++;
        } 
    }
    alert(count);
}