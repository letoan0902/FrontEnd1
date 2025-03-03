const num=parseInt(prompt("nhập số từ 0 - 999"));
if(num < 0 || num > 999) {
    alert("không hợp lệ");
} else {
    const units=["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const tens=["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    let hundreds=Math.floor(num/100);
    let tensDigit=Math.floor((num%100)/10);
    let unitsDigit=num%10;
    let result="";
    if(hundreds>0){
        result+=units[hundreds]+" trăm";
        if(tensDigit===0&&unitsDigit!==0)result+=" linh";
    }
    if(tensDigit>0){
        result+=" "+tens[tensDigit];
    }
    if(unitsDigit>0){
        result+=" "+units[unitsDigit];
    }
    alert(result.trim());
}
location.reload();