let number=[];
let choice = 0;
while(choice!=5){
    choice = +prompt(`-------MENU------
        1. Nhập danh sách số nguyên
        2. Tính trung bình các số
        3. Tìm số chẵn lớn nhất
        4. Tìm số lẻ nhỏ nhất
        5. Thoát
        Lựa chọn của bạn là: `);
        switch (choice) {
            case 1:
                number = prompt(`Nhập danh sách các số nguyên cách nhau bở dẩu phẩy (,)`).trim().split(",").map(Number);
                if(number.length==0||number[0]==" "||number[0]==''){
                    alert("Bạn đã nhập sai!");
                    break;
                }
                break;
            case 2:
                if (number.length === 0) {
                    alert("Danh sách trống");
                } else {
                    let average = number.reduce((acc, cur) => acc + cur, 0) / number.length;
                    alert(`Trung bình cộng các số là: ${average.toFixed(2)}`);
                }
                break;
            case 3:
                let numberEven = number.filter((element) => element %2 ==0);
                let maxEven = Math.max(...numberEven);
                alert(`Số chẵn lớn nhất có trong mảng là: ${maxEven}`);
                break;
            case 4:
                let numberOdd = number.filter((element) => element %2 !=0);
                let minOdd = Math.min(...numberOdd);
                alert(`Số lẻ nhỏ nhất có trong mảng là: ${minOdd}`);
                break;
            case 5:
                break;
            default:
                alert("Nhập sai");
                break;
        }
}