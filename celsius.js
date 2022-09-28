"use strict";

window.onload = init;

function init() {   
    const convertNum = document.getElementById("convertNum");
    convertNum.onclick = onConvertBtnClicked;
}

function onConvertBtnClicked() {
    const celsiusField = document.getElementById("celsiusField");
    const messagePara = document.getElementById("messagePara");
    let someNum = Number(celsiusField.value);
    let toFahrenheit = (someNum * 9/5) + 32;
    const answerField = document.getElementById("answerField");
    answerField.value = Math.round(toFahrenheit);

    if (isNaN(someNum)) {
        messagePara.innerHTML = "Invalid";
        return;
    }

    messagePara.innerHTML = ""
}

function refresh(){
    window.location.reload("Refresh")
  }