let button = document.getElementById("button");


let accounts = localStorage.getItem("accounts");
if(accounts){
    accounts=JSON.parse(accounts);
    console.log(accounts);
} else {
    accounts = [];
}

button.addEventListener("click",function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    if(email.value==""||password.value==""||confirmPassword.value==""){
        alert("Thông tin không được để trống");
    } else if(password.value!=confirmPassword.value) {
        alert("Mật khẩu không trùng khớp");
    } else if(accounts.find(element => element.email==email.value)){
        alert("Email đã được đăng ký");
    } else{
        let account = {
            email: email.value,
            password: password.value
        }
        accounts.push(account);
        console.log(accounts);
        alert("Tạo tài khoản thành công")
        email.value="";
        password.value="";
        confirmPassword.value="";
        localStorage.setItem("accounts",JSON.stringify(accounts));
    }
});

