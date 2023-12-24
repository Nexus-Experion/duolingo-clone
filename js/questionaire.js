function currentHearts() {
    //FETCH HEART FROM FIRESTORE TO HERE AND UPDATE THROUGH HERE
    document.getElementById("heart-count").textContent = "3";
};

function skipButton(id) {
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
}

function checkButton(id) {
    disablePointer();
    if (localStorage.getItem('correctIndex') == window.selectedOption) {
        correctOption(selectedOption);
        correctBottomRow();
    }
    else {
        wrongBottomRow();
    }
    // console.log(window.selectedOption)
    console.log(window.selectedOption)
    // console.log(selectedOption)
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
    document.getElementById('continue-button').textContent = 'Continue'
}


function correctBottomRow() {
    const bottomRow = document.querySelector('.bottom-row');
    bottomRow.style.backgroundColor = '#d7ffb8';
}

function wrongBottomRow() {
    const bottomRow = document.querySelector('.bottom-row');
    bottomRow.style.backgroundColor = '#ffdfe0';
    document.getElementById('check-button-div').classList.add('check-button-outer-wrong');
    document.getElementById('check-button').classList.remove('check-button-inner-active');
    document.getElementById('check-button').classList.add('check-button-inner-wrong');
}