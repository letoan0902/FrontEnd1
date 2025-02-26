let string = prompt("Nhập");
let stringAfter = "";
for(let i=0; i<string.length; i++){
    if(i==0){
        stringAfter = stringAfter + string[0].toUpperCase();
    } else {
        stringAfter = stringAfter + string[i].toLowerCase();
    }
}
alert(stringAfter);