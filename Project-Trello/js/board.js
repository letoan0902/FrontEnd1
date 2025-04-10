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
let currentStatusFilter = null;
let currentDateFilters = [];
let currentKeyword = "";
let overlayModal = document.querySelector(".overlayModal");
let overlayModal2 = document.querySelector(".overlayModal2");
let overlayModal3 = document.querySelector(".overlayModal3");
let modalCloseBoard = document.querySelector(".modalCloseBoard");
let modalDetail = document.querySelector(".modalDetail");

let checkStatusDetail = document.querySelector("#checkbox-18");
let titleBoardDetail = document.querySelector(".titleBoardDetail");
let textSelectDetail = document.querySelector(".textSelectDetail");
let saveDetail = document.querySelector(".saveDetail");
let cancelDetail = document.querySelector(".cancelDetail");
let tempTags = [];
let labelId = 0;
let typeLabel = null;
let labelEditId = 0;
let totalTag = null;
let typeClose = null;

let errorMessage = document.querySelector(".errorMessage");
let btnCloseError = document.querySelector(".btnCloseError");
let textBodyError = document.querySelector(".textBodyError");
let successSignIn = document.querySelector(".successSignIn");

let listBoards = user.boards.filter((board) => board.is_closed != true);
let listYourBoards = document.querySelector(".listYourBoards");
function renderListBoards() {
  listBoards = user.boards.filter((board) => board.is_closed != true);

  listYourBoards.innerHTML = "";
  listBoards.forEach((element) => {
    let yourBoardInfo = document.createElement("div");
    yourBoardInfo.className = "yourBoardInfo";
    yourBoardInfo.innerHTML = `
              <div class="backgroundBoardInfo">
              ${
                element.backdrop
                  ? `<img class="backgroundYourBoard" src="${element.backdrop}" alt="" />`
                  : ""
              }
              </div>
              <span class="textYourBoard">${element.title}</span>`;

    let backgroundBoardInfo = yourBoardInfo.querySelector(
      ".backgroundBoardInfo"
    );
    backgroundBoardInfo.style.background = element.color;

    listYourBoards.appendChild(yourBoardInfo);

    if (element.id === boardId) {
      yourBoardInfo.classList.add("selectYourBoard");
    }

    yourBoardInfo.addEventListener("click", function () {
      let listYourBoardInfo = document.querySelectorAll(".yourBoardInfo");
      listYourBoardInfo.forEach((el) => el.classList.remove("selectYourBoard"));
      yourBoardInfo.classList.add("selectYourBoard");
      changeId(element.id);
    });
  });
}

