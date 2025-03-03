let string = prompt("Nhập chuỗi");
string = string.trim();
let count=0;
for(let i=0;i<string.length;i++){
    if(string[i]===" "){
        count++;
    }
}
if(count===0){
    alert("chuỗi không chứa dấu cách");
} else {
    alert("chuỗi chứa dấu cách");

}