let number;
let choice = 0;
while(choice!=5){
    choice = +prompt(`-------MENU------
        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát
        Lựa chọn của bạn là: `);
        switch (choice) {
            case 1:
                r = +prompt(`Nhập bán kính hình tròn`).trim();
                if(!r>0){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let area = (r) => 3.14 * r**2;
                alert(`Diện tích hình tròn: ${area(r)}`);
                break;
            case 2:
                r = +prompt(`Nhập bán kính hình tròn`).trim();
                if(!r>0){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let cir = (r) => 2*3.14 * r;
                alert(`Chu vi hình tròn: ${cir(r)}`);
                break;
            case 3:
                number = prompt(`Nhập 2 cạnh cách nhau bơi dấu phẩy (,)`).trim().split(",");
                if(number.length!=2){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let areaRe = (number) => +number[0] * +number[1];
                alert(` Diện tích hình chữ nhật là: ${areaRe(number)}`);
                break;
            case 4:
                number = prompt(`Nhập 2 số cách nhau bơi dấu phẩy (,)`).trim().split(",");
                if(number.length!=2){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                let perimeterRe = (number) => (+number[0] + +number[1])*2;
                alert(` Chu vi hình chữ nhật: ${perimeterRe(number)}`);
                break;
            case 5:
                break;
            default:
                alert("Nhập sai");
                break;
        }
}