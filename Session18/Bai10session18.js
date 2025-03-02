let number = +prompt("Nhập số từ (0=999)");
let hundred = Math.floor(number/100);
let dozen = Math.floor((number%100)/10);
let unit = number%10;
if (hundred===0){
    hundred = "không";
} else if(hundred===1){
    hundred="một";
} else if(hundred===2){
    hundred="hai";
} else if(hundred===3){
    hundred="ba";
} else if(hundred===4){
    hundred="bốn";
} else if(hundred===5){
    hundred="năm";
} else if(hundred===6){
    hundred="sáu";
} else if(hundred===7){
    hundred="bảy";
} else if(hundred===8){
    hundred="tám";
} else if(hundred===9){
    hundred="chín";
}
if (dozen===0){
    dozen = "không";
} else if(dozen===1){
    dozen="một";
} else if(dozen===2){
    dozen="hai";
} else if(dozen===3){
    dozen="ba";
} else if(dozen===4){
    dozen="bốn";
} else if(dozen===5){
    dozen="năm";
} else if(dozen===6){
    dozen="sáu";
} else if(dozen===7){
    dozen="bảy";
} else if(dozen===8){
    dozen="tám";
} else if(dozen===9){
    dozen="chín";
}
if (unit===0){
    unit = "không";
} else if(unit===1){
    unit="một";
} else if(unit===2){
    unit="hai";
} else if(unit===3){
    unit="ba";
} else if(unit===4){
    unit="bốn";
} else if(unit===5){
    unit="năm";
} else if(unit===6){
    unit="sáu";
} else if(unit===7){
    unit="bảy";
} else if(unit===8){
    unit="tám";
} else if(unit===9){
    unit="chín";
}
if (hundred==="không") {
    hundred="";
} else {
    hundred = hundred + " trăm";
}
if (dozen==="không") {
    if (unit==="không") {
        dozen = "";
    } else {
        dozen = "linh";
    }
} else if (dozen==="một") {
    dozen = "mười";
} else {
    dozen = dozen + " mươi";
}
if (unit==="không") {
    unit = "";
} else if (unit==="một"&&dozen!=="mười"&&dozen!== "") {
    unit = "mốt";
} else if (unit==="năm"&& dozen!=="mười"&& dozen!== "") {
    unit = "lăm";
}
if (number===0) {
    alert("không");
} else {
    alert(`${hundred} ${dozen} ${unit}`);
}