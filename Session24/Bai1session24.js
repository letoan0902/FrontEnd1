let arr = [];
let flag = 0;
let flagCase1=0;
while (1) {
  let choice = +prompt(`-------------MENU-------------
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của 1 phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
        Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      while (1) {
        let flag1 = 0;
        arr = prompt(`Nhập các giá trị của mảng cách nhau bằng dấu phẩy (,): `).split(",");
        for (let element of arr) {
          if (+element % 1 !== 0) {
            alert(` Nhập mảng sai định dạng, vui lòng nhập lại`);
            flag1 = 1;
            break;
          }
        }
        if (flag1 == 0) {
            flagCase1=1;
          break;
        }
      }
      break;
    case 2:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        alert(` Mảng hiện tại là: ${arr}`);
      break;
    case 3:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        alert(`Phần tử lớn nhất là: ${max}\nPhần tử nhỏ nhất là: ${min}`);
      break;
    case 4:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let total=0;
        for(let element of arr){
            total += +element;
        }
        alert(` Tổng các phần tử trong mảng là: ${total}`);
      break;
    case 5:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let findEle = +prompt(` Nhập phần tử cần tìm: `);
        let count = 0;
        for(let element of arr){
            if(+element === findEle){
                count++;
            }
        }
        alert(` Phần tử ${findEle} xuất hiện ${count} lần trong mảng`);
      break;
    case 6:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        arr.sort();
        alert(` Mảng đã sắp xếp là: ${arr}`);
      break;
    case 7:
        flag=1;
      break;
  }
if(flag==1){
    break;
}
}
