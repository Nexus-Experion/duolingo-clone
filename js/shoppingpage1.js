"use strict";
function checkSpanValue() {
    let userData = JSON.parse(sessionStorage.getItem("user-info") || '{}');
    let hearts = userData.hearts;
    console.log(userData.hearts);
    let myButton = document.getElementById('heartButton');
    if (!myButton)
        return; // Handle the case when myButton is null
    if (hearts >= 4) {
        myButton.disabled = true;
        const span = myButton.querySelector("span");
        if (span) {
            span.textContent = "Full";
        }
    }
    else {
        myButton.disabled = false;
        myButton.style.color = 'rgb(var(--color-blue-space))';
        const span = myButton.querySelector("span");
        if (span) {
            span.textContent = "Buy";
        }
    }
}
