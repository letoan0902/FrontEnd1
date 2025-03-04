let number = prompt("Nhập chuỗi số nguyên");
let reveNumber='';
let i;
if(+number%1===0){
    for(i=number.length-1;i>=0;i--){
        reveNumber += number[i];
    }
    if(number==reveNumber){
        alert("Là số đối xứng");
    } else {
        alert("Không phải số đối xứng");
    }
} else{
    alert("Số không hợp lệ");
}