let mainBoard = document.querySelector(".mainBoard");
let headerBoard = document.querySelector(".headerBoard");
function changeId(newId) {
  boardId = newId;
  let board = listBoards.find((element) => element.id == boardId);

  // Logic header
  headerBoard.innerHTML = `<div class="block1">
            <h2 class="textInfoBoard">${board.title}</h2>
            <div class="starredBoard">
              <img
                class="iconStarred"
                src="../css/data/icons/starred-board.png"
                alt=""
              />
            </div>
            <button class="btnBoard">
              <img
                class="iconBtnBoard"
                src="../css/data/icons/btnBoard.png"
                alt=""
              />
              <span class="textBtnBoard">Board</span>
            </button>
            <div class="tableBoard">
              <img
                class="iconTableBoard"
                src="../css/data/icons/table-board.png"
                alt=""
              />
              <span class="textTable">Table</span>
            </div>
            <div class="btncloseBoard">
              <img src="../css/data/icons/close-board.png" alt="">
              <span class="textCloseBoard">Close this board</span>
            </div>
          </div>
          <div class="block2">
            <img
              class="iconFilter"
              src="../css/data/icons/icon-filter.png"
              alt=""
            />
            <span class="textFilterBlock2">Filter</span>
          </div>`;

  let starredBoard = headerBoard.querySelector(".starredBoard");
  starredBoard.addEventListener("click", function () {
    let boardStarred = listBoards.find((element) => element.id == boardId);
    if (boardStarred.is_starred == true) {
      boardStarred.is_starred = false;
    } else {
      boardStarred.is_starred = true;
      successSignIn.classList.add("displayMessage");
      setTimeout(() => {
        successSignIn.classList.remove("displayMessage");
      }, 1000);
    }
    renderColorStarred();
    saveData();
  });
  renderColorStarred();

  let btncloseBoard = headerBoard.querySelector(".btncloseBoard");
  btncloseBoard.addEventListener("click", function () {
    typeClose = "closeBoard";
    showModalClose();
  });

  let block2 = document.querySelector(".block2");
  block2.addEventListener("click", function () {
    modalFilter.classList.add("displayModalFilter");
    overlayModal.classList.add("show");
  });

  mainBoard.innerHTML = `<div class="addListCard">
            <div class="block1AddList">
              <img
                class="iconAddCard"
                src="../css/data/icons/plus-board.png"
                alt=""
              />
              <span class="textFooterTask">Add another list</span>
            </div>
            <div class="block2AddList">
              <input class="inputAddList" type="text" placeholder="Enter list name…">
              <div class="blockAddList">
                <button class="btnAddList">Add list</button>
                <span class="closeAddList">
                  <img src="../css/data/icons/close-add-a-card-board.png" alt="">
                </span>
              </div>
            </div>
          </div>`;

  let addListCard = mainBoard.querySelector(".addListCard");
  let block1AddList = addListCard.querySelector(".block1AddList");
  let block2AddList = addListCard.querySelector(".block2AddList");

  let clickList = 0;
  addListCard.addEventListener("click", function () {
    clickList++;
    if (clickList === 1) {
      let inputAddList = addListCard.querySelector(".inputAddList");
      let btnAddList = addListCard.querySelector(".btnAddList");
      let closeAddList = addListCard.querySelector(".closeAddList");

      block1AddList.style.display = "none";
      block2AddList.style.display = "flex";

      closeAddList.addEventListener("click", function () {
        block1AddList.style.display = "flex";
        block2AddList.style.display = "none";
        changeId(boardId);
      });

      btnAddList.addEventListener("click", function () {
        textBodyError.innerHTML = ``;
        let checkTitle = checkData(inputAddList.value.trim(), "title");
        if (checkTitle != "valid") {
          let span = document.createElement("span");
          span.className = "textDetailed";
          span.textContent = `${checkTitle}`;
          textBodyError.appendChild(span);
          errorMessage.classList.add("displayMessage");
          setTimeout(() => {
            errorMessage.classList.remove("displayMessage");
          }, 2000);
          btnCloseError.addEventListener("click", function () {
            errorMessage.classList.remove("displayMessage");
          });
        } else {
          successSignIn.classList.add("displayMessage");
          setTimeout(() => {
            successSignIn.classList.remove("displayMessage");
          }, 1000);
          let newList = {
            created_at: new Date().toISOString(),
            id:
              board.lists.length > 0
                ? board.lists[board.lists.length - 1].id + 1
                : 201,
            tasks: [],
            title: inputAddList.value.trim(),
          };
          board.lists.push(newList);
          saveData();
          changeId(boardId);
        }
      });
    }
  });

  let lists = [...board.lists];
  lists.forEach((element) => {
    let listMainCard = document.createElement("div");
    listMainCard.className = "listMainCard";

    listMainCard.innerHTML = `<div class="headerMainCard">
              <p class="textMainCard">${element.title}</p>
              <input type="text" class="inputEditList" value="${element.title}">
              <div class="iconsHeaderMainCard">
                <img
                  class="collapseMainCard"
                  src="../css/data/icons/collapse-maincard.png"
                  alt=""
                />
                <div class="iconMoreTask">
                  <img src="../css/data/icons/more-maincard.png" alt="" />
                </div>
              </div>
            </div>
            <div class="listTasks">
            </div>
            <div class="footerTask">
                <div class="block1Footer">
                <img
                  class="iconPlusTask"
                  src="../css/data/icons/plus-board.png"
                  alt=""
                />
                <span class="textFooterTask">Add a card</span>
                <div class="btnDeleteList">
                  <img
                    class="iconbtnDeleteList"
                    src="../css/data/icons/list-addcard-board.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="block2Footer">
                <textarea class="inputAddACard" placeholder="Enter a title or paste a link"></textarea>
                <div class="blockAddCard">
                  <button class="btnAddACard">Add card</button>
                  <span class="closeAddACard">
                    <img src="../css/data/icons/close-add-a-card-board.png" alt="">
                  </span>
                </div>
              </div>
            </div>`;

            
    // Logic chỉnh sửa list
    let headerMainCard = listMainCard.querySelector(".headerMainCard");
    headerMainCard.addEventListener("click", function () {
      let textMainCard = headerMainCard.querySelector(".textMainCard");
      let inputEditList = headerMainCard.querySelector(".inputEditList");
      textMainCard.style.display = "none";
      inputEditList.style.display = "block";
      inputEditList.focus();
    });

    let inputEditList = headerMainCard.querySelector(".inputEditList");
    inputEditList.addEventListener("blur", function () {
      let newTitle = inputEditList.value.trim();
      let checkTitle = checkData(newTitle, "title");

      if (checkTitle !== "valid") {
        showMessageErorr(checkTitle);
        inputEditList.value = element.title;
      } else if(element.title !==newTitle){
        element.title = newTitle;
        showMessageComplete();
        saveData();
      }

      let textMainCard = headerMainCard.querySelector(".textMainCard");
      textMainCard.textContent = element.title;
      textMainCard.style.display = "block";
      inputEditList.style.display = "none";
    });

    // Logic hiện các task
    let listTasks = listMainCard.querySelector(".listTasks");
    let taskGroup = [...element.tasks];
    taskGroup.forEach((task) => {
      let taskInfo = document.createElement("div");
      taskInfo.className = "taskInfo";
      taskInfo.setAttribute("data-status", task.status);
      taskInfo.setAttribute("data-due-date", task.due_date || "");
      taskInfo.innerHTML = `
      ${
        task.status == "pending"
          ? `<span class="textTask">${task.title}</span>`
          : `<img class="iconCompleteTask" src="../css/data/icons/complete-board.png" alt=""/> <span class="textTask textTaskComplete">${task.title}</span>`
      }`;

      // Logic ấn vào từng task
      taskInfo.addEventListener("click", function () {
        modalDetail.classList.add("displayModalDetail");
        overlayModal.classList.add("show");
        taskId = task.id;
        listId = element.id;
        tempTags = [...task.tag];
        if (task.status == "pending") {
          checkStatusDetail.checked = false;
        } else {
          checkStatusDetail.checked = true;
        }
        titleBoardDetail.textContent = task.title;
        textSelectDetail.textContent = element.title;
        myEditor.setData(`${task.description}`);
        renderLabel();
      });

      let deleteTask = document.querySelector(".deleteTask");

      deleteTask.addEventListener("click", function () {
        typeClose = "removeTask";
        showModalClose();
      });

      listTasks.appendChild(taskInfo);
    });

    // Logic thêm 1 task mới
    let addCard = listMainCard.querySelector(".footerTask");
    let block1Footer = addCard.querySelector(".block1Footer");
    let block2Footer = addCard.querySelector(".block2Footer");

    let clickTask = 0;
    addCard.addEventListener("click", function () {
      clickTask++;
      if (clickTask === 1) {
        block1Footer.style.display = "none";
        block2Footer.style.display = "block";

        let inputCard = addCard.querySelector(".inputAddACard");
        let btnAddACard = addCard.querySelector(".btnAddACard");
        let closeAddACard = addCard.querySelector(".closeAddACard");

        closeAddACard.addEventListener("click", function () {
          block1Footer.style.display = "flex";
          block2Footer.style.display = "none";
          changeId(boardId);
        });

        btnAddACard.addEventListener("click", function () {
          textBodyError.innerHTML = ``;
          let checkTitle = checkData(inputCard.value.trim(), "title");
          if (checkTitle != "valid") {
            showMessageErorr(checkTitle);
          } else {
            showMessageComplete();
            let newTask = {
              created_at: new Date().toISOString(),
              description: "",
              due_date: false,
              id:
                element.tasks.length > 0
                  ? element.tasks[element.tasks.length - 1].id + 1
                  : 301,
              status: "pending",
              tag: [],
              title: inputCard.value.trim(),
            };
            element.tasks.push(newTask);
            saveData();
            changeId(boardId);
          }
        });
      }
    });

    // logic xóa list
    let deleteList = listMainCard.querySelector(".btnDeleteList");
    deleteList.addEventListener("click", function (event) {
      event.stopPropagation();
      listId = element.id;
      typeClose = "removeList";
      showModalClose();
    });
    mainBoard.insertBefore(listMainCard, addListCard);
  });
  applyFilter();
}

