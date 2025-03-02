let account = prompt("Account");
if (account==="ADMIN"){
    let password = prompt("Password");
    if(password==="TheMaster"){
        document.write("Welcome");
    } else if(password==="null"){
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
} else if (account==="null"){
    document.write("Cancelled");
} else (
    document.write("I Don't know you")
)