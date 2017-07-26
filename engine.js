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
var resp_demo_other_instruments;
var resp_listening_actual_pitch_names;
var resp_listening_actual_pitch_freq;
var resp_listening_response_pitch_names;

function nav_nextPage() {
    currentPage += 1;
    document.getElementById('page-contents').innerHTML = pages[currentPage];
}

function slider_start(number) {
    var slider = document.getElementById('slider'+number);
    slider.disabled = false;
    document.getElementById('start'+number).disabled = true;
    document.getElementById('done'+number).disabled = false;
    var frequency = slider_frequencyFromValue(slider.value);
    audio_start(frequency);
}

function slider_changed(number) {
    var sliderValue = document.getElementById('slider'+number).value;
    var frequency = slider_frequencyFromValue(sliderValue);
    audio_change(frequency);
}

function slider_done(number) {
    audio_stop();
    var sliderValue = document.getElementById('slider'+number).value;
    var frequency = slider_frequencyFromValue(sliderValue);
    switch (number) {
        case 1:
            resp_hz1 = frequency;
            break;
        case 2:
            resp_hz2 = frequency;
            break;
    }
    nav_nextPage();
}

function slider_frequencyFromValue(value) {
    // http://www.szynalski.com/tone-generator/frequency-generator.mini.js
    return Math.round(20.0 * Math.pow(1.0025, value) - 19.0);
}

function extractValue(field) {
    return document.getElementById(field).value.trim();
}

function demo_validate() {
    var allFieldsToValidate = [
        "age",
        "gender",
        "instrument",
        "how-often",
        "last-played"
    ];
    var badElements = [];

    for (var i = 0; i < allFieldsToValidate.length; i++) {
        var field = "demo-" + allFieldsToValidate[i];
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
        setTimeout(function(){changeColor(badElements, "white");}, 1000);
    }
}

function saveOtherInstruments() {
    resp_demo_other_instruments = extractValue('demo-other-instruments');
}

var listening_pause_duration = 0.5;
var listening_tone_duration = 3;
var listening_answer_duration = 5;
var listening_step;
function l_next_after(seconds) {
    setTimeout(listening_execute_step, seconds * 1000);
}
function l_buttons_on() {
    l_set_buttons(true);
}
function l_buttons_off() {
    l_set_buttons(false);
}
function l_set_buttons(status) {
    var buttons = document.getElementsByClassName('pitch-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = !status;
    }
}
function l_set_count(count) {
    document.getElementById('tone-count').innerHTML = count;
}
var listening_functions = [
    // yes, there is probably a better way to do this
    function(){
        l_buttons_off();
        l_set_count(1);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[0]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 1) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(2);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[1]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 2) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(3);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[2]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 3) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(4);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[3]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 4) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(5);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[4]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 5) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(6);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[5]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 6) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(7);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[6]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 7) {
            listening_record_no_response();
        }
        l_buttons_off();
        l_set_count(8);
        l_next_after(listening_pause_duration);
    },
    function(){
        audio_start(resp_listening_actual_pitch_freq[7]);
        l_next_after(listening_tone_duration);
    },
    function(){
        audio_stop();
        l_buttons_on();
        l_next_after(listening_answer_duration);
    },
    ///
    function(){
        if (resp_listening_response_pitch_names.length < 8) {
            listening_record_no_response();
        }
        nav_nextPage();

        var resultsTextArea = document.getElementById('results-textarea');
        var resultsText = [];
        function escapedString(input, shouldEscape) {
            var result = String(input);
            if (shouldEscape) {
                result = result.replace(/,/g, '\\,');
            }
            return result;
        }
        resultsText.push(escapedString(resp_hz1, false));
        resultsText.push(escapedString(resp_demo_age, true));
        resultsText.push(escapedString(resp_demo_gender, true));
        resultsText.push(escapedString(resp_demo_instrument, true));
        resultsText.push(escapedString(resp_demo_vocal_range, true));
        resultsText.push(escapedString(resp_demo_how_often, true));
        resultsText.push(escapedString(resp_demo_last_played, true));
        resultsText.push(escapedString(resp_hz2, false));
        resultsText.push(escapedString(resp_demo_other_instruments, true));
        resultsText.push(escapedString(resp_listening_actual_pitch_names, false));
        resultsText.push(escapedString(resp_listening_actual_pitch_freq, false));
        resultsText.push(escapedString(resp_listening_response_pitch_names, false));

        resultsTextArea.value = resultsText.join(',');
        resultsTextArea.focus();
        resultsTextArea.select();
    }
];

