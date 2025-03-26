let h1 = document.getElementById("h1");
let add = document.getElementById("add");
let closeAdd = document.getElementById("closeAdd");
let button = document.getElementById("button");
let nameW = document.getElementById("name");
let url = document.getElementById("url");
let main = document.getElementById("main");


let bookMarks = localStorage.getItem("bookMarks");
if(bookMarks){
    bookMarks=JSON.parse(bookMarks);
    console.log(bookMarks);
} else {
    bookMarks=[];
}

function render(){
    main.innerHTML=``;
    bookMarks.forEach((element,index) => {
        let div = document.createElement("div");
        div.className = "block";
        div.innerHTML=`
                <p class="closeBlock">✖︎</p>
                <h3 class="contentBlock">${element.name}</h3>
            `
        let closeBlock = div.querySelector(".closeBlock");
        closeBlock.addEventListener("click",function(event){
            event.stopPropagation();
            bookMarks.splice(index,1);
            console.log(bookMarks);
            render();
        });
        div.addEventListener("click", function(){
            window.open(element.url, "_blank");
        });
        
        main.appendChild(div);
        localStorage.setItem("bookMarks",JSON.stringify(bookMarks));
    });

}

h1.addEventListener("click",function(){
    add.style.display = "block";

})

closeAdd.addEventListener("click",function(){
    add.style.display = "none";
})

button.addEventListener("click",function(){
    if(nameW.value==""||url.value==""){
        alert("Thông tin không được để trống");
    } else {
        let bookMark = {
            name: nameW.value,
            url: url.value
        }
        bookMarks.push(bookMark);
        nameW.value="";
        url.value="";
        console.log(bookMarks);
        add.style.display = "none";
        render();
    }

});
render();