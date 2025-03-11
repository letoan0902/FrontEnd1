let arr = prompt("Nhập vào các giá trị cách nhau bởi dấu phẩy (,)").trim().split(",");
checkEven(arr);

function checkEven(arr){
    let evenArr = [];
    for(let element of arr){
        if(+element%1!==0||arr[0]==''){
            alert("Dữ liệu không hợp lệ");
            return;
        } else if(+element%2===0){
            evenArr.push(+element);
        }
    }
    if(evenArr.length==0){
        alert("Mảng không chứa số chẵn");
    } else {
        alert(evenArr);
    }
}