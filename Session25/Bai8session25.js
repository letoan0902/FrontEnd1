let password = prompt("Nhập mật khẩu:");
isStrongPassword(password);

function isStrongPassword(password){
    let checkLength = 0;
    let checkUpperCase = 0;
    let checkLowerCase = 0;
    let checkNumber = 0;
    let arr = password.split("");
    if(arr.length<8){
        alert("False");
        return;
    }
    for(let element of arr){
        if (element>='A'&&element<='Z') {
            checkUpperCase = 1;
        }
        if (element>='a'&&element<='z') {
            checkLowerCase = 1;
        }
        if(element%1==0){
            checkNumber = 1;
        }
    }
    if(checkUpperCase==1&&checkLowerCase==1&&checkNumber==1){
        alert('True');
    } else {
        alert('False');
    }
}