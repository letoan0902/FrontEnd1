 

let courses = localStorage.getItem("courses");

if(courses){
    courses=JSON.parse(courses);
} else {
    const courses = [
        {
          id: 1,
          content: 'Learn Javascript Session 01',
          dueDate: '2023-04-17',
          status: 'Pending',
          assignedTo: 'Anh Bách',
        },
        {
          id: 2,
          content: 'Learn Javascript Session 2',
          dueDate: '2023-04-17',
          status: 'Pending',
          assignedTo: 'Lâm th',
        },
        {
          id: 3,
          content: 'Learn CSS Session 1',
          dueDate: '2023-04-17',
          status: 'Pending',
          assignedTo: 'Hiểu Ci Ốt Ốt',
        }
    ];
    localStorage.setItem("courses",JSON.stringify(courses));
}


let tbody = document.getElementById("tbody");
let content = document.getElementById("content");
let date = document.getElementById("date");
let statusUser = document.getElementById("status");
let username = document.getElementById("username");
let button = document.getElementById("button");
let editForm = document.getElementById("editForm");
let contentEdit = document.getElementById("contentEdit");
let dateEdit = document.getElementById("dateEdit");
let statusUserEdit = document.getElementById("statusEdit");
let usernameEdit = document.getElementById("usernameEdit");
let buttonEdit = document.getElementById("buttonEdit");

let editingCourseId;

courses.forEach(element=> {
    let addCourse = {
                id: element.id,
                content: element.content,
                dueDate: element.dueDate,
                status: element.status,
                assignedTo: element.assignedTo,
            }
        let newTr = document.createElement("tr");
        newTr.id = `${addCourse.id}`;
        newTr.innerHTML=`
                    <th scope="row">${addCourse.id}</th>
                    <td>${addCourse.content}</td>
                    <td>${addCourse.dueDate}</td>
                    <td>${addCourse.status}</td>
                    <td>${addCourse.assignedTo}</td>
                    <td class="edit"><button class="btn-info">Sửa</button></td>
                    <td class="delete"><button class="btn-info">Xóa</button></td>`

        let edit = newTr.querySelector(".edit");
        let deleteTr = newTr.querySelector(".delete");

        deleteTr.addEventListener("click",function(){
            newTr.remove();
            courses = courses.filter(course => course.id !== addCourse.id);
            localStorage.setItem("courses",JSON.stringify(courses));

        });

        edit.addEventListener("click",function(){
            editForm.style.display="block";
            editingCourseId = addCourse.id;

            contentEdit.value=addCourse.content;
            dateEdit.value=addCourse.dueDate;
            statusUserEdit.value=addCourse.status;
            usernameEdit.value=addCourse.assignedTo;
        });
        tbody.appendChild(newTr);
});


button.addEventListener("click",function(event){
    event.preventDefault();
    if(content.value==""||date.value==""||statusUser.value==""||username.value==""){
        alert("Dữ liệu không được để trống");
    } else {
        let addCourse = {
                id: courses.length+1,
                content: content.value,
                dueDate: date.value,
                status: statusUser.value,
                assignedTo: username.value,
            }
        courses.push(addCourse);
        let newTr = document.createElement("tr");
        newTr.id = `${addCourse.id}`;
        newTr.innerHTML=`
                    <th scope="row">${addCourse.id}</th>
                    <td>${addCourse.content}</td>
                    <td>${addCourse.dueDate}</td>
                    <td>${addCourse.status}</td>
                    <td>${addCourse.assignedTo}</td>
                    <td class="edit"><button class="btn-info">Sửa</button></td>
                    <td class="delete"><button class="btn-info">Xóa</button></td>`
        content.value = "";
        date.value = "";
        statusUser.value="";
        username.value="";

        let edit = newTr.querySelector(".edit");
        let deleteTr = newTr.querySelector(".delete");

        deleteTr.addEventListener("click",function(){
            newTr.remove();
            courses = courses.filter(course => course.id !== addCourse.id);
        localStorage.setItem("courses",JSON.stringify(courses));
        });

        edit.addEventListener("click",function(){
            editForm.style.display="block";
            editingCourseId = addCourse.id;

            contentEdit.value=addCourse.content;
            dateEdit.value=addCourse.dueDate;
            statusUserEdit.value=addCourse.status;
            usernameEdit.value=addCourse.assignedTo;
        });
        tbody.appendChild(newTr);
        localStorage.setItem("courses",JSON.stringify(courses));
    }
});

buttonEdit.addEventListener("click", function() {
        let courseToEdit = courses.find(course => course.id === editingCourseId);
        console.log(courseToEdit.id);
        courseToEdit.content = contentEdit.value;
        courseToEdit.dueDate = dateEdit.value;
        courseToEdit.status = statusUserEdit.value;
        courseToEdit.assignedTo = usernameEdit.value;

        let rowToUpdate = document.getElementById(`${editingCourseId}`);
        if (rowToUpdate) {
            rowToUpdate.querySelector("td:nth-child(2)").textContent = courseToEdit.content;
            rowToUpdate.querySelector("td:nth-child(3)").textContent = courseToEdit.dueDate;
            rowToUpdate.querySelector("td:nth-child(4)").textContent = courseToEdit.status;
            rowToUpdate.querySelector("td:nth-child(5)").textContent = courseToEdit.assignedTo;
        }
        editForm.style.display = "none";
        localStorage.setItem("courses",JSON.stringify(courses));
});

