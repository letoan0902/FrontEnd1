let numbers = [2,5,7,4,1,8,6,2,5,7];
let number = [];
for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) !== -1) {
        number.push(i);
    }
}
let count = new Array(number.length).fill(0);
for (let i = 0; i < number.length; i++) {
    for (let element of numbers) {
        if (element === number[i]) {
            count[i]++;
        }
    }
}
let max = Math.max(...count);
max = count.indexOf(max);
console.log(number[max]);
  