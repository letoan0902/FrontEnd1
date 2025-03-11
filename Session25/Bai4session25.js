let prime = +prompt("Nhập vào số cần kiểm tra").trim()
checkPrime(prime);

function checkPrime(prime){
    if(prime===2){
        alert(`Là số nguyên tố`);
        return;
    } else if(prime<2){
        alert(`Không phải số nguyên tố`);
        return;
    }
    if(prime%1!==0){
        alert("Dữ liệu không hợp lệ");
    } else {
        let count=0;
        for(let i=2;i<=prime/2;i++){
            if(prime%i===0){
                count++;
            }
        }
        if(count===0){
            alert("Là số nguyên tố");
        } else {
            alert("Không phải số nguyên tố");
        }
    }
}