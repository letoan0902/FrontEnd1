let r = +prompt("bán kính:");
let h = +prompt("chiều cao:");
let areaSurr = 2*3.14*r*h;
let totalArea = 2*3.14*r*(h+r);
let volume = 3.14*r*r*h;
let bottomCir = 2*3.14*r;
document.write(`Diện tích xung quanh: ${areaSurr}</br>
                Diện tích toàn phần: ${totalArea}</br>
                Thể tích hình trụ: ${volume}</br>
                Chu vi đáy: ${bottomCir}`);