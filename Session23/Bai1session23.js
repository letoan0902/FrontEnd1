let arr = [1,2,3,5,6,7,9,9,9,9];
let arrAfter=[];
let count=0;
for(let element of arr){
    if(element>=10){
        arrAfter.push(element);
        count++;
    }
}
if(count==0){
    console.log("không có số nào lớn hơn 10");
} else {
    console.log(arrAfter);
}
