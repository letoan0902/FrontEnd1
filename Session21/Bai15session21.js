let money= +prompt("mời nhập số tiền chia hết cho 1000");
let value=500000;
if(Number.isInteger(money)&&money>0&&money%1000===0){
    let str="";
    while(money!==0){
        if(money>=value){
            str=str+value+" - "+Math.floor(money/value)+" tờ\n";
            money=money%value;
        }
        if(value===2000){
            value=1000;
        }
        if(value===5000){
            value=2000;
        }
        if(value===10000){
            value=5000;
        }
        if(value===20000){
            value=10000;
        }
        if(value===50000){
            value=20000;
        }
        if(value===100000){
            value=50000;
        }
        if(value===200000){
            value=100000;
        }
        if(value===500000){
            value=200000;
        }
    }
    alert(str);
}else{
    alert("giá trị không hợp lệ");
}