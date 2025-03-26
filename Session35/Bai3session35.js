

let products=localStorage.getItem("products");
if(products){
    products=JSON.parse(products);
} else {
    products = [
        {
            id: 1,
            name: 'Laptop Dell XPS 15',
            price: 35990000,
            image: 'https://mayxaugiacao.com/wp-content/uploads/2022/02/dell-xps-15-9510-mayxaugiacao-247x247.jpg',
            description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
        },
        {
            id: 2,
            name: 'iPhone 15 Pro Max',
            price: 32990000,
            image: 'https://kimkhidienmayletrieu.vn/UserFiles/images/iphone15/iphone-15-pro2.jpg',
            description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
        },
        {
            id: 3,
            name: 'Samsung Galaxy S24 Ultra',
            price: 28990000,
            image: 'https://www.duchuymobile.com/images/detailed/68/s24-ultra-hg.jpg',
            description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
        },
        {
            id: 4,
            name: 'Tai nghe Sony WH-1000XM5',
            price: 7990000,
            image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
            description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
        },
        {
            id: 5,
            name: 'Apple Watch Series 9',
            price: 11990000,
            image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
            description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
        },
        {
            id: 6,
            name: 'Loa JBL Charge 5',
            price: 3990000,
            image: 'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/charge-5/Loa-JBL-Charge-5-chinh-hang-moi-nhat-anh-1.jpg',
            description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
        },
        {
            id: 7,
            name: 'AirPods Pro 2',
            price: 6199000,
            image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836',
            description: 'Tai nghe tiên tiến nhất của Apple với tính năng Chủ Động Khử Tiếng Ồn đẳng cấp Pro',
        }
    ];
    
}



localStorage.setItem("products",JSON.stringify(products));
let list = document.getElementById("list");
list.innerHTML = '';
products.forEach(element => {
    let item = `<div class="col">
          <div class="card  h-100">
            <img width="200px" height="250px" src="${element.image}" class="card-img-top" alt="anh">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <p class="card-text">${element.price.toLocaleString()} VNĐ</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
        `;
    list.innerHTML += item;
});

let search = document.getElementById("button");
let input = document.getElementById("search");
search.addEventListener("click",function(){
    let searchList = products.filter(element=> element.name.toLowerCase().includes(input.value.toLowerCase()));
    list.innerHTML = '';
    searchList.forEach(element => {
        let item = `<div class="col">
              <div class="card  h-100">
                <img width="200px" height="250px" src="${element.image}" class="card-img-top" alt="anh">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.description}</p>
                  <p class="card-text">${element.price.toLocaleString()} VNĐ</p>
                  <a href="#" class="btn btn-primary">Buy</a>
                </div>
              </div>
            </div>
            `;
        list.innerHTML += item;
    });
});
