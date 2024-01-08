"use strict";
function checkSpanValue() {
    const userDataString = sessionStorage.getItem("user-info");
    let userData = null;
    if (userDataString !== null) {
        userData = JSON.parse(userDataString);

    }
    let hearts = userData ? userData.hearts : 0; // Provide a default value if userData is null
    console.log(userData === null || userData === void 0 ? void 0 : userData.hearts); // Optional chaining operator to avoid errors if userData is null
    if (hearts && myButton) {
        if (hearts >= 5) {
            myButton.disabled = true;
            let spanElement = myButton.querySelector("span");
            if (spanElement) {
                spanElement.textContent = "Full";
            }
        }
        else {
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
