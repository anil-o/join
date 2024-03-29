/**
* generate and show logout button
*/
function showLogout() {
    document.getElementById('header-logout').innerHTML = /*html*/ `
    <div class="popup-frame-logout" id="hide-btn" onclick="hideLogout()">
        <div onclick="doNotClose(event)">
            <div class="logout-btn">
                <div class="rs-logout" onclick="openHelp()" id="addActiveClassResponsive-6">Help</div>
                <div class="rs-logout" onclick="openLegalNotice()" id="addActiveClassResponsive-4">Legal notice</div>
                <div class="rs-logout" onclick="openPrivacy()" id="addActiveClassResponsive-5">Privacy</div>
                <div class="logout-inner-btn" onclick="logout()">Log out</div>
            </div>
        </div>
    </div>
    `;
    helpMenuActive();
    legalNoticeMenuActive();
    privacyMenuActive();
}


/**
* hide logout button
*/
function hideLogout() {
    document.getElementById('hide-btn').classList.add('d-none');
}


/**
* stop propagation event for the logout button
*/
function doNotClose(event) {
    event.stopPropagation();
}


/**
* clear active user status and send back to index.html - log in
*/
async function logout() {
    //await backend.setItem('activeUser', JSON.stringify(activeUser.length = 0));
    let activeUserJson = JSON.stringify(activeUser);
    localStorage.setItem('activeUser', activeUserJson);
    window.open("index.html", "_self");
}


/**
* open the privacy html
*/
function openPrivacy() {
    window.open("privacy.html", "_self");
}


/**
* open the help html
*/
function openHelp() {
    window.open("help.html", "_self");
}


/**
* open the legal notice html
*/
function openLegalNotice() {
    window.open("legal-notice.html", "_self");
}


/**
* Show active site on the navigation bar -> Legal notice
*/
function addActiveClass4() {
    setTimeout(function () {
        document.getElementById('addActiveClass-4').classList.add('active');
    }, 125);
}


/**
* Show active site on the navigation bar -> Legal notice
*/
function addActiveClass5() {
    setTimeout(function () {
        document.getElementById('addActiveClass-5').classList.add('active');
    }, 125);
}


/**
* Hide question mark on header bar like in the mockup-> Help
*/
function addActiveClass6() {
    setTimeout(function () {
        document.getElementById('addActiveClass-6').classList.add('d-none');
    }, 125);
}


/**
* Show active site on the responsive navigation bar -> Help
*/
function helpMenuActive() {
    if (document.getElementById('help-active') == null) {
    } else {
        if (document.getElementById('addActiveClassResponsive-6').innerHTML == document.getElementById('help-active').innerHTML) {
            document.getElementById('addActiveClassResponsive-6').classList.add('rs-logout-active');
        }
    }
}


/**
* Show active site on the responsive navigation bar -> Legal notice
*/
function legalNoticeMenuActive() {
    if (document.getElementById('legal-notice-active') == null) {
    } else {
        if (document.getElementById('addActiveClassResponsive-4').innerHTML == document.getElementById('legal-notice-active').innerHTML) {
            document.getElementById('addActiveClassResponsive-4').classList.add('rs-logout-active');
        }
    }
}


/**
* Show active site on the responsive navigation bar -> Privacy
*/
function privacyMenuActive() {
    if (document.getElementById('privacy-active') == null) {
    } else {
        if (document.getElementById('addActiveClassResponsive-5').innerHTML == document.getElementById('privacy-active').innerHTML) {
            document.getElementById('addActiveClassResponsive-5').classList.add('rs-logout-active');
        }
    }
}
