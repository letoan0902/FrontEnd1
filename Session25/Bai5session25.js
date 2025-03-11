let arr = prompt("Nhập vào các giá trị cách nhau bởi dấu phẩy (,)").trim().split(",");
checkInteger(arr);

function checkInteger(arr){
    let integerArr = [];
    for(let element of arr){
        if(arr[0]==''){
            alert("Dữ liệu không hợp lệ");
            return;
        } else if(+element>=0&&+element%1===0){
            integerArr.push(+element);
        }
    }
    if(integerArr.length==0){
        alert("Mảng không chứa số nguyên dương");
    } else {
        alert(integerArr);
    }
}