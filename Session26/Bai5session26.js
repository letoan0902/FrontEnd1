let arr = prompt("Nhập thông tin vào mảng cách nhau bằng dấu phẩy (,)").trim().split(",");
let checkString = arr.filter((element) => isNaN(element) || +element % 1 !== 0);
if (checkString.length > 0) {
    alert("Dữ liệu không hợp lệ");
} else {
    arr = arr.map(Number);

    let max = Math.max(...arr);
    let maxIndex = arr
        .map((element, index) => (element === max ? index : -1))
        .filter(index => index !== -1);
    if (maxIndex.length > 0) {
        alert(`Số lớn nhất: ${max}\nIndex: ${maxIndex}`);
    } else {
        alert("Mảng không có phần tử nào");
    }
}
