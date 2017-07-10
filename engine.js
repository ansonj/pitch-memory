var startPage = 0;
var currentPage = startPage - 1;

var resp_hz1;
var resp_demo_age;
var resp_demo_gender;
var resp_demo_instrument;
var resp_demo_vocal_range;
var resp_demo_how_often;
var resp_demo_last_played;
var resp_hz2;

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
    var sliderValue = document.getElementById('slider'+number).value;
    switch (number) {
        case 1:
            resp_hz1 = sliderValue;
            break;
        case 2:
            resp_hz2 = sliderValue;
            break;
    }
    // temporary
    alert("You picked " + sliderValue + "Hz");
    nav_nextPage();
}

function demo_validate() {
    var allFields = [
        "age",
        "gender",
        "instrument",
        "vocal-range",
        "how-often",
        "last-played"
    ];
    var badElements = [];
    function extractValue(field) {
        return document.getElementById(field).value.trim();
    }

    for (var i = 0; i < allFields.length; i++) {
        var field = "demo-" + allFields[i];
        var value = extractValue(field);
        if (value == "") {
            badElements.push(document.getElementById(field));
        }
    }
    if (badElements.length == 0) {
        resp_demo_age = extractValue("demo-age");
        resp_demo_gender = extractValue("demo-gender");
        resp_demo_instrument = extractValue("demo-instrument");
        resp_demo_vocal_range = extractValue("demo-vocal-range");
        resp_demo_how_often = extractValue("demo-how-often");
        resp_demo_last_played = extractValue("demo-last-played");
        nav_nextPage();
    } else {
        badElements[0].focus();
        function changeColor(elements, color) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = color;
            }
        }
        changeColor(badElements, "red");
        setTimeout(function(){changeColor(badElements, "white")}, 1000);
    }
}
