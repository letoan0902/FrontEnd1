let arr = [];
while(1){
    let choice = +prompt(`-----------MENU-----------\n1. Nhập vào mảng \n2. Hiển thị mảng\n3. Thêm phần tử\n4. Sửa phần tử\n5. Xóa phần tử\n6. Thoát\nLựa chọn của bạn:`);
    if(choice==1){
        arr = prompt("Nhập các giá trị cách nhau bằng ,").split(",");
    } else if(choice==2){
        alert(arr);
    } else if(choice==3){
        arr.push(prompt("Nhập giá trị"));
    } else if(choice==4){
        let index = +prompt("Nhập vị trí index:");
        let value = prompt('Nhập giá trị:');
        arr[index]=value;
    } else if(choice==5){
        let index = +prompt('Nhập vị trí index muốn xóa');
        arr.splice(index,1);
    } else if(choice==6){
        break;
    } else {
        alert("Sai định dạng")
    }
}