let string = prompt('Nhập chuỗi').trim();
isPalindrome(string);

function isPalindrome(string){
    let len = string.length;
    for (let i=0;i<Math.floor(len/2);i++) {
        if (string[i] !== string[len-1-i]) {
            alert("Chuỗi không đối xứng");
            return;
        }
    }
    alert("Chuỗi đối xứng");
}