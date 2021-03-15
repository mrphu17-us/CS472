/*Fifteen Puzzle Logic control*/
var emptySquare = 15;
// use this to calculate 4 relative squares of current square up right down left
const upside = [];
upside.up = -4;
upside.left = -1;
upside.right = 1;
upside.down = 4;

$(document).ready(function () {
    init();
});

/* each square will have click, mouse over, leave event */
var init = function () {
    // initialize each piece
    $("#puzzlearea div").each(function (i, div) {
        initSquare(div, i);

        $(this).click(puzzleOnClick);
        $(this).mouseover(puzzleOnHover);
        $(this).mouseleave(puzzleOnLeave);
    });
    $("#shufflebutton").click(shuffle);
};

/* on hover check if the square can move -> highlight */
function puzzleOnHover() {
    $("#puzzlearea div").css('cursor', 'pointer');
    if (isCanMove(this.pos) == true) {
        $(this).css("border", "5px solid red");
    }
}

/* return square to normal */
function puzzleOnLeave() {
    $(this).css("border", "5px solid black");
}

/* check if 4 relative squares can add up to emptySquare*/
function isCanMove(currentPos) {
    currentPos = parseInt(currentPos);
    if ((currentPos + upside.up) == emptySquare ||
        (currentPos + upside.left) == emptySquare ||
        (currentPos + upside.right) == emptySquare ||
        (currentPos + upside.down) == emptySquare) {
        return true;
    }
    return false;
}

/* on click then check if it can move and then move else do nothing */
function puzzleOnClick() {
    var curPos = this.pos;
    if (isCanMove(curPos) == true) {
        moveSquare(this, emptySquare, true);
        this.pos = emptySquare;
        emptySquare = curPos;
    } else {
        console.log("Cant move this square");
    }
}

/* init square with image and use pos to store position 0-15 */
function initSquare(div, i, isBackgroudChanged = false) {
    // calculate x and y for this piece
    var x = ((i % 4) * 100);
    var y = (Math.floor(i / 4) * 100);

    // set basic style and background
    $(div).addClass("puzzlepiece");
    $(div).css("left", x + 'px');
    $(div).css("top", y + 'px');

    // $(div).css("background-image", 'url(background.jpg)');
    div.style.backgroundImage = 'url("background.jpg")';
    $(div).css("background-position", -x + 'px ' + (-y) + 'px');

    // store x and y and pos
    div.x = x;
    div.y = y;
    div.pos = i;
}

/* move the square with animation */
function moveSquare(div, i, animate = false) {
    // calculate x and y for this piece
    var x = ((i % 4) * 100);
    var y = (Math.floor(i / 4) * 100);

    if (animate) {
        if (y == div.y && x > div.x) {
            $(div).animate({
                "left": x + 'px'
            }, "fast");
        } else if (y == div.y && x <= div.x) {
            $(div).animate({
                "left": x + 'px'
            }, "fast");
        } else if (x == div.x && y > div.y) {
            $(div).animate({
                "top": y + 'px'
            }, "fast");
        } else {
            $(div).animate({
                "top": y + 'px'
            }, "fast");
        }
    } else {
        $(div).css("left", x + 'px');
        $(div).css("top", y + 'px');
    }
    // store x and y and pos
    div.x = x;
    div.y = y;
    div.pos = i;
}

/* random choose the step and move */
function shuffle() {
    var randomStep = 100;
    while (randomStep > 0) {
        var canMoveSquares = [];
        $("#puzzlearea div").each(function (i, div) {
            if (isCanMove(div.pos) == true) {
                canMoveSquares.push(div);
            }
        });
        if (canMoveSquares.length > 0) {
            let randomIndex = Math.floor(Math.random() * canMoveSquares.length);
            let randomDiv = canMoveSquares[randomIndex];
            var curPos = randomDiv.pos;

            moveSquare(randomDiv, emptySquare);
            randomDiv.pos = emptySquare;
            emptySquare = curPos;
        }
        randomStep--;
    }
}