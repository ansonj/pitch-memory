var startPage = 0;
var currentPage = startPage - 1;

var resp_hz1;

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

function slider_start(number) {
    var slider = document.getElementById('slider'+number);
    slider.disabled = false;
    document.getElementById('start'+number).disabled = true;
    document.getElementById('done'+number).disabled = false;
    audio_start(slider.value);
}

function slider_changed(number) {
    audio_change(document.getElementById('slider'+number).value);
}

function slider_done(number) {
    audio_stop();
    resp_hz1 = document.getElementById('slider'+number).value;
    nav_nextPage();
}
