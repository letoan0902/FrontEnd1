let number;
let choice = 0;
while(choice!=5){
    choice = +prompt(`-------MENU------
        1. Cộng hai số
        2. Trừ hai số
        3. Nhân hai số
        4. Chia hai số
        5. Thoát
        Lựa chọn của bạn là: `);
        switch (choice) {
            case 1:
                number = prompt(`Nhập 2 số cách nhau bơi dấu phẩy (,)`).trim().split(",");
                if(number.length!=2){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let sum = (number) => +number[0] + +number[1];
                alert(` Tổng 2 số là: ${sum(number)}`);
                break;
            case 2:
                number = prompt(`Nhập 2 số cách nhau bơi dấu phẩy (,)`).trim().split(",");
                if(number.length!=2){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let diff = (number) => +number[0] - +number[1];
                alert(` Hiệu 2 số là: ${diff(number)}`);
                break;
            case 3:
                number = prompt(`Nhập 2 số cách nhau bơi dấu phẩy (,)`).trim().split(",");
                if(number.length!=2){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let product = (number) => +number[0] * +number[1];
                alert(` Tích 2 số là: ${product(number)}`);
                break;
            case 4:
                number = prompt(`Nhập 2 số cách nhau bơi dấu phẩy (,)`).trim().split(",");
                if(number.length!=2){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let quotient = (number) => +number[0] / +number[1];
                alert(` Thương 2 số là: ${quotient(number).toFixed(2)}`);
                break;
            case 5:
                break;
            default:
                alert("Nhập sai");
                break;
        }
}