let add = document.querySelector(".add");
let modalAdd = document.querySelector(".modalAdd");
let addButton = document.querySelector("#addButton");
let tbody = document.querySelector("#tbody");

let categorys=localStorage.getItem("categorys");
if(categorys){
    categorys=JSON.parse(categorys);
} else {
    categorys=[
        {
            categoryCode: "DM001",
            name: "Điện thoại",
            status: "statusOn"
        },
        {
            categoryCode: "DM002",
            name: "Đồ điện tử",
            status: "statusOff"
        },
    ];
}

let categoryIndex = -1;

function render(){
    tbody.innerHTML = "";
    categorys.forEach((element,index) => {
        let tr = document.createElement("tr");
        let statusText = element.status === "statusOn" ? "Đang hoạt động" : "Ngừng hoạt động";
        tr.innerHTML=`
                    <td class="col-2">${element.categoryCode}</td>
                    <td class="col-5">${element.name}</td>
                    <td class="col-3"><span class="${element.status}">● ${statusText}</span></td>
                    <td class="col-2">
                        <button class="btn btn-outline-danger btn-sm delete"><i class="bi bi-trash"></i></button>
                        <button class="btn btn-outline-warning btn-sm edit" data-bs-toggle="modal" data-bs-target="#editCategoryModal"><i class="bi bi-pencil"></i></button>
                    </td>`
        let deleteCategory = tr.querySelector(".delete");
        deleteCategory.addEventListener("click",function(){
            categorys = categorys.filter(el => el.categoryCode != element.categoryCode);
            render();
        })
        let edit = tr.querySelector(".edit");
        edit.addEventListener("click",function(){
            categoryIndex = index;
            let modalEdit = document.querySelector(".modalEdit");
            let categoryCode = modalEdit.querySelector("#categoryCode");
            categoryCode.value = element.categoryCode;
            let categoryName = modalEdit.querySelector("#categoryName");
            categoryName.value = element.name; 
            modalEdit.querySelector(`input[name="status"][value="${element.status}"]`).checked = true;
        });
        tbody.appendChild(tr);
    });
    localStorage.setItem("categorys", JSON.stringify(categorys))
}

let editButton = document.querySelector("#editButton");
editButton.addEventListener("click", function() {
    let modalEdit = document.querySelector(".modalEdit");
    let categoryCode = modalEdit.querySelector("#categoryCode");
    let categoryName = modalEdit.querySelector("#categoryName");
    let selectedStatus = modalEdit.querySelector('input[name="status"]:checked').value;

    if (categoryCode.value === "") {
        categoryCode.classList.add("is-invalid");
    } else if (categoryName.value === "") {
        categoryName.classList.add("is-invalid");
    } else {
        categoryCode.classList.remove("is-invalid");
        categoryName.classList.remove("is-invalid");
        categorys[categoryIndex].categoryCode = categoryCode.value;
        categorys[categoryIndex].name = categoryName.value;
        categorys[categoryIndex].status = selectedStatus;
        let modal = bootstrap.Modal.getInstance(document.getElementById('editCategoryModal'));
        modal.hide();
        render();
    }
});

addButton.addEventListener("click",function(){
    let modalAdd = document.querySelector(".modalAdd");
    let categoryCode = modalAdd.querySelector("#categoryCode");
    let categoryName = modalAdd.querySelector("#categoryName");
    let selectedStatus = modalAdd.querySelector('input[name="status"]:checked').value;
    if (categoryCode.value === "") {
        categoryCode.classList.add("is-invalid");
    } else if (categoryName.value === "") {
        categoryName.classList.add("is-invalid");
    } else {
        categoryCode.classList.remove("is-invalid");
        categoryName.classList.remove("is-invalid");
        let addCategory = {
            categoryCode: categoryCode.value,
            name: categoryName.value,
            status: selectedStatus
        }
        categorys.push(addCategory);
        let modal = bootstrap.Modal.getInstance(document.getElementById('addCategoryModal'));
        modal.hide();
        render();
    }
})
render();