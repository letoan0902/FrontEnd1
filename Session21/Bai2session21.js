let number = prompt("Nhập vào 5 số nguyên theo dạng  (1 2 3 4 5)");
let arr = number.split(" ");
let i;
let even = 0;
for(i=0;i<5;i++){
    if(+arr[i]%2==0){
        even++;
    }
}
alert(`Số chẵn: ${even} \nSố lẻ: ` + +(5-even));
