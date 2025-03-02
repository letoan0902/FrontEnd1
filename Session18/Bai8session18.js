let a = +prompt("Cạnh a");
let b = +prompt("Cạnh b");
let c = +prompt("Cạnh c");
let type ="";
if (!(a>0&&b>0&&c>0&&(a+b)>c&&(b+c)>a&&(c+a)>b)){
    alert("không phải một tam giác");
} else {
    if(a==b&&b==c){
        alert("Tam giác đều");
    } else if(a==b||a==c||b==c){
        alert("Tam giác cân");
    } else if (a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a){
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
}

