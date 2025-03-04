let str = prompt("Nhập chuỗi").trim();
let i;
let flag=0;
let array = str.split(" ");
let search = prompt("Nhập từ cần tìm kiếm");
for(i=0;i<array.length;i++){
    if(array[i]===search){
        alert("Tồn tại từ cần tìm kiếm");
        flag=1;
    }
}
if(flag===0){
    alert("Không tồn tại từ cần tìm kiếm");
}