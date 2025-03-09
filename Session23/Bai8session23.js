let n = +prompt("Nhap so luong phan tu cua mang:");

if (isNaN(n) || n <= 0) {
    console.log("So luong phan tu khong hop le");
} else {
    let array = prompt("Nhap vao tung phan tu, cach nhau boi dau phay (,): ").trim().split(",");
    let flag = 0;
    let a = 0, b = 1;
    for (let i = 0; i < array.length; i++) {
        let num = +array[i];

        if (num < 0) {
            flag++;
            break;
        }
        if (num !== a) {
            flag++;
            break;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    if (flag === 0) {
        alert("Day la day Fibonacci");
    } else {
        alert("Khong phai day Fibonacci");
    }
}