let allTasks = [];
let currentTitle;
let currentDescription;
let currentCategory;
let currentAssigned = ['Marcus Haas', 'Marius Katzer', 'Anil Orhan'];
let currentDuedate;
let currentBgColor = [];
let currentDraggedElement;
let index = 0;
let j = 0;
let currentPrior;
let currentPriorEdit;
let splitFirstAndSecondNameOfAssignedAsArray;
let firstNameLetter = ['M', 'M', 'A'];
let secondNameLetter = ['H', 'K', 'O'];
let nameIsChecked = [];
let nameIsCheckedFirstletter = [];
let nameIsCheckedSecondletter = [];
let counterForDragging = [];
let positionChecked = [];
let nameisCheckedJson = [];
let currentTitleValue;
let currentDescriptionValue;
let currentDuedateValue;
let currentSubtask;
let currentSubtaskValue;
let assignedEdit;
let firstNameLetterEdit;
let secondNameLetterEdit;
let splitFirstAndSecondNameOfAssignedAsArrayEdit;
let alreadyEmpty = true;
let counter = 0;
let amountOfAssignedMembers = 4;

/**
* load task from server
*/
async function initialize() {
    await downloadFromServer();
    await getTasksFromBackend();
    identifyId();
    getCounter();
    addActiveClass1();
}


