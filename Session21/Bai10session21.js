let number = +prompt("Nhập số");
let i=3;
let total ='2';
let j;
count = 0;
if(number/1>0){
    while(count<number){
        flag=0;
        for(j=2;j<(i/2);j++){
            if(i%j===0){
                flag=1;
            }
        }
        if(flag===0){
            total += " " + i;
            count++;
        }
        i++;
    }
    alert(total);
} else if(number === 1){
    alert(total);
} else{
    alert("Không hợp lệ");
}