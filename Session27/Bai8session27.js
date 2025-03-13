let number = "abc";
number = check(number);
if(number%1!=0){
    number = "dữ liệu không hợp lệ";
}
alert(number);
function check(number) {
  number = number.toString();
  let arr = number.split("");
  arr = arr.map(Number);
  arr.sort().reverse();
  number = arr.join("");
  return number;
}
