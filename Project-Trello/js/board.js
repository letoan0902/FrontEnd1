// Logic ô checkbox Filter (chỉ chọn 1)
document.querySelectorAll(".checkboxFilter").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.querySelectorAll(".checkboxFilter").forEach((cb) => {
        if (cb !== this) cb.checked = false;
      });
    }
  });
});


// Logic ô textarea 
let myEditor;
document.addEventListener("DOMContentLoaded", function () {
  ClassicEditor.create(document.querySelector("#editor"))
    .then((editor) => {
      myEditor = editor;
    })
    .catch((error) => {
      console.error("Có lỗi xảy ra khi khởi tạo CKEditor:", error);
    });
});

function handleGetValue() {
  console.log("Nội dung:", myEditor.getData());
}


let overlayModal = document.querySelector(".overlayModal");
let overlayModal2 = document.querySelector(".overlayModal2");

let listYourBoards = document.querySelector(".listYourBoards");
let listBoards = [...user.boards];

let boardId = -1;
function renderListBoards(){
  listYourBoards.innerHTML="";
  listBoards.forEach(element => {
    let yourBoardInfo = document.createElement("div");
    yourBoardInfo.className = "yourBoardInfo";
    yourBoardInfo.innerHTML=`
              <div class="backgroundBoardInfo">
              ${element.backdrop
                  ? `<img class="backgroundYourBoard" src="${element.backdrop}" alt="" />`
                  : ""}
              </div>
              <span class="textYourBoard">${element.title}</span>`
    let backgroundBoardInfo = yourBoardInfo.querySelector(".backgroundBoardInfo");
    backgroundBoardInfo.style.background = element.color;
    listYourBoards.appendChild(yourBoardInfo);
    yourBoardInfo.addEventListener("click", function(){
      let listYourBoard = document.querySelectorAll(".yourBoardInfo");
      listYourBoard.forEach(el => el.classList.remove("selectYourBoard"));
        yourBoardInfo.classList.add("selectYourBoard");
        changeId(element.id);
    });
  })
}

function changeId (newId){
  boardId=newId;
  
}

renderListBoards();









































































// Logic Modal Date 
let currentField = "startDate";
let calendar;

function initializeCalendar(enableTime = false) {
  if (calendar) {
    calendar.destroy();
  }
  calendar = flatpickr("#calendar", {
    inline: true,
    defaultDate: "today",
    dateFormat: enableTime ? "d/m/Y H:i" : "d/m/Y",
    enableTime: enableTime,
    disableMobile: true,
    time_24hr: true,
    onChange: function (selectedDates, dateStr) {
      if (currentField === "startDate") {
        document.getElementById("startDate").value = dateStr;
      } else if (currentField === "dueDate") {
        document.getElementById("dueDate").value = dateStr;
      }
    },
  });
}

document.getElementById("dueDateCheck").addEventListener("change", function () {
  if (this.checked) {
    currentField = "dueDate";
    initializeCalendar(true);
  } else {
    currentField = "startDate";
    initializeCalendar(false);
    document.getElementById("dueDate").value = "";
  }
});

document.querySelector(".dateEdit").addEventListener("click", function () {
  overlayModal2.classList.add("show");
  document.querySelector(".modalDate").style.display = "block";
  if (!calendar) {
    initializeCalendar();
  }
  // Gán ngày hiện tại cho ô input startDate
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0 nên +1
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  document.getElementById("startDate").value = formattedDate;
});





