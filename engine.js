var startPage = 0;
var currentPage = startPage - 1;

var resp_hz1;

function nav_nextPage() {
    currentPage += 1;
    document.getElementById('page-contents').innerHTML = pages[currentPage];
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
    // temporary
    alert("You picked " + resp_hz1 + "Hz");
    nav_nextPage();
}
