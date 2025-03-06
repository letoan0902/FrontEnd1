let arr = prompt("Nhập vào dãy số bất kỳ");
if(arr%1!=0){
    console.log("Dãy không hợp lệ");
} else {
    arr = arr.split("");
    arr.reverse();
    console.log(arr);
}