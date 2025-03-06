let numbers=[1,2,3,1,3,2,3,4,5,2];
let searchNumber = +prompt("Nhập số muốn tìm");
let count = 0;
for (let element of numbers){
    if(element==searchNumber){
        count++;
    }
}
if(count==0){
    console.log(`Số ${searchNumber} không tồn tại trong mảng`);
} else {
    console.log(`Số ${searchNumber} xuất hiện ${count} lần trong mảng`);
}