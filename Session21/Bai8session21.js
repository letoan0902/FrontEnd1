let i;
for(i=100;i<1000;i++){
    let arr = i.toString().split("");
    if((Math.pow(+arr[0], 3) + Math.pow(+arr[1], 3) + Math.pow(+arr[2], 3))==i){
        document.write(`${i} `);
    }
}