let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)")
  .trim()
  .split(",");
if (arr.length > 20) {
  alert("Nhập dưới 20 phần tử");
} else {
  let checkString = arr.filter((element) => +element % 1 !== 0);
  if (checkString.length > 0) {
    alert("Dữ liệu không hợp lệ");
  } else {
    arr = arr.map(Number);
    let arrAfter = arr.filter((element) => {
      let count = 0;
      if (element == 2) {
        return true;
      } else if (element > 2) {
        for (let i = 2; i <= element / 2; i++) {
          if (element % i == 0) {
            count++;
          }
        }
      } else {
        return false;
      }
      if (count == 0) {
        return true;
      }
    });
    arrAfter = arrAfter.filter((element) => element % 2 != 0);
    if (arrAfter.length > 0) {
      alert(arrAfter);
    } else {
      alert("Mảng không có dữ liệu");
    }
  }
}
