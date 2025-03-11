let string = prompt('Nhập chuỗi').trim();
textFormat(string);
function textFormat(string){
    let arr = string.split("");
    arr[0]=arr[0].toUpperCase();
    for(let i=1;i<arr.length;i++){
        if(arr[i]==" "){
            arr[i+1]=arr[i+1].toUpperCase();
            i++;
        } else {
            arr[i]=arr[i].toLowerCase();
        }
    }
    string = arr.join("");
    alert(string);
}