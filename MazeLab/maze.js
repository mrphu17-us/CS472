var isTouch = false;
var isGameStart = false;

$(document).ready(function () {
    $("div.boundary").mouseover(function () {
        youloseHover(this);
    });

    $("div#start").click(function () {
        reset();
    });

    $("div#start").mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $("div#end").mouseover(function () {
        end();
    });
});

function youloseHover(div) {
    if (isGameStart) {
        isTouch = true;
        $(div).addClass("youlose");
    }
}

function end() {
    if (isGameStart == false) return;
    if (isTouch == false) {
        alert("You win!");
    } else {
        alert("Sorry, you lost. :[");
    }
    isGameStart = false;
}

function reset() {
    $("div").removeClass("youlose");
    isTouch = false;
    isGameStart = true;
}