let button = document.getElementById("button");

let accounts = localStorage.getItem("accounts");
accounts=JSON.parse(accounts);

button.addEventListener("click",function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let account = accounts.find(element => element.email==email.value);
    if(email.value==""||password.value==""){
        alert('Dữ liệu không được bỏ trống!')
    } else if(account){
        if(account.password!=password.value){
            alert("Sai mật khẩu!");
        } else {
            alert("Đăng nhập thành công!");
            email.value="";
            password.value="";
        }
    } else {
        alert("Không tìm thấy tài khoản");
    }
    

});

