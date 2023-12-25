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
        const audio = new Audio('../assets/audio/correct-sound.mp3');
        audio.play();

    }
    else {
        wrongBottomRow();
        const audio = new Audio('../assets/audio/wrong-sound.mp3');
        audio.play();
    }
    // console.log(window.selectedOption)
    console.log(window.selectedOption)
    // console.log(selectedOption)
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
    document.getElementById('continue-button').textContent = 'Continue'
}


function correctBottomRow() {
    const skipButton = document.querySelector('.skip-button');
    skipButton.style.display = 'none';
    const bottomLeftRow = document.querySelector('#correct-left');
    bottomLeftRow.style.display = 'block';
    const bottomRow = document.querySelector('.bottom-row');
    bottomRow.style.backgroundColor = '#d7ffb8';
}

function wrongBottomRow() {
    const bottomRow = document.querySelector('.bottom-row');
    bottomRow.style.backgroundColor = '#ffdfe0';
    const skipButton = document.querySelector('.skip-button');
    skipButton.style.display = 'none';
    const bottomLeftRow = document.querySelector('#wrong-left');
    bottomLeftRow.style.display = 'block';
    let solution = localStorage.getItem("solution");
    document.querySelector(".solution-text").textContent = solution;
    document.getElementById('check-button-div').classList.add('check-button-outer-wrong');
    document.getElementById('check-button').classList.remove('check-button-inner-active');
    document.getElementById('check-button').classList.add('check-button-inner-wrong');
}