/**
* update the board
*/
function updateBoard() {
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/**
* update the board
*/
function identifyId() {
    let length = allTasks.length - 1;
    if (j > 0 || length >= 0) {
        j = allTasks[length]['id'];
        j++;
    }
}


/**
 * get counter
 */
function getCounter() {
    let nameisCheckedJsonLength = nameisCheckedJson.length - 1;
    if (counter > 0 || nameisCheckedJsonLength >= 0) { 
        let counterForTask = nameisCheckedJson[nameisCheckedJsonLength]['counterForDragging'];
        let counterLength = counterForTask.length - 1;
        counter = counterForTask[counterLength];
        counter++;
    }
}


/**
* update the board
*/
function oneHigherId() {
    if (j >= 0) {
        j++;
    }
}


/**
* render todo box
*/
function createTodo() {
    if (checkCurrentPrior == 'Urgent' || checkCurrentPrior == 'Medium' || checkCurrentPrior == 'Low') {
        updateArrayTodo();
        pushTask();
        let todo = document.getElementById('todo');
        todo.innerHTML += templateCreateTodo();
        getAssigned();
        changePrior();
        cleanValues();
        changeColorOfCategory();
        addInBackend();
        oneHigherId();
        index++;
        checkCurrentPrior = '';
    } else {
        alert('Please select a priority');
    }
}

/*function createNewContact() {
        let newContact = document.getElementById('newContact');
        currentAssigned.push(newContact.value);
        splitFirstAndSecondNameOfAssignedAsArray = currentAssigned[i].split(" ");
        firstNameLetter.push(splitFirstAndSecondNameOfAssignedAsArray[0].charAt(0));
        secondNameLetter.push(splitFirstAndSecondNameOfAssignedAsArrayEdit[1].charAt(0));
}*/


/**
* get the assgined name for a task
*/
function getAssigned() {
    let number = 1;
    pushNameIsChecked();
    for (let i = 0; i < currentAssigned.length; i++) {
        let name = document.getElementById('name' + i);
        if (name.checked) {
            if (i <= 2) {
                let createAssigne = document.getElementById('assignedForLettersAssigned' + j);
                createAssigne.innerHTML += templateCreateNamesOfAssigned(i, counter);
                createAssignedSection(number);
                number++
            } else {
                whenAssigneMoreThanThree();
            }
            randomColor(counter);
            counterDrager();
        }
    }
    pushJsonInArrayAndThanEmptyArray();
}


/**
* counter for drag and drop
*/
function counterDrager() {
    counterForDragging.push(counter);
    counter++;
}


/**
* counter for drag and drop
*/
function pushJsonInArrayAndThanEmptyArray() {
    pushInArray();
    currentBgColor = [];
    emptyArray();
}


/**
* get the assgined name for a task
*/
function createAssignedSection(number) {
    if (number == 1) {
        positionChecked.push(0);
    }
    if (number == 2) {
        document.getElementById('assignedForInitialLetters' + counter).style.left = '31px';
        positionChecked.push(31);
    } else if (number == 3) {
        document.getElementById('assignedForInitialLetters' + counter).style.left = '62px';
        positionChecked.push(62);
    }
}


/**
* get the assgined name for a task when more than three
*/
function whenAssigneMoreThanThree() {
    let createAssigne = document.getElementById('assignedForLettersAssigned' + j);
    createAssigne.innerHTML = templateCreateNamesOfAssignedIfMoreThanThree();
    document.getElementById('assignedForInitialLetters' + counter).style.left = '93px';
    positionChecked.push(93);
    amountOfAssignedMembers++;
}


/**
* save the assgined name for a task
*/
function saveEditDetailsAssigned(i) {
    let checkedNewAssign = false;
    let number = 1;
    pushNameIsCheckedAfterEdit();
    for (let i = 0; i < currentAssigned.length; i++) {
        let name = document.getElementById('nameEdit' + i);
        if (name.checked) {
            if (i <= 2) {
                makepositionOfAssigne(number);
                number++
            } else {
                whenMoreThanThreeSaveAssigne()
            }
            randomColorEdit();
            counterDraggerSave();
            checkedNewAssign = true;
        }
    }
    if (checkedNewAssign) {
        pushInArrayAfterEdit(i);
        pushJsonInArrayASave();
    } 
}


/**
* make the position for assigne
*/
function counterDraggerSave() {
    counterForDragging.push(counter);
    counter++;
}


/**
* make the position for assigne
*/
function pushJsonInArrayASave() {
    currentBgColor = [];
    emptyArray();
}


/**
* make the position for assigne
*/
function makepositionOfAssigne(number) {
    if (number == 1) {
        positionChecked.push(0);
    }
    if (number == 2) {
        positionChecked.push(31);
    } else if (number == 3) {
        positionChecked.push(62);
    }
}

/**
* make the position for assigne
*/
function whenMoreThanThreeSaveAssigne(number) {
    positionChecked.push(93);
    amountOfAssignedMembers++;
}


/**
* checked if name is assigned for a task
*/
function pushNameIsChecked() {
    for (let i = 0; i < currentAssigned.length; i++) {
        let name = document.getElementById('name' + i);
        if (name.checked) {
            nameIsChecked.push(name.value);
        }
    }
    getInitialLettersForDragging();
}


/**
* split the assigne name in first and second letter
*/
function getInitialLettersForDragging() {
    for (let index = 0; index < nameIsChecked.length; index++) {
        let splitFirstAndSecondNameOfAssignedAsArrayChecked = nameIsChecked[index].split(" ");
        nameIsCheckedFirstletter.push(splitFirstAndSecondNameOfAssignedAsArrayChecked[0].charAt(0));
        nameIsCheckedSecondletter.push(splitFirstAndSecondNameOfAssignedAsArrayChecked[1].charAt(0));
    }
}


/**
* push in assigne array
*/
function pushInArray() {
    let namesForDragging = {
        'names': nameIsChecked,
        'firstletterChecked': nameIsCheckedFirstletter,
        'secondletterChecked': nameIsCheckedSecondletter,
        'counterForDragging': counterForDragging,
        'bgColor': currentBgColor,
        'position': positionChecked,
    };
    nameisCheckedJson.push(namesForDragging);
}

/**
* push in assigne array
*/
function pushInArrayAfterEdit(i) {
    nameisCheckedJson[i]['names'] = nameIsChecked;
    nameisCheckedJson[i]['firstletterChecked'] = nameIsCheckedFirstletter;
    nameisCheckedJson[i]['secondletterChecked'] = nameIsCheckedSecondletter;
    nameisCheckedJson[i]['counterForDragging'] = counterForDragging;
    nameisCheckedJson[i]['bgColor'] = currentBgColor;
    nameisCheckedJson[i]['position'] = positionChecked;
}

/**
* checked if name is assigned for a task
*/
function pushNameIsCheckedAfterEdit() {
    for (let i = 0; i < currentAssigned.length; i++) {
        let name = document.getElementById('nameEdit' + i);
        if (name.checked) {
            nameIsChecked.push(name.value);
        }
    }
    getInitialLettersForDragging();
}

/**
* empty array for assgine
*/
function emptyArray() {
    nameIsChecked = [];
    nameIsCheckedFirstletter = [];
    nameIsCheckedSecondletter = [];
    counterForDragging = [];
    positionChecked = [];
}


/**
* change assigned properties right after drag and drop
*/
function getAssignedByDrag(i) {
    let createAssigne = document.getElementById('assignedForLettersAssigned' + i);
    for (let index = 0; index < nameisCheckedJson[i]['names'].length; index++) {
        createAssigne.innerHTML += templateCreateNamesByDraged(i, index);
        let color = nameisCheckedJson[i]['bgColor'][index];
        let positionAssigne = nameisCheckedJson[i]['position'][index];
        document.getElementById('assignedForInitialLetters' + nameisCheckedJson[i]['counterForDragging'][index]).style.background = `#${color}`;
        document.getElementById('assignedForInitialLetters' + nameisCheckedJson[i]['counterForDragging'][index]).style.left = `${positionAssigne}px`;
    }
}


/**
* reset the inputfield
*/
function cleanValues() {
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    cleanCheckboxAssgine();
    selectedCategoryDefaultValue();
    changeColorAfterCreateTask();
    closeForm();
}


/**
* clean checkbox assigne
*/
function cleanCheckboxAssgine() {
    for (let i = 0; i < currentAssigned.length; i++) {
        let checkbox = document.getElementById('name' + i);
        if (checkbox.checked == true) {
            checkbox.checked = false;
        }
    }
}


/**
* clean inputfields
*/
function cleanForm() {
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
* update todo array
*/
function updateArrayTodo() {
    currentTitle = document.getElementById('title');
    currentTitleValue = currentTitle.value;
    currentDescription = document.getElementById('descriptionPopup');
    currentDescriptionValue = currentDescription.value;
    currentDuedate = document.getElementById('duedate');
    currentDuedateValue = currentDuedate.value;
    currentSubtask = document.getElementById('subtaskPopup');
    currentSubtaskValue = currentSubtask.value;
}


/**
* push task
*/
function pushTask() {
    let task = {
        'title': currentTitleValue,
        'description': currentDescriptionValue,
        'category': currentCategory,
        'assigned': currentAssigned,
        'firstnameLetter': firstNameLetter,
        'secondnameLetter': secondNameLetter,
        'duedate': currentDuedateValue,
        'prior': currentPrior,
        'status': 'todo',
        'id': j,
        'subtask': currentSubtaskValue,
    };
    allTasks.push(task);
}


/**
* safe all task in backend
*/
async function addInBackend() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    await backend.setItem('nameisCheckedJson', JSON.stringify(nameisCheckedJson));
}


/**
* get all task from backend and update board
*/
async function getTasksFromBackend() {
    let allTasksAsJson = await backend.getItem('allTasks');
    let nameisCheckedJsonAsJson = await backend.getItem('nameisCheckedJson');
    if (allTasksAsJson != null) {
        allTasks = JSON.parse(allTasksAsJson);
        nameisCheckedJson = JSON.parse(nameisCheckedJsonAsJson);
        updateBoard();
    }
}


/**
* delete a task
*/
async function deleteTask(i, event) {
    event.stopPropagation();
    allTasks.splice(i, 1);
    nameisCheckedJson.splice(i, 1);
    if (allTasks.length < 1) {
        await deleteAllTasksArray();
        updateBoard();
    } else {
        await addInBackend();
        await initialize();
    }
}


/**
* delete a task
*/
async function deleteAllTasksArray() {
    await backend.deleteItem('allTasks');
    await backend.deleteItem('nameisCheckedJson');
}


/**
* set the default value of category after submit form
*/
function selectedCategoryDefaultValue() {
    document.getElementById("category-popup").selectedIndex = "0";
}


/**
* render todo box from addTask
*/
function createTodoFromAddTask() {
    let todo = document.getElementById('todo');
    todo.innerHTML += templateCreateTodo();
    changeColorOfCategory();
    changeBgColorOfInitialLetters();
    index++;
}


/**
* render todo area after drag and drop
*/
function updateTodo() {
    let todo = document.getElementById('todo');
    todo.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'todo') {
            todo.innerHTML += templateUpdateTodo(i);
            getAssignedByDrag(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


/**
* render in progress area after drag and drop
*/
function updateInProgress() {
    let inProgress = document.getElementById('inProgress');
    inProgress.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'inProgress') {
            inProgress.innerHTML += templateUpdateInProgress(i);
            getAssignedByDrag(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


/**
* render awaiting feedback area after drag and drop
*/
function updateAwaitingFeedback() {
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    awaitingFeedback.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'awaitingFeedback') {
            awaitingFeedback.innerHTML += templateUpdateAwaitingFeedback(i);
            getAssignedByDrag(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


/**
* render done area after drag and drop
*/
function updateDone() {
    let done = document.getElementById('done');
    done.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'done') {
            done.innerHTML += templateUpdateDone(i);
            getAssignedByDrag(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


/**
* drag and drop a task
*/
function startDragging(id) {
    currentDraggedElement = id;
}


/**
* drag and drop a task
*/
function allowDrop(ev) {
    ev.preventDefault();
}


/**
* drag and drop a task
*/
function moveTo(changeStatus) {
    allTasks[currentDraggedElement]['status'] = changeStatus;
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/**
* drag and drop a task
*/
function changeStatus(i) {
    let status = document.getElementById('changeStatus' + i).value;
    allTasks[i]['status'] = status;
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/**
* delete icon if someone is tiping
*/
function deleteIconInSearchInputField() {
    let line = document.getElementById('line');
    let iconSearch = document.getElementById('iconSearch');
    line.classList.add('d-none');
    iconSearch.classList.add('d-none');
}


/**
* remov line and icon if inputfield is empty
*/
function loadIconAndLine() {
    let searchTask = document.getElementById('searchTask');
    searchTask = searchTask.value;
    if (searchTask == ``) {
        let line = document.getElementById('line');
        let iconSearch = document.getElementById('iconSearch');
        line.classList.remove('d-none');
        iconSearch.classList.remove('d-none');
    }
}


/**
* open the pop-up
*/
function openForm(event) {
    event.stopPropagation();
    document.getElementById('overlayAddTask').classList.add('overlay-bg');
    document.getElementById('popup-window').style.display = 'unset';
    document.getElementById('mainContainer').classList.add('hide-mobile');
}


/**
* close drop down assigne
*/
function closeDropDown() {
    let checkboxDiv = document.getElementById('assignedParentDivBoard');
    let checkbox = document.getElementById('checkboxWithNamesAssignedToBoard');
    checkbox.classList.add('d-none');
    checkboxDiv.style.height = '51px';
    checkbox.style.height = '51px';
}


/**
* close the pop-up
*/
function closeForm() {
    document.getElementById('overlayAddTask').classList.remove('overlay-bg');
    document.getElementById('popup-window').style.display = "none";
    document.getElementById('mainContainer').style.opacity = 'unset';
    currentTitle = document.getElementById('title');
    currentDescription = document.getElementById('descriptionPopup');
    currentDuedate = document.getElementById('duedate');
    document.getElementById('mainContainer').classList.remove('hide-mobile');
    duedateChangeColorToStandard();
}




/**
 * open details of the task
*/
function openTaskDetails(i, event) {
    event.stopPropagation();
    document.getElementById('mainContainer').classList.add('hide-mobile');
    document.getElementById('overlay').classList.add('hide-mobile');
    let edit = document.getElementById('editOpenTaskDetails');
    edit.classList.add('d-none');
    edit.classList.remove('open-position-for-edit')
    document.getElementById('overlay').classList.add('overlay-bg');
    document.getElementById('openTask').classList.remove('d-none');
    document.getElementById('openTask').classList.add('open-position');
    let openTask = document.getElementById('openTask');
    openTask.innerHTML = templateOpenTaskDetails(i);
    openTaskAssigned(i);
    changeColorPriorInShowDetails(i);
    changePriorShowDetails(i);
    changeCategoryShowDetails(i);
}


/**
 * show assigne after open task
*/
function openTaskAssigned(i) {
    let assigned = document.getElementById('openTaskDetailsAssigned' + i);
    for (let index = 0; index < nameisCheckedJson[i]['names'].length; index++) {
        assigned.innerHTML += openTaskAssignedTemplate(i, index);
        let color = nameisCheckedJson[i]['bgColor'][index];
        document.getElementById('assignedForInitialLettersDetails' + nameisCheckedJson[i]['counterForDragging'][index]).style.background = `#${color}`;
    }
}


/**
 * show assigne checkbox in edit 
*/
function openAssignedToCheckboxBoardEdit() {
    let checkboxDiv = document.getElementById('assignedParentDivBoardEdit');
    let checkbox = document.getElementById('checkboxWithNamesAssignedToBoardEdit');
    if (checkboxDiv.style.height != '140px') {
        checkbox.classList.remove('d-none');
        checkbox.style.height = '140px';
        checkboxDiv.style.height = '140px';
    } else if (checkboxDiv.style.height == '140px') {
        checkbox.classList.add('d-none');
        checkboxDiv.style.height = '51px';
        checkbox.style.height = '51px';
    }
}


/**
 * show edit details 
*/
function editShowDetails(i) {
    document.getElementById('mainContainer').classList.add('hide-mobile');
    document.getElementById('overlay').classList.add('hide-mobile');
    document.getElementById('overlay').classList.add('overlay-bg');
    let edit = document.getElementById('editOpenTaskDetails');
    edit.classList.add('open-position-for-edit');
    edit.classList.remove('d-none');
    let editContentDiv = document.getElementById('editContent');
    editContentDiv.innerHTML = templateEditShowDetails(i);
    let titleEdit = document.getElementById('titleEdit');
    titleEdit.value = allTasks[i]['title'];
    let descriptionEdit = document.getElementById('descriptionPopupEdit');
    descriptionEdit.value = allTasks[i]['description'];
    let duedateEdit = document.getElementById('duedateEdit');
    duedateEdit.value = allTasks[i]['duedate'];
    let profile = document.getElementById('profileAssignedEdit' + i);
    profile.innerHTML = `${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}`;
    let subtasksEdit = document.getElementById('subtaskEdit');
    subtasksEdit.value = allTasks[i]['subtask'];
    changePriorColorByEdit(i);
}


/**
 * open tasks after detail
*/
function openTaskDetailsAfter(i, event) {
    saveEditDetails(i);
    openTaskDetails(i, event);
}


/**
 * save new task details
*/
function saveEditDetails(i) {
    let titleEdit = document.getElementById('titleEdit');
    allTasks[i]['title'] = titleEdit.value;
    let descriptionEdit = document.getElementById('descriptionPopupEdit');
    allTasks[i]['description'] = descriptionEdit.value;
    let duedateEdit = document.getElementById('duedateEdit');
    allTasks[i]['duedate'] = duedateEdit.value;
    let subtasksEdit = document.getElementById('subtaskEdit');
    allTasks[i]['subtask'] = subtasksEdit.value;
    saveEditDetailsAssigned(i);
    if (currentPriorEdit != undefined) {
        allTasks[i]['prior'] = currentPriorEdit;
    }
    addInBackend();
    updateBoard();
}


/**
 * change color of due date after select
*/
function duedateChangeColor() {
    document.getElementById('duedate').style.color = 'black';
}


/**
 * change color of due date after clear
*/
function duedateChangeColorToStandard() {
    document.getElementById('duedate').style.color = '#D1D1D1';
}


/**
 * change color of cross to blue
*/
function changeCrossToBlue() {
    document.getElementById('crossForHoverInBoard').style = 'filter: invert(39%) sepia(66%) saturate(1450%) hue-rotate(184deg) brightness(107%) contrast(102%);';
}


/**
 * change color of cross to black
*/
function changeColorOfCrossToBlack() {
    document.getElementById('crossForHoverInBoard').style = 'black;';
}


/**
 * search task
*/
function searchFilter() {
    let search = document.getElementById('searchTask');
    clearBoardBeforeFilter();
    if (search.value == '' && alreadyEmpty) {
        updateBoard();
        alreadyEmpty = false;
    } else {
        ifSearchFilterIsNotEmpty(search);
    }
}


/**
 * search task
*/
function ifSearchFilterIsNotEmpty(search) {
    alreadyEmpty = true;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['title'].includes(search.value)) {
            if (allTasks[i]['status'] == 'todo') {
                todoFilter(i);
            }
            if (allTasks[i]['status'] == 'inProgress') {
                inProgressFilter(i);
            }
            if (allTasks[i]['status'] == 'awaitingFeedback') {
                inAwaitingFeedbackFilter(i);
            }
            if (allTasks[i]['status'] == 'done') {
                doneFilter(i);
            }
        }
    }
}

/**
 * filter for todo
*/
function todoFilter(i) {
    let todo = document.getElementById('todo');
    todo.innerHTML += templateUpdateTodo(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}


/**
 * filter for in progress
*/
function inProgressFilter(i) {
    let inProgress = document.getElementById('inProgress');
    inProgress.innerHTML += templateUpdateInProgress(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}


/**
 * filter for in awaiting feedback
*/
function inAwaitingFeedbackFilter(i) {
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    awaitingFeedback.innerHTML += templateUpdateAwaitingFeedback(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}


/**
 * filter for done
*/
function doneFilter(i) {
    let done = document.getElementById('done');
    done.innerHTML += templateUpdateDone(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}



/**
 * clear the board before filter starts
*/
function clearBoardBeforeFilter() {
    let todo = document.getElementById('todo');
    let inProgress = document.getElementById('inProgress');
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    let done = document.getElementById('done');
    todo.innerHTML = ``;
    inProgress.innerHTML = ``;
    awaitingFeedback.innerHTML = ``;
    done.innerHTML = ``;
}


/**
 * execution function in search task
*/
function executeFunction(i) {
    changeBgColorOfInitialLettersAfterSearch(i);
    changePriorAfterSearchFilter(i);
}

/**
 * Show active site on the navigation bar -> Board
 */
function addActiveClass1() {
    document.getElementById('addActiveClass-1').classList.add('active');
    document.getElementById('addActiveClassResponsive-1').classList.add('active');
}


/**
 * Show checkbox for assign
 */
function openAssignedToCheckboxBoard() {
    let checkboxDiv = document.getElementById('assignedParentDivBoard');
    let checkbox = document.getElementById('checkboxWithNamesAssignedToBoard');
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