// Logic thay đổi màu ô starred
function renderColorStarred() {
  let boardStarred = listBoards.find((element) => element.id == boardId);
  let starredBoard = document.querySelector(".starredBoard");
  if (boardStarred.is_starred) {
    starredBoard.style.background = "#71a9fc";
  } else {
    starredBoard.style.background = "#F1F2F4";
  }
}
renderListBoards();
changeId(boardId);

// Logic đóng bảng
let btnAngreeCLoseBoard = document.querySelector(".btnAngreeCLoseBoard");
let btnCancelCloseBoard = document.querySelector(".btnCancelCloseBoard");

btnCancelCloseBoard.addEventListener("click", function () {
  modalCloseBoard.classList.remove("displayModalCloseBoard");
  overlayModal.classList.remove("show");
  overlayModal2.classList.remove("show");
});

let boardsSidebar = document.querySelector(".boardsSidebar");
let starredBoards = document.querySelector(".starredBoards");
let closeBoards = document.querySelector(".closeBoards");

boardsSidebar.addEventListener("click", function () {
  openBoards = true;
  saveData();
  window.location.href = "../pages/index.html";
});
starredBoards.addEventListener("click", function () {
  openStarredBoards = true;
  saveData();
  window.location.href = "../pages/index.html";
});
closeBoards.addEventListener("click", function () {
  openClosedBoards = true;
  saveData();
  window.location.href = "../pages/index.html";
});

