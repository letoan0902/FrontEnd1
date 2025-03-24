function vnd(num) {
    return num.toLocaleString("vi", { style: "currency", currency: "VND" });
  }
  const products = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy A54",
      price: 7490000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    },
    {
      id: 2,
      name: "Laptop Dell Inspiron 15",
      price: 15990000,
      image:
        "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
    },
    {
      id: 3,
      name: "Tai nghe AirPods Pro",
      price: 4990000,
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    },
    {
      id: 4,
      name: "Đồng hồ thông minh Apple Watch",
      price: 8990000,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
    },
    {
      id: 5,
      name: "Máy ảnh Canon EOS M50",
      price: 12490000,
      image:
        "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    },
    {
      id: 6,
      name: "Loa Bluetooth JBL Flip 5",
      price: 2190000,
      image:
        "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
    },
    {
      id: 7,
      name: "Bàn phím cơ Logitech G Pro",
      price: 2490000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
    {
      id: 8,
      name: "Chuột không dây Logitech MX Master",
      price: 1890000,
      image:
        "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
    },
  ];
  const cart = [];
  let productList = document.querySelector("#product-list");
  renderProduct();
  function renderProduct() {
    productList.innerHTML = products
      .map(
        (value, index) =>
          `<div style="width:calc((100% - 10px)/2);text-align: center;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);padding:10px">
        <img src="${value.image}"></img>
        <h3>${value.name}</h3>
        <p style="color:red;margin-bottom: 10px;">${vnd(value.price)}</p>
        <button onclick="addProductToCart(${index})" style="color:white;background-color: green;padding:5px">Thêm vào giỏ hàng</button></div>`
      )
      .join("");
  }
  function addProductToCart(index) {
    if (cart.find((value) => value.id === products[index].id)) {
      cart.find((value) => value.id === products[index].id).quantity++;
    } else {
      cart.push({
        id: products[index].id,
        name: products[index].name,
        price: products[index].price,
        quantity: 1,
      });
    }
    renderCart();
  }
  let cartList = document.querySelector("#cart-list");
  let total = document.querySelector("#total-cart");
  renderCart();
  function renderCart() {
    if (cart.length === 0) {
      cartList.innerHTML = `<p style="text-align: center;color:gray;margin: 10px">Giỏ hàng trống</p>`;
    } else {
      cartList.innerHTML = cart
        .map(
          (value, index) =>
            `<div style="display: flex;justify-content: space-between;border-bottom: 1px solid gainsboro;border-radius: 0;margin: 10px">
        <div>
        <p>${value.name}</p>
        <p style="color:red">${vnd(value.price)} x ${value.quantity}</p>
        </div>
        <div>
        <button onclick="productReduce(${index})" style="font-size:20px;width: 25px;height: 25px;background-color: green">-</button>
        <span>${value.quantity}</span>
        <button onclick="productIncrease(${index})" style="font-size:20px;width: 25px;height: 25px;background-color: green">+</button>
        <button onclick="deleteCart(${index})" style="font-size:24px;width: 30px;height: 30px;background-color: red">x</button></div></div>`
        )
        .join("");
    }
    total.textContent = vnd(
      cart.reduce((per, cur) => per + cur.price * cur.quantity, 0)
    );
  }
  function productIncrease(index) {
    cart[index].quantity++;
    renderCart();
  }
  function productReduce(index) {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    renderCart();
  }
  function deleteCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  function pay() {
    alert(
      cart.reduce((per, cur) => per + cur.price * cur.quantity, 0) === 0
        ? "Giỏ hàng đang trống"
        : "Cảm ơn đã mua hàng!\nTổng giá trị: " +
            vnd(cart.reduce((per, cur) => per + cur.price * cur.quantity, 0))
    );
    cart.length = 0;
    renderCart();
  }