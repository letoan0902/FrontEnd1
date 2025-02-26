let string = prompt("Nhập 1 chuỗi").trim();
let stringAfter = 0;
for(let i=0; i<string.length; i++){
    if(string[i]==" " && string[i+1]!=" "){
        stringAfter++;
    }
}
alert(++stringAfter);