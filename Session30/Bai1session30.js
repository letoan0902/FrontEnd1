let products = [
    {
        id: 1,
        name: "Mèn Mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "Mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "Cơm Lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "Bánh Đậu Xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh"
    }
];
let cards = [];
let choice = 0;
while(choice!=5){
    choice = +prompt(`--------MENU--------
        1. Hiển thị sản phẩm
        2. Chọn sản phẩm để mua
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá
        4. Tính số tiền thanh toán trong giỏ hàng
        5. Thoát`);
    switch (choice) {
        case 1:
            let results = "Danh sách sản phẩm:\n";
            for(let element of products){
                results += `Id: ${element.id}, Name: ${element.name}, Price: ${element.price}, Quantity: ${element.quantity}, Category: ${element.category}\n`;
            }
            alert(results);
            break;
        case 2:
            let buyId = +prompt("Nhập id muốn mua");
            let flag = 0;
            for(element of products){
                if(element.id===buyId){
                    flag =1;
                    let purchaseQuantity = +prompt("Nhập số lượng muốn mua:");
                    if(purchaseQuantity%1!=0){
                        alert("Số lượng không hợp lệ");
                        break;
                    } else if(element.quantity<purchaseQuantity){
                        alert(`Số lượng trong kho chỉ còn ${element.quantity}, vui lòng nhập số lượng ít hơn`);
                        break;
                    } else {
                        element.quantity = element.quantity - purchaseQuantity;
                        let addCard = {
                            id: element.id,
                            name: element.name,
                            price: element.price,
                            quantity: purchaseQuantity,
                            category: element.category
                        }
                        cards.push(addCard);
                        break;
                    }
                }
            }
            if(flag==0){
                alert("Không tìm thấy id");
            }
            break;
        case 3:
            let choose = +prompt(`Lựa chọn
                            1. Tăng dần
                            2. Giảm dần`);
            if(choose == 1){
                products = products.sort((a,b) => a.price - b.price);
                alert("Đã sắp xếp theo giá tăng dần!");
            } else if(choose ==2){
                products = products.sort((a,b) => b.price - a.price);
                alert("Đã sắp xếp theo giá giảm dần!");
            } else {
                alert('Lựa chọn không hợp lệ');
            }
            break;
        case 4:
            let totalPayment =0;
            cards.forEach(element => totalPayment += element.price*element.quantity);
            alert(` Tổng số tiền trong giỏ hàng của bạn là: ${totalPayment}`);
            break;
        case 5:
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}