function listening_start() {
    resp_listening_actual_pitch_names = listening_random_pitches();
    resp_listening_actual_pitch_freq = [];
    for (var i = 0; i < resp_listening_actual_pitch_names.length; i++) {
        var name = resp_listening_actual_pitch_names[i];
        var freq = frequency_for_pitch(name);
        resp_listening_actual_pitch_freq.push(freq);
    }

    resp_listening_response_pitch_names = [];

    listening_step = 0;
    listening_execute_step();
}

function listening_execute_step() {
    listening_functions[listening_step]();
    listening_step += 1;
}

function listening_record_response(response) {
    resp_listening_response_pitch_names.push(response);
    l_buttons_off();
}

function listening_record_no_response() {
    listening_record_response('-');
}

function listening_random_pitches() {
    var trebleOptions = [
        "F4",
        "F#4",
        "G4",
        "G#4",
        "A4",
        "A#4",
        "B4",
        // "C5", // not including C5
        "C#5",
        "D5",
        "D#5",
        "E5",
        "F5",
        "F#5",
    ];
    var bassOptions = [
        "F2",
        "F#2",
        "G2",
        "G#2",
        "A2",
        "A#2",
        "B2",
        // "C3", // not including C3
        "C#3",
        "D3",
        "D#3",
        "E3",
        "F3",
        "F#3",
    ];
    while (trebleOptions.length > 4) {
        var index = Math.floor(Math.random() * trebleOptions.length);
        trebleOptions.splice(index, 1);
    }
    while (bassOptions.length > 4) {
        var index = Math.floor(Math.random() * bassOptions.length);
        bassOptions.splice(index, 1);
    }
    return shuffleArray(trebleOptions).concat(shuffleArray(bassOptions));
}

function shuffleArray(array) {
    // https://stackoverflow.com/a/2450976
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function frequency_for_pitch(pitch) {
    // https://en.wikipedia.org/wiki/Scientific_pitch_notation#Table_of_note_frequencies
    var pitchTable = {};
    pitchTable["F2"] = 87.307;
    pitchTable["F#2"] = 92.499;
    pitchTable["G2"] = 97.999;
    pitchTable["G#2"] = 103.83;
    pitchTable["A2"] = 110.00;
    pitchTable["A#2"] = 116.54;
    pitchTable["B2"] = 123.47;
    pitchTable["C3"] = 130.81;
    pitchTable["C#3"] = 138.59;
    pitchTable["D3"] = 146.83;
    pitchTable["D#3"] = 155.56;
    pitchTable["E3"] = 164.81;
    pitchTable["F3"] = 174.61;
    pitchTable["F#3"] = 185.00;
    pitchTable["G3"] = 196.00;
    pitchTable["G#3"] = 207.65;
    pitchTable["A3"] = 220.00;
    pitchTable["A#3"] = 233.08;
    pitchTable["B3"] = 246.94;
    pitchTable["C4"] = 261.63;
    pitchTable["C#4"] = 277.18;
    pitchTable["D4"] = 293.66;
    pitchTable["D#4"] = 311.13;
    pitchTable["E4"] = 329.63;
    pitchTable["F4"] = 349.23;
    pitchTable["F#4"] = 369.99;
    pitchTable["G4"] = 392.00;
    pitchTable["G#4"] = 415.30;
    pitchTable["A4"] = 440.00;
    pitchTable["A#4"] = 466.16;
    pitchTable["B4"] = 493.88;
    pitchTable["C5"] = 523.25;
    pitchTable["C#5"] = 554.37;
    pitchTable["D5"] = 587.33;
    pitchTable["D#5"] = 622.25;
    pitchTable["E5"] = 659.26;
    pitchTable["F5"] = 698.46;
    pitchTable["F#5"] = 739.99;
    pitchTable["G5"] = 783.99;
    return pitchTable[pitch];
}
