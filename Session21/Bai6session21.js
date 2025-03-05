let number = +prompt("Nhập vào số nguyên bất kỳ");
let i;
for(i=1;i <= (number/2) ;i++){
    if(number%i===0){
        document.write(`${i} ,`);
    }
}
document.write(number);
