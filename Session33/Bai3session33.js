let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];
let select = document.getElementById("select");
let check = document.getElementById("check");
let ul = document.getElementById("ul");

let category = dish.map(element => element.category).filter((element,index,arr) => arr.indexOf(element)==index);
category.forEach(element => {
    let option = `<option value="${element}" id="${element}">${element}</option>`;
    select.innerHTML += option;
});
check.addEventListener("click",function(){
    let checkProduct = dish.filter(el => el.category==select.value);
    ul.innerHTML=``;
    checkProduct.forEach(element => {
        let product = `<li><b>Tên đồ ăn:</b> ${element.name} <b>- Danh mục:</b> ${element.category} </li> <br>`;
        ul.innerHTML+=product;
    });
});
dish.forEach(element=>{
    let product = `<li><b>Tên đồ ăn:</b> ${element.name} <b>- Danh mục:</b> ${element.category} </li> <br>`;
    ul.innerHTML += product;
});

