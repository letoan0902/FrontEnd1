let arr = [];
let max = Math.max(...arr);
if(max%1==0){
    console.log('Số lớn nhất:',max);
    console.log('Vị trí:',arr.indexOf(max));   
} else {
    console.log('Không có số lớn nhất');
}