// Logic từng task

cancelDetail.addEventListener("click", function () {
  modalDetail.classList.remove("displayModalDetail");
  overlayModal.classList.remove("show");
});

saveDetail.addEventListener("click", function () {
  let board = listBoards.find((element) => element.id == boardId);
  let totalList = [...board.lists];

  let listInfo = totalList.find((list) => list.id == listId);
  let totalTask = [...listInfo.tasks];

  let taskInfo = totalTask.find((task) => task.id == taskId);

  let taskToUpdate = taskInfo;

  if (tempId && tempId !== listId) {
    let listMove = totalList.find((list) => list.id == tempId);
    if (listMove) {
      listInfo.tasks = listInfo.tasks.filter((task) => task.id !== taskId);

      let taskToMove = { ...taskInfo };
      if (listMove.tasks.length === 0) {
        taskToMove.id = 301;
      } else {
        let lastTaskId = listMove.tasks[listMove.tasks.length - 1].id;
        taskToMove.id = lastTaskId + 1;
      }
      listMove.tasks.push(taskToMove);

      listId = tempId;
      taskId = taskToMove.id;
      tempId = null;
      taskToUpdate = taskToMove;
    }
  }

  let checkDescription = checkData(myEditor.getData(), "description");
  if (checkDescription !== "valid") {
    showMessageErorr(checkDescription);
  } else {
    showMessageComplete();
    taskToUpdate.description = myEditor.getData();
    if (checkStatusDetail.checked) {
      taskToUpdate.status = "complete";
    } else {
      taskToUpdate.status = "pending";
    }
    if (startDateISO) {
      taskToUpdate.created_at = startDateISO;
    } else {
      taskToUpdate.created_at = new Date().toISOString();
    }
    taskToUpdate.due_date = dueDateISO;
    taskToUpdate.tag = [...tempTags];
    labelId = 0;
    showMessageComplete();
    modalDetail.classList.remove("displayModalDetail");
    overlayModal.classList.remove("show");
    saveData();
    changeId(boardId);
  }
});

