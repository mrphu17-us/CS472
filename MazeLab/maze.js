var isTouch = false;
var isGameStart = false;

$(document).ready(function () {
    $("#maze>div.boundary").mouseover(function () {
        youloseHover();
    });

    $("div#start").click(function () {
        reset();
        $("#status").html("Game On!");
    });

    $("div#start").mouseover(function () {
        $(this).css("cursor", "pointer");
    });

    $("div#end").mouseover(function () {
        end();
    });
});

function youloseHover() {
    if (isGameStart) {
        isTouch = true;
        $("#maze>div.boundary").addClass("youlose");
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
    $("#status").html("Click the \"S\" to begin.");
}

function reset() {
    $("#maze>div.boundary").removeClass("youlose");
    $("#status").html("Click the \"S\" to begin.");
    isTouch = false;
    isGameStart = true;
}