let arr = [];
let flag = 0;
let flagCase1=0;
while (1) {
  let choice = +prompt(`-------------MENU-------------
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình
        Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      while (1) {
        let flag1 = 0;
        var n = +prompt(`Nhập số hàng`);
        var m = +prompt(`Nhập số cột`);
        for(let i=0;i<n;i++){
            arrj = prompt(`Nhập hàng ${i+1} của mảng cách nhau bằng dấu phẩy (,): `).split(",");
            arr.push(arrj);
        }
        for (let element of arr) {
            for(let value of element){
                if (+value % 1 !== 0) {
                    alert(` Nhập mảng sai định dạng, vui lòng nhập lại`);
                    flag1 = 1;
                    break;
                }
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
        for(let element of arr){
            console.log(`${element}`);   
        }
      break;
    case 3:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let total=0;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                total += +arr[i][j];
            }
        }
        alert(` Tổng các số là: ${total}`);
    break;
    case 4:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let max = Math.max(...arr.flat());
        let maxIndex = '[-1][-1]'
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(max===+arr[i][j]){
                    maxIndex = `[${i}][${j}]`
                }
            }
        }
        alert(`Phần tử lớn nhất là: ${max}\nVị trí index: ${maxIndex}`);
      break;
    case 5:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let row = +prompt("Nhập hàng");
        let sum = 0;
        for(let i=0;i<m;i++){
            sum += +arr[row][i];
        }
        let average=sum/m;
        alert(` Trung bình cộng của hàng ${row} là: ${average}`);
        break;
    case 6:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        arr=arr.reverse();
        for(let element of arr){
            console.log(`${element}`);   
        }
      break;
    case 7:
        flag=1;
      break;
  }
if(flag==1){
    break;
}
}
