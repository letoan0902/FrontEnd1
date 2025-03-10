let arr = [];
let flag = 0;
let flagCase1=0;
let string;
while (1) {
  let choice = +prompt(`-------------MENU-------------
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lượng xuất hiện của một ký tự
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa ký tự đầu tiên của từ
        7. Thoát chương trình
        Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
        string = prompt(`Nhập chuỗi`).trim();
        arr = string.split("");
        flagCase1=1;
      break;
    case 2:
        if(flagCase1===0){
            alert(` Bạn hãy nhập chuỗi trước!`);
            break;
        }
        alert(`Chuỗi hiện tại là: ${string}`);
      break;
    case 3:
        if(flagCase1===0){
            alert(` Bạn hãy nhập chuỗi trước!`);
            break;
        }
        alert(`Độ dài của chuỗi là: ${string.length}`);
    break;
    case 4:
        if(flagCase1===0){
            alert(` Bạn hãy nhập chuỗi trước!`);
            break;
        }
        let count=0;
        let char = prompt('Nhập ký tự muốn đếm');
        for(let element of arr){
            if(element==char){
                count++;
            }
        }
        alert(` Ký tự ${char} xuất hiện ${count} lần`);
      break;
    case 5:
        if(flagCase1===0){
            alert(` Bạn hãy nhập chuỗi trước!`);
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
                alert(`Chuỗi đối xứng`)
            } else {
                alert(`Chuỗi không đối xứng`)
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
                alert(`Chuỗi đối xứng`)
            } else {
                alert(`Chuỗi không đối xứng`)
            }
        }
        break;
    case 6:
        if(flagCase1===0){
            alert(` Bạn hãy nhập chuỗi trước!`);
            break;
        }
        arr[0] = arr[0].toUpperCase();
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === ' ') {
                arr[i + 1] = arr[i + 1].toUpperCase();
            }
        }
        string = arr.join('');
        alert(string);
      break;
    case 7:
        flag=1;
      break;
  }
if(flag==1){
    break;
}
}
