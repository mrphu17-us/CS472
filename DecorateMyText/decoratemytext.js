window.onload = function () {
    var btnDecoration = document.getElementById("btnDecoration");
    btnDecoration.onclick = autoChangeFontSize;

    var checkboxBling = document.getElementById("checkboxBling");
    checkboxBling.onchange = checkBoxChanged;

    var btnIgpayAtinlay = document.getElementById("btnIgpayAtinlay");
    btnIgpayAtinlay.onclick = convertPigLatin;

    var btnMalkovitch = document.getElementById("btnMalkovitch");
    btnMalkovitch.onclick = convertMalkovitch;
}

function checkBoxChanged() {
    let element = getTextArea();
    if (this.checked == true) {
        element.style.fontWeight = "bold";
        element.style.color = "green";
        element.style.textDecoration = "underline";
        document.body.style.backgroundImage =
            "url('https://www.teahub.io/photos/full/313-3134967_nice-backgrounds-for-computers.jpg')";
    } else {
        element.style.fontWeight = "";
        element.style.color = "";
        element.style.textDecoration = "";
    }
}

function autoChangeFontSize() {
    let timer = setInterval(changeFontTo, 500);
    let fontSize = 12;
    let element = getTextArea();

    function changeFontTo() {
        if (fontSize >= 30) {
            clearInterval(timer);
        } else {
            let currentSize = element.style.fontSize;
            console.log(currentSize);
            if (currentSize == "") {
                currentSize = fontSize + "pt";
            }
            currentSize = parseInt(currentSize) + 2;
            element.style.fontSize = currentSize + "pt";
            fontSize += 2;
        }
    }
}

function getTextArea() {
    return document.getElementById("textArea");
}

function convertPigLatin() {
    let element = getTextArea();
    let convertText = pigLatin(element.value);
    element.value = convertText;
}

function isVowel(c) {
    return (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' ||
        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

function pigLatin(s) {
    let len = s.length;
    let index = -1;
    for (let i = 0; i < len; i++) {
        if (isVowel(s.charAt(i))) {
            index = i;
            break;
        }
    }
    if (index == -1)
        return "-1";

    return s.substring(index) +
        s.substring(0, index) + "ay";
}

function convertMalkovitch() {
    let element = getTextArea();
    let s = element.value;
    let arrayString = s.split(" ");
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i].length >= 5) {
            arrayString[i] = "Malkovich";
        }
    }
    element.value = arrayString.join(" ");
}