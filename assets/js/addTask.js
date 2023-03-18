async function initAddTask() {
    await downloadFromServer();
    await getTaskFromBackendAddTask();
    loadCounter();
}

/*
 * create task for board
*/
async function createTodoForBoard() {
    if (checkCurrentPrior == 'Urgent' || checkCurrentPrior == 'Medium' || checkCurrentPrior == 'Low') {
        loadTheParameterJ();
        createTodoAddTask();
        let addTask = document.getElementById('addedTask');
        addTask.style = "display: flex;";
        clearTodo();
        openWindow();
    } else {
        alert('Please select a priority');
    }
}

/**
 * load j 
 */
function loadTheParameterJ() {
    let length = allTasks.length - 1;
    if (j > 0 || length >= 0) {
        j = allTasks[length]['id'];
        j++;
    }
}


/**
 * load counter
 */
function loadCounter() {
    let nameisCheckedJsonLength = nameisCheckedJson.length - 1;
    if (counter > 0 || nameisCheckedJsonLength >= 0) {
        let counterForTask = nameisCheckedJson[nameisCheckedJsonLength]['counterForDragging'];
        let counterLength = counterForTask.length - 1;
        counter = counterForTask[counterLength];
        counter++;
    }
}


/**
 * close drop down 
 */
function closeDropDownAddTask() {
    let checkboxDiv = document.getElementById('assignedParentDiv');
    let checkbox = document.getElementById('checkboxWithNamesAssignedTo');
    checkbox.classList.add('d-none');
    checkboxDiv.style.height = '51px';
    checkbox.style.height = '51px';
}


/*
 * get the task in backend
*/
async function getTaskFromBackendAddTask() {
    let allTasksAsJson = await backend.getItem('allTasks');
    let nameisCheckedJsonAsJson = await backend.getItem('nameisCheckedJson');
    if (allTasksAsJson != null) {
        allTasks = JSON.parse(allTasksAsJson);
        nameisCheckedJson = JSON.parse(nameisCheckedJsonAsJson);
    }
}


/*
 * forward to board page after create task
*/
function openWindow() {
    let url = 'board.html';
    setTimeout(function () { window.open(url, '_self') }, 2700);

}


/*
 * create form addTask a task in the board page
*/
function createTodoAddTask() {
    currentTitle = document.getElementById('title');
    currentTitleValue = currentTitle.value;
    currentDescription = document.getElementById('descriptionPopup');
    currentDescriptionValue = currentDescription.value;
    currentDuedate = document.getElementById('duedate');
    currentDuedateValue = currentDuedate.value;
    currentSubtask = document.getElementById('subtaskPopup');
    currentSubtaskValue = currentSubtask.value;
    getAssignedAddTask();
    pushTask();
    addInBackend();
}




function getAssignedAddTask() {
    let number = 1;
    pushNameIsChecked();
    for (let i = 0; i < nameIsChecked.length; i++) {
        let name = document.getElementById('name' + i);
        if (name.checked) {
            createAssignedSectionAddTask(number);
            number++;
        } else {
            positionChecked.push(93);
            amountOfAssignedMembers++;
        }
        randomColorAddTask();
        counterDrager();
    }
    pushJsonInArrayAndThanEmptyArray();
}


function randomColorAddTask() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    currentBgColor.push(randomColor);
}

/**
* get the assgined name for a task
*/
function createAssignedSectionAddTask(number) {
    if (number == 1) {
        positionChecked.push(0);
    }
    if (number == 2) {
        positionChecked.push(31);
    } else if (number == 3) {
        positionChecked.push(62);
    }
}

/*
 * clear the form
*/
function clearTodo() {
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    selectedCategoryDefaultValue();
    changeColorAfterCreateTask();
    duedateChangeColorToStandard();
}


/*
 * change color of cross
*/
function changeColorOfCross() {
    document.getElementById('getCrossForHover').style = 'filter: invert(39%) sepia(66%) saturate(1450%) hue-rotate(184deg) brightness(107%) contrast(102%);';
}


function changeColorOfCrossToStandard() {
    document.getElementById('getCrossForHover').style = 'black;';
}


function cleanFormAddTask() {
    let title = document.getElementById('title');
    let description = document.getElementById('descriptionPopup');
    let dudate = document.getElementById('duedate');
    let subtask = document.getElementById('subtaskPopup');
    title.value = ``;
    description.value = ``;
    dudate.value = ``;
    subtask.value = ``;
    cleanCheckboxAssgine();
    selectedCategoryDefaultValue();
    changeColorAfterCreateTask();
    duedateChangeColorToStandard();
    closeForm();
}

/**
* Show active site on the navigation bar -> Add Task
*/
function addActiveClass2() {
    setTimeout(function () {
        document.getElementById('addActiveClass-2').classList.add('active');
        document.getElementById('addActiveClassResponsive-2').classList.add('active');
        document.getElementById('sidebar-main-frame').classList.add('sidebar-fit');
    }, 150);
}

/**
* Open the checkbox for assigne
*/
function openAssignedToCheckbox() {
    let checkboxDiv = document.getElementById('assignedParentDiv');
    let checkbox = document.getElementById('checkboxWithNamesAssignedTo');
    if (checkboxDiv.style.height != '150px') {
        checkbox.classList.remove('d-none');
        checkbox.style.height = '150px';
        checkboxDiv.style.height = '150px';
    } else if (checkboxDiv.style.height == '150px') {
        checkbox.classList.add('d-none');
        checkboxDiv.style.height = '51px';
        checkbox.style.height = '51px';
    }
} 