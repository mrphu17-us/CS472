var emptySquare = 15;
var upside = [];
upside.up = -4;
upside.left = -1;
upside.right = 1;
upside.down = 4;

init = function () {
    // initialize each piece
    $("#puzzlearea div").each(function (i, div) {
        setPosition(div, i, true)

        $(this).click(puzzleOnClick);
        $(this).mouseover(puzzleOnHover);
        $(this).mouseleave(puzzleOnLeave);
    });
};

$(document).ready(function () {
    init();
});

function puzzleOnHover() {
    if (isCanMove(this.pos) == true) {
        $(this).css("border", "5px solid red");
        console.log("Current background pos: " + this.x + " y: " + this.y);
    }
}

function puzzleOnLeave() {
    $(this).css("border", "5px solid black");
}

function isCanMove(currentPos) {
    currentPos = parseInt(currentPos);
    console.log("current " + currentPos + " target " + emptySquare);
    if ((currentPos + upside.up) == emptySquare ||
        (currentPos + upside.left) == emptySquare ||
        (currentPos + upside.right) == emptySquare ||
        (currentPos + upside.down) == emptySquare) {
        return true;
    }
    return false;
}

function puzzleOnClick() {
    var curPos = this.pos;
    if (isCanMove(curPos) == true) {
        setPosition(this, emptySquare);
        this.pos = emptySquare;
        emptySquare = curPos;
        console.log("Curent empty square: " + emptySquare);
    } else {
        console.log("Cant move this square");
    }
}

function setPosition(div, i, isBackgroudChanged = false) {
    // calculate x and y for this piece
    var x = ((i % 4) * 100);
    var y = (Math.floor(i / 4) * 100);

    // set basic style and background
    $(div).addClass("puzzlepiece");
    $(div).css("left", x + 'px');
    $(div).css("top", y + 'px');
    if (isBackgroudChanged == true) {
        // $(div).css("background-image", 'url(background.jpg)');
        div.style.backgroundImage = 'url("background.jpg")';
        $(div).css("background-position", -x + 'px ' + (-y) + 'px');
    }

    // store x and y and pos
    div.x = x;
    div.y = y;
    div.pos = i;
}

function shuffle() {

}