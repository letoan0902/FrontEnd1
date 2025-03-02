let year = +prompt("Nhập năm");
if (year%100===0&&year%400!=0){
    alert("Không phải năm nhuận")
} else if(year%4===0){
    alert("Là năm nhuận");
} else {
    alert("Không phải năm nhuận");
}