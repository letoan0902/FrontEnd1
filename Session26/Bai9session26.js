let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)")
  .trim()
  .split(",");
if (arr.length > 20) {
  alert("Nhập dưới 20 phần tử");
} else {
    arr = arr.map(Number);
  let totalEven = arr.filter((element) => element%2==0).reduce((acc,cur) => acc + cur,0);
  let totalOdd = arr.filter((element) => element%2!=0).reduce((acc,cur) => acc + cur,0);
    if (totalEven!=0||totalOdd!=0) {
      alert(`TotalEven: ${totalEven}\nTotalOdd: ${totalOdd}`);
    } else {
      alert("Mảng không có dữ liệu");
    }
  }
