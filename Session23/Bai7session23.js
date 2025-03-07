let n = +prompt("Nhập số phần tử của mảng");
let arr=[];

if(n===0){
    alert("Không có phần tử");
} else if (n<0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    arr = prompt("Nhập các phần tử, cách nhau bằng ,").split(",");
    let max = arr[0];
    let temp = max;
    for(let i=1;i<n;i++){
        if(arr[i]>max){
            temp=max;
            max=arr[i];
        }
    }
    alert(temp);
}