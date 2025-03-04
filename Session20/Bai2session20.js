let n = +prompt("Nhập số:");
if(n/1>0){
   let i;
   document.write(`Các số chia hết cho 5 từ 1 đến ${n} là: `);
   for(i=5;i<=n;i+=5){
     document.write(` ${i}`)
   } 
} else{
    alert("dữ liệu nhập vào không hợp lệ");
}