let number = +prompt("Number");
let sqrtNumber = Math.sqrt(number);
let result = (sqrtNumber%1==0) ? "Số chính phương" : "Không phải số chính phương";
alert(result);