//  logic In List
let selectModalDetail = document.querySelector(".selectModalDetail");
let modalMove = document.querySelector(".modalMove");
let inputBoardMove = document.querySelector(".inputBoardMove");
let btnCloseMoveCard = document.querySelector(".btnCloseMoveCard");
let listMoveCard = document.querySelector(".listMoveCard");
let btnMoveCard = document.querySelector(".btnMoveCard");
let labelEdit = document.querySelector(".labelEdit");
let modalCreateLabel = document.querySelector(".modalCreateLabel");
let textHeaderCreateLabel = modalCreateLabel.querySelector(
  ".textHeaderCreateLabel"
);
let btnDeleteLabel = modalCreateLabel.querySelector(".btnDeleteLabel");
let btnCreateLabel = document.querySelector(".btnCreateLabel");

let modalLabel = document.querySelector(".modalLabel");
let btnLabel = document.querySelector(".btnLabel");
let closeCreateLabel = document.querySelector(".closeCreateLabel");
let returnCreateLabel = document.querySelector(".returnCreateLabel");
let inputTitleLabel = document.querySelector(".inputTitleLabel");
let closeLabel = document.querySelector(".closeLabel");
let tempId = null;

selectModalDetail.addEventListener("click", function () {
  listMoveCard.innerHTML = ``;
  let board = listBoards.find((element) => element.id == boardId);
  let totalList = [...board.lists];

  let listInfo = totalList.find((list) => list.id == listId);
  let totalTask = [...listInfo.tasks];

  let taskInfo = totalTask.find((task) => task.id == taskId);
  modalMove.classList.add("displayModalMoveCard");
  overlayModal2.classList.add("show");
  inputBoardMove.value = `${listInfo.title}`;

  totalList.forEach((list) => {
    let option = document.createElement("option");
    option.value = list.title;
    option.textContent = list.title;
    if (list.id == listInfo.id) {
      option.selected = true;
    }
    listMoveCard.appendChild(option);
  });
});

btnCloseMoveCard.addEventListener("click", function () {
  modalMove.classList.remove("displayModalMoveCard");
  overlayModal2.classList.remove("show");
});

btnMoveCard.addEventListener("click", function () {
  let board = listBoards.find((element) => element.id == boardId);
  let totalList = [...board.lists];
  let listMove = totalList.find((list) => list.title == listMoveCard.value);
  tempId = listMove.id;
  textSelectDetail.textContent = listMove.title;
  modalMove.classList.remove("displayModalMoveCard");
  overlayModal2.classList.remove("show");
});

labelEdit.addEventListener("click", function () {
  labelId = 0;
  modalLabel.classList.add("displayModalLabel");
  overlayModal2.classList.add("show");
  renderLabel();
});

btnLabel.addEventListener("click", function () {
  overlayModal3.classList.add("show");
  modalCreateLabel.classList.add("displayModalCreateLabel");
  removeSelectLabel();
  inputTitleLabel.value = "";
  textHeaderCreateLabel.textContent = "Create label";
  btnDeleteLabel.classList.remove("showBtnDeteleLabel");
  btnCreateLabel.textContent = "Create";
  typeLabel = "create";
});

closeLabel.addEventListener("click", function () {
  modalLabel.classList.remove("displayModalLabel");
  overlayModal2.classList.remove("show");
});

closeCreateLabel.addEventListener("click", function () {
  modalCreateLabel.classList.remove("displayModalCreateLabel");
  overlayModal3.classList.remove("show");
});

returnCreateLabel.addEventListener("click", function () {
  modalCreateLabel.classList.remove("displayModalCreateLabel");
  overlayModal2.classList.remove("show");
});

