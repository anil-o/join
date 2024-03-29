function templateCreateTodo() {
    return `  
    <div onclick="openTaskDetails(${j}, event)" draggable="true" ondragstart="startDragging(${j})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategory${j}" class="category">${allTasks[j]['category']}</div>
            <div><img onclick="deleteTask(${j}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[j]['title']}</div>
        <div class="description">${allTasks[j]['description']}</div>
        <div id="createNamesOfAssigned${j}" class="assigned-and-prio">
            <div class="assigned-and-prio-child" id="assignedForLettersAssigned${j}">

            </div>
            <div class="prio">
                <div class="first-arrow"><img id="createFirstImg${j}" src=""></div>
                <div class="second-arrow"><img id="createSecondImg${j}" src=""></div>
            </div>
        </div>
    </div>`;
}

function templateCreateNamesOfAssigned(i, counter) {
    return ` 
    <div id="assignedForInitialLetters${counter}" class="assigned">${allTasks[j]['firstnameLetter'][i]}${allTasks[j]['secondnameLetter'][i]}</div>
   `;
}

function templateCreateNamesOfAssignedIfMoreThanThree(amountOfAssignedMembers, counter) {
    return ` 
    <div id="assignedForInitialLetters${counter}" class="assigned">${amountOfAssignedMembers}}</div>
   `;
}

function templateCreateNamesByDraged(i, index) {
    return `<div id="assignedForInitialLetters${nameisCheckedJson[i]['counterForDragging'][index]}" class="assigned">${nameisCheckedJson[i]['firstletterChecked'][index]}${nameisCheckedJson[i]['secondletterChecked'][index]}</div>`;
}

