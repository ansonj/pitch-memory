var startPage = 0;
var currentPage = startPage - 1;

function nav_nextPage() {
    // do validation on inputs here, if needed

    currentPage += 1;

    nav_loadPage(currentPage);
}

function nav_loadPage(pageNumber) {
    document.getElementById('page-contents').innerHTML = pages[pageNumber];

    if (pageNumber == 0) {
        nav_showNextButton();
    }

    if (pageNumber == 1) {
        nav_hideNextButton();
    }

    if (pageNumber == pages.length - 1) {
        nav_hideNextButton();
    }
}

function nav_hideNextButton() {
    document.getElementById('nav-link-right').innerHTML = '';
}

function nav_showNextButton() {
    document.getElementById('nav-link-right').innerHTML = 'Next page >>';
}
