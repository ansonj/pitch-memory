var currentPage = 0;

function nav_nextPage() {
    currentPage += 1;

    nav_loadPage(currentPage);
}

function nav_loadPage(pageNumber) {
    document.getElementById('page-contents').innerHTML = pages[pageNumber];

    if (pageNumber == 8) {
        document.getElementById('nav-link-right').innerHTML = '';
    }
}
