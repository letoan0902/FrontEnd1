let number = prompt("Nhập vào 5 số nguyên theo dạng  (1 2 3 4 5)");
let arr = number.split(" ");
let i;
let total = 0;
for(i=0;i<5;i++){
    if(+arr[i]%2!=0){
        total+= +arr[i];
    }
}
alert(total);
