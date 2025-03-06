let numbers = [1, 2, 9, 7, 4, 1, 7, 5, 5, 2];
let number = [];
for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) !== -1) {
        number.push(i);
    }
}
console.log(number);
