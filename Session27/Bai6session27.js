let arr = [2,4,6,8,"abc"];
let checkChar = arr.filter((element) => element %1 != 0);
let number = arr[1]-arr[0];
let find = check(number,arr);
function check(number,arr) {
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]!=number){
            return "False";
        }
    }
    return "True";
}
if(checkChar.length>0){
    alert("dữ liệu không hợp lệ")
} else {
    alert(find);

}