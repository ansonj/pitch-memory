var page_01 = "<div class=\"page-title\">\
    Introduction and consent to participate\
</div>\
<br>\
<div class=\"page-text\">\
    <p>\
        By clicking Continue, you consent to participate. The test will take about X minutes.\
    </p>\
    <div style=\"text-align:center;\">\
        <input class=\"button\" type=\"button\" value=\"Continue\" onclick=\"nav_nextPage();\"/>\
    </div>\
</div>";

var page_02 = "<div class=\"page-title\">\
    Test preparation\
</div>\
<br>\
<div class=\"page-text\">\
    <p>Please read the following rules and check the box to proceed.</p>\
    <ol>\
        <li>This experiment will generate sounds. To best isolate the sounds, work in a quiet space.</li>\
        <li>Set your computer volume to a low level, then adjust it to be louder as needed after you hear the sounds.</li>\
        <li>Do not hum, sing, or whistle during the test.</li>\
        <li>Do not use your browser's Back or Refresh buttons. This will destroy your progress and reset the test.</li>\
    </ol>\
    <p>\
        <input id=\"rules-checkbox\" type=\"checkbox\" onclick=\"document.getElementById('p2-acceptance').disabled=!document.getElementById('rules-checkbox').checked;\">\
        I am in a quiet location and I will not vocalize during the test.\
    </p>\
    <div style=\"text-align:center;\">\
        <input id=\"p2-acceptance\" class=\"button\" type=\"button\" value=\"Continue\" onclick=\"nav_nextPage();\" disabled=\"true\" />\
    </div>\
</div>";

var page_03 = "<div style=\"text-align:center\">\
    <p><img src=\"img/cs.png\" /></p>\
    <p>\
        Without using any external sounds or making any audible vocalization,\
        <br>first imagine what the note C sounds like.\
    </p>\
    <p>\
        When you've got it, click \"Start\" below to start the tone generator and activate the slider.\
        <br>Drag the slider to adjust the pitch until it matches the pitch you were imagining,\
        <br>then click \"Done\" to stop the generator.\
    </p>\
    <p>\
        <input id=\"slider1\" class=\"slider\" type=\"range\" min=\"25\" max=\"8000\" value=\"440\" oninput=\"slider_changed(1);\" disabled=\"true\" />\
    </p>\
    <p>\
        <input id=\"start1\" class=\"button\" type=\"button\" value=\"Start\" onclick=\"slider_start(1);\" />\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        <input id=\"done1\" class=\"button\" type=\"button\" value=\"Done\" onclick=\"slider_done(1);\" disabled=\"true\" />\
    </p>\
</div>";

var page_04 = "<div class=\"page-text\">\
    <p>Please fill in the following demographic and musical background information:</p>\
    <p>\
        Age\
        <br><input id=\"demo-age\" class=\"demo-input\" size=\"20\" />\
    </p>\
    <p>\
        Gender\
        <br><input id=\"demo-gender\" class=\"demo-input\" size=\"20\" />\
    </p>\
    <p>\
        Primary instrument\
        <br><input id=\"demo-instrument\" class=\"demo-input\" size=\"30\" />\
    </p>\
    <p>\
        If your primary instrument is voice, which vocal range?\
        <br><input id=\"demo-vocal-range\" class=\"demo-input\" size=\"20\" />\
    </p>\
    <p>\
        How often do you play your primary instrument?\
        <br><input id=\"demo-how-often\" class=\"demo-input\" size=\"30\" />\
    </p>\
    <p>\
        When was the last time you played your primary instrument?\
        <br><input id=\"demo-last-played\" class=\"demo-input\" size=\"30\" />\
    </p>\
    <div style=\"text-align:center;\">\
        <input id=\"demo-continue\" class=\"button\" type=\"button\" value=\"Continue\" onclick=\"demo_validate();\" />\
    </div>\
</div>";

var page_05 = "<div class=\"page-text\">\
    <p>\
        Without making any external sounds or audible vocalization, take a moment to imagine that you are playing your primary instrument.\
    </p>\
    <p>\
        Feel free to move into playing position. Imagine that you are running through a couple of scales, a warmup routine, or a short excerpt from a piece.\
    </p>\
    <p>\
        When you've exercised your mental instrument, click to continue.\
    </p>\
    <div style=\"text-align:center;\">\
        <input class=\"button\" type=\"button\" value=\"Continue\" onclick=\"nav_nextPage();\" />\
    </div>\
</div>";

var page_06 = "Second task page";

var page_07 = "Intermediate page";

var page_08 = "Final task page";

var page_09 = "Submit results page";

var page_10 = "End page";

var pages = [
    page_01,
    page_02,
    page_03,
    page_04,
    page_05,
    page_06,
    page_07,
    page_08,
    page_09,
    page_10,
];
