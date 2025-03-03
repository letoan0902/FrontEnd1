let character = prompt("Nhập ký tự");
if (character.length > 1 || !isNaN(character)){
    alert("không phải chữ cái");
} else {
    alert("Là chữ cái");
}