document.getElementById("checkButton").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

    if (checkEmail.test(email)) {
        result.textContent = "email hợp lệ!";
        result.style.color = "green";
    } else {
        result.textContent = "email không hợp lệ!";
        result.style.color = "red";
    }
});