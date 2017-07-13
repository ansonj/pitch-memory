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
    <p><img src=\"img/cs.png\" class=\"cs-image\" /></p>\
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

var page_06 = "<div style=\"text-align:center\">\
    <p><img src=\"img/cs.png\" class=\"cs-image\" /></p>\
    <p>\
        Without using any external sounds or making any audible vocalization,\
        <br>now imagine what the note C sounds like <span class=\"emphasized\">on your primary instrument</span>.\
    </p>\
    <p>\
        When you've got it, click \"Start\" below to start the tone generator and activate the slider.\
        <br>Drag the slider to adjust the pitch until it matches the pitch you were imagining,\
        <br>then click \"Done\" to stop the generator.\
    </p>\
    <p>\
        <input id=\"slider2\" class=\"slider\" type=\"range\" min=\"25\" max=\"8000\" value=\"440\" oninput=\"slider_changed(2);\" disabled=\"true\" />\
    </p>\
    <p>\
        <input id=\"start2\" class=\"button\" type=\"button\" value=\"Start\" onclick=\"slider_start(2);\" />\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        <input id=\"done2\" class=\"button\" type=\"button\" value=\"Done\" onclick=\"slider_done(2);\" disabled=\"true\" />\
    </p>\
</div>";

var page_07 = "<div class=\"page-text\">\
    <p>\
        Do you play any other instruments? If so, which?\
        <br><input id=\"demo-other-instruments\" class=\"demo-input\" size=\"40\" oninput=\"validateOtherInstruments();\" />\
    </p>\
    <p>\
        The next and final part of the study is a brief listening test, consisting of eight isolated tones for you to identify. A tone will play for a moment, and then you will have five seconds to click the note name (such as C, C#/Db, D, etc.) that best fits the tone. Don't be afraid to make a best guess if you are unsure&mdash;it's better to guess than not to respond at all.\
    </p>\
    <p>\
        When you're ready to being the listening test, click to continue. The buttons will appear, and the first tone will begin playing automatically.\
    </p>\
    <div style=\"text-align:center;\">\
        <input id=\"other-instruments-continue\" class=\"button\" type=\"button\" value=\"Continue\" disabled=\"true\" onclick=\"saveOtherInstruments();nav_nextPage();listening_start();\" />\
    </div>\
</div>";

var page_08 = "<div style=\"text-align:center;\">\
    <p>\
        Tone <span id=\"tone-count\">1</span> of 8\
    </p>\
    <table border=\"0\" style=\"margin:auto;\">\
        <tr>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"C\" disabled=\"true\" onclick=\"listening_record_response('C');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"C# / Db\" disabled=\"true\" onclick=\"listening_record_response('C#');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"D\" disabled=\"true\" onclick=\"listening_record_response('D');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"D# / Eb\" disabled=\"true\" onclick=\"listening_record_response('D#');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"E\" disabled=\"true\" onclick=\"listening_record_response('E');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"F\" disabled=\"true\" onclick=\"listening_record_response('F');\" />\
            </td>\
        </tr>\
        <tr>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"F# / Gb\" disabled=\"true\" onclick=\"listening_record_response('F#');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"G\" disabled=\"true\" onclick=\"listening_record_response('G');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"G# / Ab\" disabled=\"true\" onclick=\"listening_record_response('G#');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"A\" disabled=\"true\" onclick=\"listening_record_response('A');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"A# / Bb\" disabled=\"true\" onclick=\"listening_record_response('A#');\" />\
            </td>\
            <td class=\"pitch-cell\">\
                <input class=\"pitch-button\" type=\"button\" value=\"B\" disabled=\"true\" onclick=\"listening_record_response('B');\" />\
            </td>\
        </tr>\
    </table>\
</div>";

var page_09 = "<div class=\"page-text\">\
    <p>\
        <textarea id=\"results-textarea\"></textarea>\
    </p>\
    <p>\
        To submit your results, please copy all of the above text, paste it into the form below, and click Submit.\
    </p>\
    <p style=\"font-size:80%;\">\
        (If you don't see the form, try using <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSf8ISBUykXE74Lxp5gnErDaGo80NZdNbTfYqniaf9KROO_Y0w/viewform?usp=sf_link\" target=\"_blank\">this direct link</a>.)\
    </p>\
    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSf8ISBUykXE74Lxp5gnErDaGo80NZdNbTfYqniaf9KROO_Y0w/viewform?embedded=true\" width=\"100%\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\
</div>";

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
];
