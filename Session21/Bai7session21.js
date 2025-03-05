let money = +prompt("Tiền ban đầu: (Nhập số");
let moneybefo=money;
let interest = +prompt("Lãi suất: (Nhập số)");
let month = +prompt("Số tháng gửi: (Nhập số)");
for(let i=0;i<month;i++){
    total = money*(interest/100);
    money += total;
}
let totalAf=money-moneybefo;
document.write(`Tiền lãi: ${totalAf.toFixed(3)} Tiền nhận được: `+ (money));
