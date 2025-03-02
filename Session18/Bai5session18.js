let year = +prompt("Nhập số năm kinh nghiệm");
if (year>6) {
    alert("Quản lý");
} else if (year>=4){
    alert("Chuyên viên");
} else if (year>=1){
    alert("Nhân viên có kinh nghiệm");
} else {
    alert("Mới vào nghề");
}