var page_01 = "<div class=\"page-title\">\
    Introduction and consent to participate\
</div>\
<br>\
<div class=\"page-text\">\
    By clicking \"Next page\" above, you consent to participate.\
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
        <input id=\"rules-checkbox\" type=\"checkbox\" onclick=\"if(document.getElementById('rules-checkbox').checked){nav_showNextButton();}else{nav_hideNextButton();}\">\
        I am in a quiet location and I will not vocalize during the test.\
    </p>\
</div>";

var page_03 = "First task page";

var page_04 = "Intermediate page";

var page_05 = "Prep page for second task";

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
