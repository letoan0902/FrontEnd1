let choice;
let n;
let flag;
let sum = 0;
let array = [];
do {
  choice = +prompt(`
        ================= MENU ================
        1. Nhap so phan tu can nhap va gia tri cac phan tu
        2. In ra gia tri cac phan tu dang quan ly
        3. In ra cac gia tri cac phan tu chan va tinh tong
        4. In ra cac gia tri lon nhat va nho nhat trong mang
        5. In ra cac phan tu la so nguyen to trong mang va tinh tong
        6. Nhap vao 1 so va thong ke trong mang co bao nhieu phan tu do
        7. Them 1 phan tu vao vi tri chi dinh
        8. Thoat
        =======================================
        Lua chon cua ban`);
  switch (choice) {
    case 1:
      let inputString = prompt(
        "Nhap cac phan tu cua mang bat dau bang dau phay (,):"
      );
      let tempArray = inputString.split(",");
      array = [];
      for (let i = 0; i < tempArray.length; i++) {
        let value = +tempArray[i].trim();
        if (isNaN(value)) {
          console.log("Du lieu khong hop le, vui long nhap lai");
          array = [];
          break;
        }
        array.push(value);
      }
      if (array.length > 0) {
        console.log("Mang da nhap: ", array);
      }
      break;
    case 2:
      if (array.length == 0) {
        console.log(`Hay nhap mang truoc`);
        break;
      }
      console.log(`Cac phan tu trong mang dang quan ly : ${array}`);
      break;
    case 3:
      if (array.length == 0) {
        console.log(`Hay nhap mang truoc`);
        break;
      }
      sum = 0;
      flag = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
          flag = 1;
          console.log(`${array[i]}`);
          sum += array[i];
        }
      }
      if (flag == 0) {
        console.log(`Khong co phan tu chan nao trong mang`);
      } else {
        console.log(`Tong : ${sum}`);
      }
      break;
    case 4:
      if (array.length == 0) {
        console.log(`Hay nhap mang truoc`);
        break;
      }
      let max = array[0];
      let min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
        }
        if (array[i] > max) {
          max = array[i];
        }
      }
      console.log(`Phan tu lon nhat trong mang : ${max}`);
      console.log(`Phan tu nho nhat trong mang : ${min}`);
      break;
    case 5:
      if (array.length == 0) {
        console.log(`Hay nhap mang truoc`);
        break;
      }
      let prime;
      flag = 0;
      sum = 0;
      for (let i = 0; i < array.length; i++) {
        prime = 1;
        if (array[i] < 2) {
          prime = 0;
        } else {
          for (let j = 2; j <= Math.sqrt(array[i]); j++) {
            if (array[i] % j === 0) {
              prime = 0;
              break;
            }
          }
        }
        if (prime === 1) {
          console.log(`${array[i]} `);
          flag = 1;
          sum += array[i];
        }
      }
      if (flag == 0) {
        console.log(`Mang khong co so nguyen to`);
      } else {
        console.log(`Tong : ${sum}`);
      }
      break;
    case 6:
      if (array.length == 0) {
        console.log(`Hay nhap mang truoc`);
        break;
      }
      let count = 0;
      let searchItem = +prompt("Nhap phan tu muon tim kiem");
      for (let i = 0; i < array.length; i++) {
        if (array[i] == searchItem) {
          count++;
        }
      }
      if (count == 0) {
        console.log(`Khong tim thay phan tu trong mang`);
      } else {
        console.log(`Phan tu ${searchItem} xuat hien ${count} lan trong mang`);
      }
      break;
    case 7:
      if (array.length == 0) {
        console.log(`Hay nhap mang truoc`);
        break;
      }
      let addItem = +prompt("Nhap phan tu ban muon them");
      let addIndex = +prompt("Nhap vi tri index ban muon them");
      if (addIndex > n || addIndex< 0) {
        console.log(`Vi tri index khong hop le!`);
        break;
      }
      for (let i = n; i > addIndex; i--) {
        array[i] = array[i - 1];
      }
      array[addIndex] = addItem;
      break;
    case 8:
      console.log(`Xin chao`);
      break;
    default:
      console.log(`Lua chon khong hop le`);
      break;
  }
} while (choice !== 8);
