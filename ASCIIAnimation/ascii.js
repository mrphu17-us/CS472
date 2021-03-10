/*jshint esversion: 6 */

var selectedAnimation = "";
var selectedFontSize = "12pt";
var speed = 250;
var animationTimer;
var currentFrame = 0;
var isPlaying = false;

var FONTSIZE = [];
FONTSIZE.Tiny = "7pt";
FONTSIZE.Small = "10pt";
FONTSIZE.Medium = "12pt";
FONTSIZE.Large = "16pt";
FONTSIZE.ExtraLarge = "24pt";
FONTSIZE.XXL = "32pt";
var ANIMATIONS = ANIMATIONS;

function init() {
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    var dropdownAnimation = document.getElementById("dropdownAnimation");
    var dropdownSize = document.getElementById("dropdownSize");
    var checkboxTurbo = document.getElementById("checkboxTurbo");

    btnStart.onclick = onClickBtnStart;
    btnStop.onclick = onClickBtnStop;
    dropdownAnimation.onchange = onChangeAnimation;
    dropdownSize.onchange = onChangeFontSize;
    checkboxTurbo.onchange = onchangeTurbo;
}

window.onload = init;

function onClickBtnStart() {
    startAnimation(true);
    isPlaying = true;
}

function onClickBtnStop() {
    clearAnimation();
    isPlaying = false;
}

function onchangeTurbo() {
    if (this.checked == true) {
        speed = 50;
    } else {
        speed = 250;
    }
    clearInterval(animationTimer);
    if (isPlaying) {
        startAnimation(false);
    }
}

function onChangeFontSize() {
    var selectedValue = this.value;
    var textarea = document.getElementById("textarea");
    selectedFontSize = FONTSIZE[selectedValue];
    textarea.style.fontSize = selectedFontSize;
}

function onChangeAnimation() {
    clearAnimation();
    var selectedValue = this.value;
    var textarea = document.getElementById("textarea");
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
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    btnStop.disabled = false;
    btnStart.disabled = true;
    if (isResetFrame == true)
        currentFrame = 0;
    let arrayAnimation = splitAnimationToFrame(selectedAnimation);
    animationTimer = setInterval(animation, speed, arrayAnimation);
}

function clearAnimation() {
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(animationTimer);
}

function animation(arrayAnimation) {
    var textarea = document.getElementById("textarea");
    textarea.value = arrayAnimation[currentFrame];
    currentFrame += 1;
    if (currentFrame >= arrayAnimation.length) {
        currentFrame = 0;
    }
}