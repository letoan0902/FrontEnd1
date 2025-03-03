let month = +prompt("Nhập tháng:");
if (month===1||month===3||month===5||month===7||month===8||month===10||month===12){
    alert("tháng có 31 ngày");
} else if (month>12||month<1){
    alert("tháng không hợp lệ");
} else if (month===2){
    alert("tháng có 28 hoặc 29 ngày năm nhuận");
} else{
    alert("tháng có 30 ngày");
}