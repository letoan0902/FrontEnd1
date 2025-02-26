let firstNumber = Number(prompt("firstNumber"));
let secondNumber = Number(prompt("secondNumber"));
let thirdNumber = Number(prompt("thirdNumber"));
if(firstNumber>=secondNumber && firstNumber>=thirdNumber){
    alert('Số lớn nhất là:' + firstNumber);
} else if(secondNumber>=thirdNumber){
    alert('Số lớn nhất là:' + secondNumber);
} else {
    alert('Số lớn nhất là:' + thirdNumber);
}
