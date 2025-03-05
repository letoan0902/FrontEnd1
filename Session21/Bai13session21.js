let n=10;
let any = prompt("Nhập a,b,c,d");
let i,j;
if(any=="a"){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i+j <= n-1){
                document.write(`*`);
            }
        }
        document.write(`<br>`);
    }
} else if(any=="b"){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i>=j){
                document.write(`*`);
            }
        }
        document.write(`<br>`);
    }
} else if(any=="c"){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i+j >= n-1){
                document.write("*");
            } else{
                document.write("&nbsp&nbsp");
            }
        }
        document.write(`<br>`);
    }
} else if(any=="d"){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i<=j){
                document.write(`*`);
            } else{
                document.write(`&nbsp&nbsp`);
            }
        }
        document.write(`<br>`);
    }
} 
