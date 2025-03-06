let arr = [1,2,3,4,5];
let totalEven =0;
let totalOdd =0;
arr.map(String);
arr.map(Number);
for(let element of arr){
    if(element%2==0){
        totalEven += element;
    } else {
        totalOdd += element;
    }
}
console.log("Tổng các số chẵn ", totalEven);
console.log("Tổng các số lẻ ", totalOdd);


