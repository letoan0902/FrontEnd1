let input = prompt("Nhập 2 số cách nhau bằng , (vd 2,9");
let numbers = input.split(",");
let num1 = parseInt(numbers[0]);
let num2 = parseInt(numbers[1]);
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
alert("Số ngẫu nhiên:" + randomNum);