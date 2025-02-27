let r = parseFloat(prompt(`Nhập bán kính của hình cầu:`));
let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
let surfaceArea = 4 * Math.PI * Math.pow(r, 2);
let circumference = 2 * Math.PI * r;
document.write(`Thể tích hình cầu là:${volume} <br> ` );
document.write(`Diện tích bề mặt hình cầu là: ${surfaceArea} <br>   `);
document.write(`Chu vi lớn nhất của hình cầu là:${circumference}<br> `);