btnCreateLabel.addEventListener("click", function () {
  if (typeLabel == "create") {
    let checkTitle = checkData(inputTitleLabel.value, "title");
    if (checkTitle == "valid") {
      showMessageComplete();
      let newTag = {
        id: totalTag.length > 0 ? totalTag[totalTag.length - 1].id + 1 : 401,
        content: inputTitleLabel.value,
        color: dataColorLabel[labelId],
      };
      tempTags.push(newTag);
      modalCreateLabel.classList.remove("displayModalCreateLabel");
      overlayModal3.classList.remove("show");
      renderLabel();
    } else {
      showMessageErorr(checkTitle);
    }
  } else if (typeLabel == "edit") {
    let checkTitle = checkData(inputTitleLabel.value, "title");
    if (checkTitle == "valid") {
      let tagCurrent = tempTags.find((tag) => tag.id == labelEditId);
      tagCurrent.content = inputTitleLabel.value;
      tagCurrent.color = dataColorLabel[labelId];
      modalCreateLabel.classList.remove("displayModalCreateLabel");
      overlayModal3.classList.remove("show");
      renderLabel();
    } else {
      showMessageErorr(checkTitle);
    }
  }
});

btnDeleteLabel.addEventListener("click", function () {
  typeClose = "removeTag";
  showModalClose();
});

let colorLabel = document.querySelectorAll(".colorLabel");
colorLabel.forEach((label, index) => {
  label.addEventListener("click", function () {
    let iconSelectedLabel = label.querySelector(".selectedLabel");
    removeSelectLabel();
    labelId = index;
    iconSelectedLabel.classList.add("labelSelected");
  });
});

// Logic Modal Date
let currentField = "startDate";
let calendar;
let modalDate = document.querySelector(".modalDate");
let btnCloseModalDate = document.querySelector(".btnCloseModalDate");
let btnRemoveModalDate = document.querySelector(".btnRemoveModalDate");
let btnSaveModalDate = document.querySelector(".btnSaveModalDate");
let startDateISO = null;
let dueDateISO = null;

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

// Lấy các giá trị
function parseDateString(dateStr, hasTime = false) {
  let parts = dateStr.split(" ");
  let dateParts = parts[0].split("/");
  let day = parseInt(dateParts[0], 10);
  let month = parseInt(dateParts[1], 10) - 1;
  let year = parseInt(dateParts[2], 10);

  if (hasTime && parts.length > 1) {
    let timeParts = parts[1].split(":");
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1], 10);
    return new Date(year, month, day, hours, minutes);
  } else {
    return new Date(year, month, day);
  }
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
  let board = listBoards.find((element) => element.id == boardId);
  let listInfo = board.lists.find((list) => list.id == listId);
  let taskInfo = listInfo.tasks.find((task) => task.id == taskId);

  overlayModal2.classList.add("show");
  modalDate.classList.add("displayModalDate");

  document.getElementById("dueDateCheck").checked = false;
  document.getElementById("dueDate").value = "";

  if (taskInfo.created_at) {
    let startDate = new Date(taskInfo.created_at);
    let day = String(startDate.getDate()).padStart(2, "0");
    let month = String(startDate.getMonth() + 1).padStart(2, "0");
    let year = startDate.getFullYear();
    document.getElementById("startDate").value = `${day}/${month}/${year}`;
  } else {
    let today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    document.getElementById("startDate").value = `${day}/${month}/${year}`;
  }

  if (taskInfo.due_date) {
    const dueDate = new Date(taskInfo.due_date);
    const day = String(dueDate.getDate()).padStart(2, "0");
    const month = String(dueDate.getMonth() + 1).padStart(2, "0");
    const year = dueDate.getFullYear();
    const hours = String(dueDate.getHours()).padStart(2, "0");
    const minutes = String(dueDate.getMinutes()).padStart(2, "0");
    document.getElementById(
      "dueDate"
    ).value = `${day}/${month}/${year} ${hours}:${minutes}`;
    document.getElementById("dueDateCheck").checked = true; // Chọn checkbox nếu có dueDate
  } else {
    document.getElementById("dueDate").value = "";
  }

  if (taskInfo.due_date) {
    currentField = "dueDate";
    initializeCalendar(true);
  } else {
    currentField = "startDate";
    initializeCalendar(false);
  }
});

