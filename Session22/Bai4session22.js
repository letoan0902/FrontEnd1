let arr = prompt("Nhập vào dãy số bất kỳ");
if(arr%1!=0){
    console.log("Dãy không hợp lệ");
} else {
    arr = arr.split("");
    arr.sort();
    arr.reverse();
    console.log("Số lớn nhất có trong dãy là: ", arr[0]);
}