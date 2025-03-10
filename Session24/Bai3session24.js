let arr = [];
let flag = 0;
let flagCase1=0;
while (1) {
  let choice = +prompt(`-------------MENU-------------
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
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
        let max = Math.max(...arr);
        let maxIndex=-1;
        for(let index in arr){
            if(+arr[index]===max){
                maxIndex=index;
            }
        }
        alert(`Số lớn nhất có trong mảng là: ${max}\nIndex: ${maxIndex}`);
      break;
    case 4:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let total=0;
        let count=0;
        for(let element of arr){
            if(+element >= 0){
                total += +element;
                count++;
            }
        }
        let average = total/count;
        alert(`Tổng các số dương trong mảng là: ${total}\nTrung bình cộng của số dương trong mảng là: ${average}`);
      break;
    case 5:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        arr=arr.reverse();
        alert(` Mảng sau khi đảo ngược là: ${arr}`);
      break;
    case 6:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let arr1='';
        let arr2='';
        if(arr.length%2==0){
            for(let i=0;i<arr.length/2-1;i++){
                arr1+=arr[i];
            }
            arr.reverse();
            for(let i=0;i<arr.length/2-1;i++){
                arr2+=arr[i];
            }
            if(arr1==arr2){
                alert(` Mảng đối xứng`)
            } else {
                alert(` Mảng không đối xứng`)
            }
        } else {
            for(let i=0;i<arr.length/2;i++){
                arr1+=arr[i];
            }
            arr.reverse();
            for(let i=0;i<arr.length/2;i++){
                arr2+=arr[i];
            }
            if(arr1==arr2){
                alert(` Mảng đối xứng`)
            } else {
                alert(` Mảng không đối xứng`)
            }
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