btnSaveModalDate.addEventListener("click", function () {
  const startDateStr = document.getElementById("startDate").value;
  const startDate = parseDateString(startDateStr, false);
  startDateISO = startDate.toISOString();

  const dueDateStr = document.getElementById("dueDate").value;
  dueDateISO = null;
  if (dueDateStr) {
    const dueDate = parseDateString(dueDateStr, true);
    dueDateISO = dueDate.toISOString();
  }
  overlayModal2.classList.remove("show");
  modalDate.classList.remove("displayModalDate");
});

btnCloseModalDate.addEventListener("click", function () {
  overlayModal2.classList.remove("show");
  modalDate.classList.remove("displayModalDate");
});
btnRemoveModalDate.addEventListener("click", function () {
  overlayModal2.classList.remove("show");
  modalDate.classList.remove("displayModalDate");
});

function showMessageErorr(value) {
  textBodyError.innerHTML = ``;
  let span = document.createElement("span");
  span.className = "textDetailed";
  span.textContent = `${value}`;
  textBodyError.appendChild(span);
  errorMessage.classList.add("displayMessage");
  setTimeout(() => {
    errorMessage.classList.remove("displayMessage");
  }, 2000);
  btnCloseError.addEventListener("click", function () {
    errorMessage.classList.remove("displayMessage");
  });
}

function showMessageComplete() {
  successSignIn.classList.add("displayMessage");
  setTimeout(() => {
    successSignIn.classList.remove("displayMessage");
  }, 1000);
}

function removeSelectLabel() {
  let selectedLabel = document.querySelectorAll(".selectedLabel");
  selectedLabel.forEach((label) => {
    label.classList.remove("labelSelected");
  });
}

function showModalClose() {
  if (typeClose == "closeBoard") {
    btnAngreeCLoseBoard.textContent = "Yes, close it!";
  } else if (
    typeClose == "removeTask" ||
    typeClose == "removeList" ||
    typeClose == "removeTag"
  ) {
    btnAngreeCLoseBoard.textContent = "Yes, delete it!";
  }
  modalCloseBoard.classList.add("displayModalCloseBoard");
  overlayModal2.classList.add("show");
}

btnAngreeCLoseBoard.addEventListener("click", function () {
  if (typeClose == "closeBoard") {
    let boardClosed = listBoards.find((element) => element.id == boardId);
    boardClosed.is_closed = true;
    boardClosed.is_starred = false;
    modalCloseBoard.classList.remove("displayModalCloseBoard");
    overlayModal2.classList.remove("show");
    listBoards = user.boards.filter((board) => board.is_closed !== true);
    saveData();
    if (listBoards.length > 0) {
      boardId = listBoards[0].id;
      renderListBoards();
      changeId(boardId);
    } else {
      window.location.href = "../pages/index.html";
    }
  } else if (typeClose == "removeTask") {
    let boardCurrent = listBoards.find((element) => element.id == boardId);
    let listCurrent = boardCurrent.lists.find(
      (element) => element.id == listId
    );
    let taskIndex = listCurrent.tasks.findIndex(
      (element) => element.id == taskId
    );
    modalCloseBoard.classList.remove("displayModalCloseBoard");
    overlayModal2.classList.remove("show");
    overlayModal.classList.remove("show");
    modalDetail.classList.remove("displayModalDetail");
    if (taskIndex !== -1) {
      listCurrent.tasks.splice(taskIndex, 1);
      showMessageComplete();
      saveData();
      changeId(boardId);
    } else {
      showMessageErorr("Không tìm thấy id task");
    }
  } else if (typeClose == "removeList") {
    let boardCurrent = listBoards.find((element) => element.id == boardId);
    let listIndex = boardCurrent.lists.findIndex(
      (element) => element.id == listId
    );
    modalCloseBoard.classList.remove("displayModalCloseBoard");
    overlayModal2.classList.remove("show");
    if (listIndex !== -1) {
      boardCurrent.lists.splice(listIndex, 1);
      showMessageComplete();
      saveData();
      changeId(boardId);
    } else {
      showMessageErorr("Không tìm thấy id list");
    }
  } else if (typeClose == "removeTag") {
    tempTags = tempTags.filter((tag) => tag.id !== labelEditId);
    renderLabel();
    showMessageComplete();
    modalCloseBoard.classList.remove("displayModalCloseBoard");
    modalCreateLabel.classList.remove("displayModalCreateLabel");
    overlayModal3.classList.remove("show");
  }
});