function templateUpdateTodo(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned-and-prio-child" id="assignedForLettersAssigned${i}">

            </div>
            <div class="prio">
                <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
            </div>
        </div>
    </div>`;
}


function templateUpdateInProgress(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned-and-prio-child" id="assignedForLettersAssigned${i}">

            </div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function templateUpdateAwaitingFeedback(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned-and-prio-child" id="assignedForLettersAssigned${i}">

            </div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function templateUpdateDone(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned-and-prio-child" id="assignedForLettersAssigned${i}">

            </div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}



function templateOpenTaskDetails(i) {
    return `
    <div>
    <div onclick="closeTaskDetails()" class="close-open-task">
    <img src="assets/img/board/close-popup.svg" class="hide-mobile">
    <img src="assets/img/board/goback.svg" class="hide arrow-back-mobile">
    </div>
    <div id="categoryOpenTask${i}" class="category-open-task">${allTasks[i]['category']}</div>
    <div class="title-open-task">${allTasks[i]['title']}</div>
    <div class="description-open-task">${allTasks[i]['description']}</div>

    <div id="subtaskDetailsEmptyOrNot${i}">
        
    </div>

    <div class="duedate-open-task">Due date: <span class="date-open-task">${allTasks[i]['duedate']}</span></div>
    <div class="container-priority-open-task">
        <div class="priority-open-task">Priority:</div>
        <div id="currentPriorOpenTask${i}" class="current-prior-open-task">${allTasks[i]['prior']}
            <div class="current-prior-img-position-open-task">
                <img id="currentPriorImgFirstOpenTask${i}" class="current-prior-img-first-open-task" src="">
                <img id="currentPriorImgSecondOpenTask${i}" class="current-prior-img-second-open-task" src="">
            </div>
        </div>
    </div>
    <div class="container-assigned-open-task">
        <div class="assigned-open-task">Assigned to:</div>
        <div class="person-and-profile-assigned-open-task-container-hook">
            <div id="openTaskDetailsAssigned${i}" class="person-assigned-open-task-container">
                

            </div>
            <div onclick="editShowDetails(${i})" class="edit-open-task">
                <img class="edit-img-pen-open-task" src="assets/img/board/pen.svg">
                <img class="edit-img-penpeak-open-task" src="assets/img/board/penpeak.svg">
            </div>
        </div>
    </div>
</div>`;
}


function openSubtaskDetailsIfItsNotEmpty(i) {
    return `<div class="subtask-title-open-task">Subtask:</div>
    <div class="subtask-container-open-task">
        <div class="subtask-value-open-task">${allTasks[i]['subtask']}</div>
        <div><input onclick="checkSubtaskIsCheckedOrNot()" type="checkbox" id="subtaskCheckbox${i}" name="subtaskCheckbox${i}" value="subtaskCheckbox${i}"></div>
    </div>`;
}


function openTaskAssignedTemplate(i, index) {
    return `
        <div class="open-task-assigned-group">
            <div  id="assignedForInitialLettersDetails${nameisCheckedJson[i]['counterForDragging'][index]}" class="profile-assigned-open-task">${nameisCheckedJson[i]['firstletterChecked'][index]}${nameisCheckedJson[i]['secondletterChecked'][index]}</div>
            <div class="name-assigned-open-task">${nameisCheckedJson[i]['names'][index]}</div>
        </div>`;
}


function addNewCategoryTemplateForm(addTheNewCategory) {
    return `
    <option value="${addTheNewCategory}">${addTheNewCategory}</option>`;
}


function templateEditShowDetails(i) {
    return `
        <div>
            <div class="margin-popup">
            <label class="pop-up-child pop-up-child-edit" for="title">Title</label><br>
            </div>
            <input class="title-popup-edit" type="text" id="titleEdit" name="title" placeholder="Enter a title" required>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child pop-up-child-edit" for="descriptionPopup">Description</label><br>
            </div>
            <textarea class="description-popup-edit" type="text" id="descriptionPopupEdit" name="descriptionPopup" rows="3" cols="20"
            placeholder="Enter a Description" required></textarea>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child pop-up-child-edit" for="subtaskPopup">Subtask</label><br>
            </div>
            <input class="subtask-popup-edit" type="text" id="subtaskEdit" name="subtaskPopup"
            placeholder="Add a new subtask" required></input>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child pop-up-child-edit" for="duedate">Due Date</label>
            </div>
            <input class="duedate-popup-edit" type="date" id="duedateEdit" name="duedate" required>
        </div>

        <div>
        <div class="margin-popup pop-up-child pop-up-child-edit">Prio</div>
        <div class="prio-popup-edit edit-prio-popup">
            <div id="urgentPopupEdit" onclick="changeColorUrgentEdit()" class="urgent-popup urgent-popup-edit">Urgent
                <div class="urgent-popup-child">
                    <div class="position-urgent-arrow-popup-first"><img id="urgentFirstPopupEdit"
                            src="assets/img/board/arrow-urgent.svg"></div>
                    <div class="position-urgent-arrow-popup-second"><img id="urgentSecondPopupEdit"
                            src="assets/img/board/arrow-urgent.svg"></div>
                </div>
            </div>
            <div id="mediumPopupEdit" onclick="changeColorEditMedium()" class="medium-popup medium-popup-edit">Medium
                <div class="medium-popup-child">
                    <div class="position-medium-arrow-popup-first"><img id="mediumFirstPopupEdit"
                            src="assets/img/board/arrow-medium.svg"></div>
                    <div class="position-medium-arrow-popup-second"><img id="mediumSecondPopupEdit"
                            src="assets/img/board/arrow-medium.svg"></div>
                </div>
            </div>
            <div id="lowPopupEdit" onclick="changeColorEditLow()" class="low-popup low-popup-edit">Low
                <div class="low-popup-child">
                    <div class="position-low-arrow-popup-first"><img id="lowFirstPopupEdit"
                            src="assets/img/board/arrow-low.svg"></div>
                    <div class="position-low-arrow-popup-second"><img id="lowSecondPopupEdit"
                            src="assets/img/board/arrow-low.svg"></div>
                </div>
            </div>
        </div>
        </div>

        <div>
        <div class="margin-popup"><label class="pop-up-child pop-up-child-edit" for="assignedto-popup">Assigned
                to</label><br>
        </div>
        <div id="assignedParentDivBoardEdit" class="assignedto-parent-div-board scrollbar-task-assigned-to-board">
            <div onclick="openAssignedToCheckboxBoardEdit()">
                <div>Select contacts to assign</div>
                <div class="img-arrow-select-board-div-assigned"><img
                src="assets/img/addTask/vector_arrow_black.png"></div>
            </div>
            <div class="d-none" id="checkboxWithNamesAssignedToBoardEdit">

                <label for="nameEdit0">
                        <div class="assigned-for-checkbox-board">
                                <div class="assignedto-child-div-board">Marcus Haas</div>
                                <div><input id="nameEdit0" type="checkbox" name="Marcus Haas" value="Marcus Haas"></div>
                        </div>
                </label>

                <label for="nameEdit1">
                        <div class="assigned-for-checkbox-board">
                            <div class="assignedto-child-div-board">Marius Katzer</div>
                            <div><input id="nameEdit1" type="checkbox" name="Marius Katzer" value="Marius Katzer"></div>
                        </div>
                </label>

                <label for="nameEdit2">
                    <div class="assigned-for-checkbox-board">
                        <div class="assignedto-child-div-board">Anil Orhan</div>
                        <div><input id="nameEdit2" type="checkbox" name="Anil Orhan" value="Anil Orhan"></div>
                    </div>
                </label>
            </div>
        </div>
        </div>

        <div class="hide-status">
        <div class="margin-popup"><label class="pop-up-child pop-up-child-edit" for="select-status-popup">Status</label><br></div>
        <div class="change-status-container">
        <select id="changeStatus${i}" onclick="changeStatus(${i})" class="change-status">
            <option value="" disabled selected>Select status</option>
            <option value="todo">To do</option>
            <option value="inProgress">In Progress</option>
            <option value="awaitingFeedback">In Awaiting</option>
            <option value="done">Done</option>
        </select><br>
        </div>
        </div>

        <div>
        <div class="person-and-profile-assigned-open-task-container">
            <div class="person-assigned-open-task-container-edit">
            </div>
            <div onclick="openTaskDetailsAfter(${i}, event);" class="edit-open-task-okay-and-hook">
                <div class="edit-open-task-okay">Ok</div>
                <div class="edit-open-task-hook-container"><img class="edit-open-task-hook" src="assets/img/board/hook.svg"></div>
            </div>
        </div>
        </div>`;
}


function openSelectTemplate() {
    return `<select onclick="closeDropDown()" class="category-popup" id="category-popup"
    onChange="identifySelectedCategory(this);" required>
    <option value="" disabled selected>Select task category</option>
    <option value="New Category">New Category</option>
    <option value="Sales">Sales</option>
    <option value="Design">Design</option>
    <option value="Backoffice">Backoffice</option>
    <option value="Marketing">Marketing</option>
    <option value="IT">IT</option>
    <option value="Media">Media</option>
    </select><br>
    <div class="img-arrow-select-board-div"><img src="assets/img/board/vector_arrow_black.png">
    </div>`;
}


function createNewCategoryTemplate() {
    return `
    <div id="openNewCategoryInputfield">
        <input class="title-popup" type="text" id="newcategory" name="newcategory" placeholder="New category name">
        <img onclick="openSelect()" class="x-mark-select" src="assets/img/board/x-mark.png">
        <div class="seperate-line"></div>
        <img onclick="addNewCategory()" class="check-select" src="assets/img/board/check.png">
    </div>`;
}


function addNewCategoryTemplate(addTheNewCategory) {
    return `
    <option value="${addTheNewCategory}" selected>${addTheNewCategory}</option>`;
}


function openSelectTemplateNew() {
    return `<select onclick="closeDropDown()" class="category-popup" id="category-popup"
    onChange="identifySelectedCategory(this);" required>
    <option value="" disabled selected>Select task category</option>
    <option value="New Category">New Category</option>
    <option value="Sales">Sales</option>
    <option value="Design">Design</option>
    <option value="Backoffice">Backoffice</option>
    <option value="Marketing">Marketing</option>
    <option value="IT">IT</option>
    <option value="Media">Media</option>
    </select><br>
    <div class="img-arrow-select-board-div"><img src="assets/img/board/vector_arrow_black.png">
    </div>`;
}


