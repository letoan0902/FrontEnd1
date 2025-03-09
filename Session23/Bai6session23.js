let input = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy (,):");
let arr = input.split(",");
let result = [];
for (let element of arr) {
    element=element.trim();
    if (element==="false") {
        element = false;
    } else if (element==="true") {
        element = true;
    } else if (element==="null") {
        element = null;
    } else if (element==="undefined") {
        element = undefined;
    } else if (element==="") {
        element = "";
    } else if (!isNaN(element)) {
        element= +element;
    } else {
        element=element;
    }
    if (element===false||element===0||element===""||element===null||element===undefined){
    } else {
        result.push(element);
    }
}
alert(result);