/**
* change colors depend on initial letters
*/
function changeBgColorOfInitialLettersEdit(i) {
    if (changeBgColorDependOnFirstAndSecondLetterIndex(i)) {
        document.getElementById('profileAssignedEdit' + i).classList.add('assigned-for-initial-letters-first');
    }
    if (changeBgColorDependOnFirstAndSecondLetterSecondIndex(i)) {
        document.getElementById('profileAssignedEdit' + i).classList.add('assigned-for-initial-letters-second');
    }
    if (changeBgColorDependOnFirstAndSecondLetterThirdIndex(i)) {
        document.getElementById('profileAssignedEdit' + i).classList.add('assigned-for-initial-letters-third');
    }
}

/**
* change the color depend on the inital letters
*/
function changeBgColorDependOnFirstAndSecondLetterIndex(i) {
    return allTasks[i]['firstLetterThird'] == 'A' && allTasks[i]['secondLetterThird'] == 'O';
}


/**
* change bg color of urgent
*/
function changeColorUrgentEdit() {
    currentPriorEdit = document.getElementById('urgentPopupEdit').innerText;
    let urgent = document.getElementById('urgentPopupEdit');
    let medium = document.getElementById('mediumPopupEdit');
    let low = document.getElementById('lowPopupEdit');
    urgent.classList.add('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorUrgentEditReverse();
}


/**
* change bg color of low
*/
function changeColorUrgentEditReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopupEdit');
    let changeColorSecond = document.getElementById('mediumSecondPopupEdit');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopupEdit');
    let changeColorSecondLow = document.getElementById('lowSecondPopupEdit');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopupEdit');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopupEdit');
    changeColorFirstUrgent.classList.add('change-color-img');
    changeColorSecondUrgent.classList.add('change-color-img');
}


/**
* change bg color of medium
*/
function changeColorEditMedium() {
    currentPriorEdit = document.getElementById('mediumPopupEdit').innerText;
    let urgent = document.getElementById('urgentPopupEdit');
    let medium = document.getElementById('mediumPopupEdit');
    let low = document.getElementById('lowPopupEdit');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorEditMediumReverse();
}

/**
* change the color depend on the inital letters 
*/
function changeBgColorOfInitialLettersAfterSearch(i) {
    if (changeBgColorDependOnFirstAndSecondLetterIndex(i)) {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-first');
    }
    if (changeBgColorDependOnFirstAndSecondLetterSecondIndex(i)) {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-second');
    }
    if (changeBgColorDependOnFirstAndSecondLetterThirdIndex(i)) {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-third');
    }
}

/**
* change the color depend on the inital letters
*/
function changeBgColorDependOnFirstAndSecondLetterSecondIndex(i) {
    return allTasks[i]['firstLetterFirst'] == 'M' && allTasks[i]['secondLetterFirst'] == 'H';
}


/**
* change bg color of low
*/
function changeColorEditMediumReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopupEdit');
    let changeColorSecond = document.getElementById('mediumSecondPopupEdit');
    changeColorFirst.classList.add('change-color-img');
    changeColorSecond.classList.add('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopupEdit');
    let changeColorSecondLow = document.getElementById('lowSecondPopupEdit');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopupEdit');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopupEdit');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}


/**
* change bg color of low
*/
function changeColorEditLow() {
    currentPriorEdit = document.getElementById('lowPopupEdit').innerText;
    let urgent = document.getElementById('urgentPopupEdit');
    let medium = document.getElementById('mediumPopupEdit');
    let low = document.getElementById('lowPopupEdit');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');
    changeColorEditLowReverse();
}

/**
* change the color depend on the inital letters
*/
function changeBgColorDependOnFirstAndSecondLetterThirdIndex(i) {
    return allTasks[i]['firstLetterSecond'] == 'M' && allTasks[i]['secondLetterSecond'] == 'K';
}


/**
* change bg color of low
*/
function changeColorEditLowReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopupEdit');
    let changeColorSecond = document.getElementById('mediumSecondPopupEdit');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopupEdit');
    let changeColorSecondLow = document.getElementById('lowSecondPopupEdit');
    changeColorFirstLow.classList.add('change-color-img');
    changeColorSecondLow.classList.add('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopupEdit');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopupEdit');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}


