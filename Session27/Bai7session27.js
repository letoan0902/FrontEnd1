let arr = ["abc"];
let number = arr[0];
let find = check(number,arr);
if(find%1!=0){
    find = "dữ liệu không hợp lệ";
}
function check(number,arr) {
    for(let element of arr){
        if(element!=number){
            return number;
        }
        number++;
    }
}
alert(find);