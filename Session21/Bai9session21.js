let number = +prompt("Nhập số");
let i;
flag=0;
if(number/1>0){
    for(i=2;i<number/2;i++){
        if(number%i==0){
            flag=1;
        }
    }
} else {
    alert("Không hợp lệ");
}
if(flag===0){
    alert("Là số nguyên tố");
} else{
    alert("Không phải số nguyên tố");
}