let listLabel = document.querySelector(".listLabel");

function renderLabel() {
  listLabel.innerHTML = "";
  totalTag = [...tempTags];

  totalTag.forEach((tag) => {
    let labelInfo = document.createElement("div");
    labelInfo.innerHTML = `
    <div class="labelInfo">
          <input class="checkboxLabel" type="checkbox" name="label" />
          <span class="labelColor">${tag.content}</span>
          <span class="editLabel">
            <img src="../css/data/icons/edit-label-board.png" alt="">
          </span>
    </div>`;
    let labelColor = labelInfo.querySelector(".labelColor");
    labelColor.style.background = `${tag.color}`;
    let editLabel = labelInfo.querySelector(".editLabel");

    editLabel.addEventListener("click", function () {
      labelEditId = tag.id;
      typeLabel = "edit";
      modalCreateLabel.classList.add("displayModalCreateLabel");
      overlayModal3.classList.add("show");
      textHeaderCreateLabel.textContent = "Edit label";
      btnCreateLabel.textContent = "Save";
      btnDeleteLabel.classList.add("showBtnDeteleLabel");
      inputTitleLabel.value = `${tag.content}`;
      removeSelectLabel();
      let indexColorLabel = dataColorLabel.indexOf(tag.color);
      labelId = indexColorLabel;
      let iconSelectedLabel =
        colorLabel[indexColorLabel].querySelector(".selectedLabel");
      iconSelectedLabel.classList.add("labelSelected");
    });

    listLabel.appendChild(labelInfo);
  });
}

let modalFilter = document.querySelector(".modalFilter");
let btnCloseFilter = document.querySelector(".btnCloseFilter");

btnCloseFilter.addEventListener("click", function () {
  modalFilter.classList.remove("displayModalFilter");
  overlayModal.classList.remove("show");
});

let checkboxStatus = document.querySelectorAll(
  '.checkboxFilter[name="filterStatus"]'
);
checkboxStatus.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxStatus.forEach((cb) => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
      currentStatusFilter = this.value;
    } else {
      currentStatusFilter = null;
    }
    applyFilter();
  });
});

let inputSearch = document.querySelector(".inputSearch");
inputSearch.addEventListener("input", function () {
  currentKeyword = this.value.trim().toLowerCase();
  applyFilter();
});

let checkboxDueDate = document.querySelectorAll(
  '.checkboxFilter[name="filterDueDate"]'
);
checkboxDueDate.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      currentDateFilters.push(this.value);
    } else {
      currentDateFilters = currentDateFilters.filter(
        (val) => val !== this.value
      );
    }
    applyFilter();
  });
});

function applyFilter() {
  let allTasks = document.querySelectorAll(".taskInfo");
  let now = new Date();
  let nextDay = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  allTasks.forEach((task) => {
    let taskStatus = task.getAttribute("data-status");

    let taskTitle = task.querySelector(".textTask").textContent.toLowerCase();

    let dueDateStr = task.getAttribute("data-due-date");
    let dueDate = dueDateStr ? new Date(dueDateStr) : null;

    task.style.display = "flex";

    if (currentStatusFilter && taskStatus !== currentStatusFilter) {
      task.style.display = "none";
    }

    if (currentKeyword && !taskTitle.includes(currentKeyword)) {
      task.style.display = "none";
    }

    if (currentDateFilters.length > 0) {
      let checkDisplay = false;
      currentDateFilters.forEach((value) => {
        if (value === "nodate" && !dueDate) {
          checkDisplay = true;
        } else if (value === "overdue" && dueDate && dueDate < now) {
          checkDisplay = true;
        } else if (
          value === "duenextday" &&
          dueDate &&
          dueDate > now &&
          dueDate <= nextDay
        ) {
          checkDisplay = true;
        }
      });
      if (!checkDisplay) {
        task.style.display = "none";
      }
    }
  });
}
