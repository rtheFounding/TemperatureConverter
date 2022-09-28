"use strict";

window.onload = init;

function init() {   
    const convertNum = document.getElementById("convertNum");
    convertNum.onclick = onConvertBtnClicked;
}

function onConvertBtnClicked() {
    const fahrenheitField = document.getElementById("fahrenheitField");
    const messagePara = document.getElementById("messagePara");
    let someNum = Number(fahrenheitField.value);
    let toCelsius = (5/9) * (someNum - 32);
    const answerField = document.getElementById("answerField");
    answerField.value = Math.round(toCelsius);

    if (isNaN(someNum)) {
        messagePara.innerHTML = "Invalid";
        return;
    }

    messagePara.innerHTML = ""
}

function refresh(){
    window.location.reload("Refresh")
  }