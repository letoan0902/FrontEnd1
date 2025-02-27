let date1 = new Date(prompt("date 1"));
let date2 = new Date(prompt("date 2"));
let difference = Math.abs(date2 - date1);
let daysDiff = difference / (1000 * 60 * 60 * 24);
alert("Độ lệch là " + daysDiff + " ngày");