/**
 * change color of prior after edit
*/
function changePriorColorByEdit(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        document.getElementById('urgentPopupEdit').classList.add('urgent-bg-color');
        document.getElementById('urgentFirstPopupEdit').classList.add('change-color-img');
        document.getElementById('urgentSecondPopupEdit').classList.add('change-color-img');
    }
    if (allTasks[i]['prior'] == 'Medium') {
        document.getElementById('mediumPopupEdit').classList.add('medium-bg-color');
        document.getElementById('mediumFirstPopupEdit').classList.add('change-color-img');
        document.getElementById('mediumSecondPopupEdit').classList.add('change-color-img');
    }
    if (allTasks[i]['prior'] == 'Low') {
        document.getElementById('lowPopupEdit').classList.add('low-bg-color');
        document.getElementById('lowFirstPopupEdit').classList.add('change-color-img');
        document.getElementById('lowSecondPopupEdit').classList.add('change-color-img');
    }
}


/**
 * function for stop propagation
*/
function doNotCloseDiv(event) {
    event.stopPropagation();
}


/**
 * close the popup task detail
*/
function closeTaskDetails() {
    document.getElementById('overlay').classList.remove('overlay-bg');
    document.getElementById('openTask').classList.add('d-none');
    document.getElementById('mainContainer').classList.remove('hide-mobile');
    document.getElementById('openTask').classList.remove('open-position');
    document.getElementById('overlay').classList.remove('hide-mobile');
    document.getElementById('editOpenTaskDetails').classList.remove('open-position-for-edit');
    document.getElementById('editOpenTaskDetails').classList.add('d-none');
}


/**
* identify the selected assigne edit
*/
function identifySelectedAssigneEdit(sel) {
    assignedEdit = sel.options[sel.selectedIndex].text;
    splitFirstAndSecondNameOfAssignedAsArrayEdit = assignedEdit.split(" ");
    firstNameLetterEdit = splitFirstAndSecondNameOfAssignedAsArrayEdit[0].charAt(0);
    secondNameLetterEdit = splitFirstAndSecondNameOfAssignedAsArrayEdit[1].charAt(0);
}


/**
* identify the selected category
*/
function identifySelectedCategory(sel) {
    currentCategory = sel.options[sel.selectedIndex].text;
}


/**
* identify the selected assigne

function identifySelectedAssigne(sel) {
    currentAssignedFirst = sel.options[sel.selectedIndex].text;
    splitFirstAndSecondNameOfAssignedAsArray = currentAssignedFirst.split(" ");
    firstNameLetter = splitFirstAndSecondNameOfAssignedAsArray[0].charAt(0);
    secondNameLetter = splitFirstAndSecondNameOfAssignedAsArray[1].charAt(0);
}*/

/**
* identify the assigned
*/
function getAssignedFirst() {
    let assigned = document.getElementById('assignedFirst');
    if (assigned.checked) {
        currentAssignedFirst = assigned.value;
        splitFirstAndSecondNameOfAssignedAsArray = currentAssignedFirst.split(" ");
        firstNameLetterFirst = splitFirstAndSecondNameOfAssignedAsArray[0].charAt(0);
        secondNameLetterFirst = splitFirstAndSecondNameOfAssignedAsArray[1].charAt(0);
    } else {
        currentAssignedFirst = '';
        firstNameLetterFirst = '';
        secondNameLetterFirst = '';
    }
}

/**
* identify the assigned
*/
function getAssignedSecond() {
    let assigned = document.getElementById('assignedSecond');
    if (assigned.checked) {
        currentAssignedSecond = assigned.value;
        splitFirstAndSecondNameOfAssignedAsArray = currentAssignedSecond.split(" ");
        firstNameLetterSecond = splitFirstAndSecondNameOfAssignedAsArray[0].charAt(0);
        secondNameLetterSecond = splitFirstAndSecondNameOfAssignedAsArray[1].charAt(0);
    } else {
        currentAssignedSecond = '';
        firstNameLetterSecond = '';
        secondNameLetterSecond = '';
    }
}

/**
* identify the assigned
*/
function getAssignedThird() {
    let assigned = document.getElementById('assignedThird');
    if(assigned.checked) {
        currentAssignedThird = assigned.value;
        splitFirstAndSecondNameOfAssignedAsArray = currentAssignedThird.split(" ");
        firstNameLetterThird = splitFirstAndSecondNameOfAssignedAsArray[0].charAt(0);
        secondNameLetterThird = splitFirstAndSecondNameOfAssignedAsArray[1].charAt(0);
    } else {
        currentAssignedThird = '';
        firstNameLetterThird = '';
        secondNameLetterThird = '';
    }
}

