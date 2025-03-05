let day = prompt("Nhập ngày sinh và tháng sinh theo dạng (2 3)");
let arr = day.split(" ");
    arr = arr.map(Number);
if(arr[0]>31 || arr[0]<1 ||arr[1]>12||arr[1]<1){
    document.write(`Dữ liệu nhập không hợp lệ`);
} else {
    if(arr[0]>=21&&arr[1]===3||arr[0]<=20&&arr[1]===4){
    document.write(`Cung Bạch Dương`);
    } else if (arr[0]>=21&&arr[1]===4||arr[0]<=20&&arr[1]===5){
        document.write(`Cung Kim Ngưu`);
    } else if (arr[0]>=21&&arr[1]===5||arr[0]<=21&&arr[1]===6){
        document.write(`Cung Song Tử`);
    } else if (arr[0]>=22&&arr[1]===6||arr[0]<=22&&arr[1]===7){
        document.write(`Cung Cự Giải`);
    } else if (arr[0]>=23&&arr[1]===7||arr[0]<=22&&arr[1]===8){
        document.write(`Cung Sư Tử`);
    } else if (arr[0]>=23&&arr[1]===8||arr[0]<=22&&arr[1]===9){
        document.write(`Cung Xử Nữ`);
    } else if (arr[0]>=23&&arr[1]===9||arr[0]<=23&&arr[1]===10){
        document.write(`Cung Thiên Bình`);
    } else if (arr[0]>=24&&arr[1]===10||arr[0]<=22&&arr[1]===11){
        document.write(`Cung Bọ Cạp`);
    } else if (arr[0]>=23&&arr[1]===11||arr[0]<=21&&arr[1]===12){
        document.write(`Cung Ma Kết`);
    } else if (arr[0]>=20&&arr[1]===1||arr[0]<=18&&arr[1]===2){
        document.write(`Cung Bảo Bình`);
    } else if (arr[0]>=19&&arr[1]===2||arr[0]<=20&&arr[1]===3){
        document.write(`Cung Song Ngư`);
    } else {
        document.write(`Dữ liệu nhập không hợp lệ`);
    }
}