let arr = ["abc"];
let indexes = arr.map((element, index) => element % 2 === 0 ? index : -1).filter(index => index !== -1);
let evens = arr.filter((element) => element%2===0);
evens.sort();
for (let i=0; i<evens.length;i++){
    arr[indexes[i]]=evens[i];
}
let check = arr.filter((element) => element%1!=0);
if(check.length>0){
    alert("Dữ liệu không hợp lệ");
} else {
    alert(arr);
}