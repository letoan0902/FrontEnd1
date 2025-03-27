let foods = localStorage.getItem("foods");
if(foods){
    foods=JSON.parse(foods);
} else {
    foods=[
        {
            img: "https://hoasenfoods.vn/wp-content/uploads/2024/01/bun-bo-hue.jpg",
            textInfo: "Bún bò Huế",
            quantityLike: 0
        },
        {
            img: "https://static.hawonkoo.vn/hwks1/images/2023/07/cach-lam-banh-bong-lan-6.jpg",
            textInfo: "Bánh bông lan",
            quantityLike: 0
        },
        {
            img: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
            textInfo: "Cơm tấm Sài Gòn",
            quantityLike: 0
        }
    ];
}

let main = document.querySelector(".main");

function render(){
    main.innerHTML=`<h1 class="head">Bạn thích món nào nhất?🥘</h1>`;
    foods.forEach(element => {
        let div = document.createElement("div");
        div.className="foodList";
        div.innerHTML=`<img src="${element.img}" alt="">
            <div class="info">
                <h2 class="textInfo">${element.textInfo}</h2>
                <p class="quantityLike">❤️ ${element.quantityLike} lượt thích</p>
                <button class="btnLike">Thích +1</button>
            </div>`
        let btnLike = div.querySelector(".btnLike");
        btnLike.addEventListener("click",function(){
            element.quantityLike++;
            render();
        })
        main.appendChild(div);
        localStorage.setItem("foods",JSON.stringify(foods));
    });
}

render();