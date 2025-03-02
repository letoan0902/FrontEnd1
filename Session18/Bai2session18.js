let math = +prompt("Math");
let literature = +prompt("Literature");
let english = +prompt("English");
let average = (math + literature + english)/3;
if (average>=8 && average<=10){
    alert("Giỏi");
} else if (average>=6.5){
    alert("Khá");
} else if (average>=5){
    alert("Trung bình");
} else {
    alert("Yếu");
}