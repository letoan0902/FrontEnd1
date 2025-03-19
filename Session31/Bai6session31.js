let username = "huanrose@gmail.com";
let password = "123456";
let button = document.getElementById("button");
button.addEventListener("submit", function(event){
    event.preventDefault();
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    if(inputUsername===username&&inputPassword===password){
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập thất bại")
    }
});