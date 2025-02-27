
let a = +(prompt("a:"));
let b = +(prompt("b:"));
let c = +(prompt("c:"));

if (a === 0) {
    if (b === 0) {
        alert("không hợp lệ");
    } else {
        let x = -c/b;
        alert("x = " + x);
    }
} else {
    let delta = b*b-4*a*c;
    if (delta < 0) {
        alert("vô nghiệm");
    } else if (delta === 0) {
        let x = -b/(2*a);
        alert("x = " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        alert("x1 = " + x1 + "\n x2 = " + x2);
    }
}
