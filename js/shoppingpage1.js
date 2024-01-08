"use strict";
const myButton = document.getElementById('heartButton');
const mySpan = document.getElementById('text-in-button-heart-text');
let userData = JSON.parse(sessionStorage.getItem("user-info") || "{}") || { gems: 0, hearts: 0 };
let diamond = userData.gems;
let hearts = userData.hearts;
function checkSpanValue() {
    console.log('entered');
    const spanValue = parseInt(((mySpan === null || mySpan === void 0 ? void 0 : mySpan.textContent) || '0'), 10);
    if (hearts >= 10) {
        if (myButton)
            myButton.disabled = true;
    }
    else {
        if (myButton) {
            myButton.disabled = false;
            myButton.style.color = 'rgb(var(--color-blue-space))';
            const spanInsideButton = myButton.querySelector("span");
            if (spanInsideButton)
                spanInsideButton.textContent = "Buy";
        }
    }
}
if (mySpan)
    mySpan.addEventListener('change', checkSpanValue);
checkSpanValue();
function calcDiamond() {
    if (userData.gems >= 10 && userData.hearts < 5) {
        userData.gems -= 10;
        userData.hearts += 1;
        sessionStorage.setItem("user-info", JSON.stringify(userData));
        // Update hearts and gems display or any other necessary action
    }
}
if (myButton)
    myButton.addEventListener('click', calcDiamond);
