let n = +prompt("Nhập n");
let a = 1;
let b = 1;
let c = 0;
let flag=0;
let count=2;
let total='1 1';
let i;
if(n/1>0){
    while(1){
        if(count===n){
            break;
        }
        if(n===1){
            alert("1");
            flag=1;
            break;
        }
        if(n===2){
            alert(total);
            break;
        }
        c=a+b;
        total += " " + c;
        b = a;
        a = c;
        count++;
    }
    if(flag===0){
        alert(total);
    }
} else {
    alert("Không hợp lệ");
}

