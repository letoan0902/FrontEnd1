let hours = +prompt("Nhập giờ (0-23):");
let minutes = +prompt("Nhập phút (0-59):");
let seconds = +prompt("Nhập giây (0-59):");

if (hours<0||hours>23||minutes<0||minutes>59||seconds<0||seconds>59) {
    alert("Thời gian không hợp lệ!");
} else {
    let period="AM";
    if (hours>=12){
        period="PM";
    }
    let hours12=hours % 12;
    if (hours12===0) {
        hours12=12;
    }

    if (hours12<10){
        hours12 = "0" +hours12;
    } 
    if (minutes<10){
        minutes = "0" +minutes;
    }
    if (seconds<10){
        seconds = "0" +seconds;
    }
    alert(`${hours12}:${minutes}:${seconds} ${period}`);
}
