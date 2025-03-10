let arr = [];
let flag = 0;
let flagCase1=0;
while (1) {
  let choice = +prompt(`-------------MENU-------------
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong 1 hàng hoặc 1 cột
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
        if(n!==m){
            alert(`Không phải ma trận vuông`);
            break;
        }
        let sum4 = 0;
        for(let i=0;i<n;i++){
            sum4+=+arr[i][i];
        }
        alert(` Tổng đường chéo chính là: ${sum4}`);
      break;
    case 5:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        if(n!==m){
            alert(`Không phải ma trận vuông`);
            break;
        }
        let sum5 = 0;
        for (let i = 0; i < n; i++) {
            sum5 += +arr[i][n - 1 - i];
        }
        alert(` Tổng đường chéo phụ là: ${sum5}`);
        break;
    case 6:
        if(flagCase1===0){
            alert(` Bạn hãy nhập mảng trước!`);
            break;
        }
        let choose = +prompt(`1. Theo hàng\n2. Theo cột\nLựa chọn của bạn: `);
        if(choose===1){
            let row = +prompt("Nhập hàng");
            let sum = 0;
            for(let i=0;i<m;i++){
                sum += +arr[row][i];
            }
            let average=sum/m;
            alert(` Trung bình cộng của hàng ${row} là: ${average}`);
        } else if (choose===2){
            let col = +prompt("Nhập cột");
            let sum = 0;
            for(let i=0;i<n;i++){
                sum += +arr[i][col];
            }
            let average=sum/n;
            alert(` Trung bình cộng của cột ${col} là: ${average}`);
        } else {
            alert("Lựa chọn không hợp lệ!");
        }
        break;
      break;
    case 7:
        flag=1;
      break;
  }
if(flag==1){
    break;
}
}
