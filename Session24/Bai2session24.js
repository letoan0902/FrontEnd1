let arr = [];
let flag = 0;
let flagCase1=0;
while (1) {
  let choice = +prompt(`-------------MENU-------------
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ 2 trong mảng
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
        let even = '';
        let odd = '';
        for(element of arr){
            if(+element%2===0){
                even+= element + " ";
            } else {
                odd += element + " ";
            }
        }
        alert(`Các phần tử chẵn có trong mảng là: ${even}\nCác phần tử lẻ có trong mảng là: ${odd}`)
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
        let average = total/arr.length;
        alert(`Trung bình cộng của mảng là: ${average}`);
      break;
    case 5:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let deleteEle = +prompt(` Nhập vị trí index muốn xóa: `);
        arr.splice(deleteEle,1);
        alert(`Mảng sau khi xóa là: ${arr}`);
      break;
    case 6:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let max = arr[0];
        let temp = max;
        for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            temp=max;
            max=arr[i];
        }
        }
    alert(` Số lớn thứ 2 trong mảng là: ${temp}`);
      break;
    case 7:
        flag=1;
      break;
  }
if(flag==1){
    break;
}
}
