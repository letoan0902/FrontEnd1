let n=10;
let i,j;
    for(i=0;i<10;i++){
        for(j=0;j<12;j++){
            if(i==0||i==9){
                document.write("*");
            } else if(j==0||j==11){
                document.write("*");
            } else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write(`<br>`);
    }
