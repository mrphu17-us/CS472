var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");
var dropdownAnimation = document.getElementById("dropdownAnimation");
var dropdownSize = document.getElementById("dropdownSize");
var textarea = document.getElementById("textarea");
var checkboxTurbo = document.getElementById("checkboxTurbo");

var selectedAnimation = "";
var selectedFontSize = "12pt";
var speed = 250;
var animationTimer;
var currentFrame = 0;

var FONTSIZE = [];
FONTSIZE["Tiny"] = "7pt";
FONTSIZE["Small"] = "10pt";
FONTSIZE["Medium"] = "12pt";
FONTSIZE["Large"] = "16pt";
FONTSIZE["ExtraLarge"] = "24pt";
FONTSIZE["XXL"] = "32pt";

btnStart.onclick = onClickBtnStart;
btnStop.onclick = onClickBtnStop;
dropdownAnimation.onchange = onChangeAnimation;
dropdownSize.onchange = onChangeFontSize;
checkboxTurbo.onchange = onchangeTurbo;

function onClickBtnStart() {
    startAnimation(true);
}

function onClickBtnStop() {
    clearAnimation();
}

function onchangeTurbo() {
    if (this.checked == true) {
        speed = 50;
    } else {
        speed = 250;
    }
    clearInterval(animationTimer);
    startAnimation(false);
}

function onChangeFontSize() {
    let selectedValue = this.value;
    selectedFontSize = FONTSIZE[selectedValue];
    textarea.style.fontSize = selectedFontSize;
}

function onChangeAnimation() {
    clearAnimation();
    let selectedValue = this.value;
    selectedAnimation = getAnimation(selectedValue);
    textarea.value = selectedAnimation;
}

function splitAnimationToFrame(animationString) {
    return animationString.split("=====\n");
}

function getAnimation(value) {
    return ANIMATIONS[value];
}

function startAnimation(isResetFrame) {
    btnStop.disabled = false;
    btnStart.disabled = true;
    if (isResetFrame == true)
        currentFrame = 0;
    let arrayAnimation = splitAnimationToFrame(selectedAnimation);
    animationTimer = setInterval(animation, speed, arrayAnimation);
}

function clearAnimation() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(animationTimer);
}

function animation(arrayAnimation) {
    textarea.value = arrayAnimation[currentFrame];
    currentFrame += 1;
    if (currentFrame >= arrayAnimation.length) {
        currentFrame = 0;
    }
}