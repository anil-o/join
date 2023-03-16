let checkCurrentPrior;

/**
* create random color
*/
function randomColor(i) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    currentBgColor.push(randomColor);
    document.getElementById('assignedForInitialLetters' + i).style.background = `#${randomColor}`;
}


/**
* change color prior in task box
*/
function changePrior() {
    if (currentPrior == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + j);
        let secondImage = document.getElementById('createSecondImg' + j);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (currentPrior == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + j);
        let secondImage = document.getElementById('createSecondImg' + j);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (currentPrior == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + j);
        let secondImage = document.getElementById('createSecondImg' + j);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


/**
* change color prior in task box
*/
function changePriorAfterDragAndDrop(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (allTasks[i]['prior'] == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (allTasks[i]['prior'] == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


/**
* change color prior in task box
*/
function changePriorAfterSearchFilter(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        changeColorTaskBox('urgent', i);
    }
    if (allTasks[i]['prior'] == 'Medium') {
        changeColorTaskBox('medium', i);
    }
    if (allTasks[i]['prior'] == 'Low') {
        changeColorTaskBox('low', i);
    }
}

/**
* change color prior in task box
*/
function changeColorTaskBox(prior, i) {
    let firstImage = document.getElementById('createFirstImg' + i);
    let secondImage = document.getElementById('createSecondImg' + i);
    firstImage.src = `assets/img/board/arrow-${prior}.svg`;
    secondImage.src = `assets/img/board/arrow-${prior}.svg`;
}


/**
* change bg color of urgent
*/
function changeColorUrgent() {
    currentPrior = document.getElementById('urgentPopup').innerText;
    checkCurrentPrior = document.getElementById('urgentPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.add('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorUrgentReverse();
}


/**
* create random color for edit
*/
function randomColorEdit() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    currentBgColor.push(randomColor);
}


/**
* change bg color of urgent
*/
function changeColorUrgentReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.add('change-color-img');
    changeColorSecondUrgent.classList.add('change-color-img');
}


/**
* change bg color of medium
*/
function changeColorMedium() {
    currentPrior = document.getElementById('mediumPopup').innerText;
    checkCurrentPrior = document.getElementById('mediumPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorMediumReverse();
}


/**
* change bg color of medium
*/
function changeColorMediumReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.add('change-color-img');
    changeColorSecond.classList.add('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}


/**
* change bg color of low
*/
function changeColorLow() {
    currentPrior = document.getElementById('lowPopup').innerText;
    checkCurrentPrior = document.getElementById('lowPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');
    changeColorLowReverse();
}


/**
* change bg color of low
*/
function changeColorLowReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.add('change-color-img');
    changeColorSecondLow.classList.add('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}

/**
 * change the prio to the basic form 
*/
function changeColorAfterCreateTask() {
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('change-color-img');
    medium.classList.remove('change-color-img');
    low.classList.remove('change-color-img');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorAfterCreateTaskReverse();
}


/**
 * change the prio to the basic form 
*/
function changeColorAfterCreateTaskReverse() {
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
}


/**
 * selected Category
 */
function selectCategory(category, categoryAddColor) {
    if (category == 'Sales') {
        categoryAddColor.classList.add('sales');
    }
    if (category == 'Design') {
        categoryAddColor.classList.add('design');
    }
    if (category == 'Backoffice') {
        categoryAddColor.classList.add('backoffice');
    }
    if (category == 'Marketing') {
        categoryAddColor.classList.add('marketing');
    }
    if (category == 'IT') {
        categoryAddColor.classList.add('it');
    }
    if (category == 'Media') {
        categoryAddColor.classList.add('media');
    }
}



/**
 * change the category color 
*/
function changeColorOfCategory() {
    let categoryAddColor = document.getElementById('changeColorOfCategory' + j);
    let category = categoryAddColor.innerText;
    selectCategory(category, categoryAddColor);
}


/**
 * change the category color 
*/
function changeColorOfCategoryAfterDragAndDrop(i) {
    let categoryAddColor = document.getElementById('changeColorOfCategoryAfterDragAndDrop' + i);
    let category = categoryAddColor.innerText;
    selectCategory(category, categoryAddColor);
}


/**
 * change the category color 
*/
function changeColorOfCategoryAfterSearchFilter(i) {
    let categoryAddColor = document.getElementById('changeColorOfCategory' + i);
    if (categoryAddColor == null) {
        changeColorOfCategoryAfterDragAndDrop(i);
    } else {
        let category = categoryAddColor.innerText;
        selectCategory(category, categoryAddColor);
    }
}



/**
 * change the color of prior depend of prior
*/
function changeColorPriorInShowDetails(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        let urgent = document.getElementById('currentPriorOpenTask' + i);
        urgent.style.backgroundColor = '#FF3D00';
    }
    if (allTasks[i]['prior'] == 'Medium') {
        let urgent = document.getElementById('currentPriorOpenTask' + i);
        urgent.style.backgroundColor = '#FFA800';
    }
    if (allTasks[i]['prior'] == 'Low') {
        let urgent = document.getElementById('currentPriorOpenTask' + i);
        urgent.style.backgroundColor = '#7AE229';
    }
}


/**
 * change the color of prior depend of prior
*/
function changePriorShowDetails(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        changeColorPriorDetailUrgent(i);
    }
    if (allTasks[i]['prior'] == 'Medium') {
        changeColorPriorDetailMedium(i);
    }
    if (allTasks[i]['prior'] == 'Low') {
        changeColorPriorDetailLow(i);
    }
}

/**
 * change the color of prior depend of prior
*/
function changeColorPriorDetailUrgent(i) {
    let firstImage = document.getElementById('currentPriorImgFirstOpenTask' + i);
        let secondImage = document.getElementById('currentPriorImgSecondOpenTask' + i);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
}

/**
 * change the color of prior depend of prior
*/
function changeColorPriorDetailMedium(i) {
    let firstImage = document.getElementById('currentPriorImgFirstOpenTask' + i);
    let secondImage = document.getElementById('currentPriorImgSecondOpenTask' + i);
    firstImage.style = 'top: -1px;';
    secondImage.style = 'top: 4px;';
    firstImage.src = "assets/img/board/arrow-medium.svg";
    secondImage.src = "assets/img/board/arrow-medium.svg";
}

/**
 * change the color of prior depend of prior
*/
function changeColorPriorDetailLow(i) {
    let firstImage = document.getElementById('currentPriorImgFirstOpenTask' + i);
        let secondImage = document.getElementById('currentPriorImgSecondOpenTask' + i);
        firstImage.style = 'top: -5px';
        secondImage.style = 'top: 0px';
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
}


/**
 * change the category of details
*/
function changeCategoryShowDetails(i) {
    let categoryAddColor = document.getElementById('categoryOpenTask' + i);
    let category = categoryAddColor.innerText;
    selectCategory(category, categoryAddColor);
}