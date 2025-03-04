let n = +prompt("Nhập số:");
let total=0;
if(n/1>0){
   let i;
   for(i=1;i<=n;i++){
    total = total + i;
   }
   alert(total);
} else{
    alert("dữ liệu nhập vào không hợp lệ");
}