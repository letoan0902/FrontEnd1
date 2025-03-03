let result = "javascript" + 5;  //Kết quả là javascript5 vì toán tử + nếu 1 string + 1 gố thì là gán
console.log(result);
result = "javascript" - 1; // Kết quả la NaN vì - chỉ áp dụng cho số, nếu khác kiểu dữ liệu thì thành NaN
console.log(result);
result = "3" + 2;          // Kết quả là 32 vì 3 ở đây là chuỗi, khi dùng + thì là nối chuỗi
console.log(result);
result = "5" - 4;          // Kết quả là 1 vì khi sử dụng  - thì 5 sẽ bị ép kiểu dữ liệu số
console.log(result);
result = isNaN("123");     // Kết quả là false vì 123 sẽ bị ép về kiểu dữ liệu số
console.log(result);
result = isNaN("hello");   // Kết quả là true vì hello chuyển sang số thì thành NaN
console.log(result);
result = Number.isNaN("123");// Kết quả là false vì 123 là chuỗi 
console.log(result);
result = Number.isNaN(NaN);  // Kết quả là true vì NaN khi này là NaN
console.log(result);
