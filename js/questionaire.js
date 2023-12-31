function currentHearts() {
    //FETCH HEART FROM FIRESTORE TO HERE AND UPDATE THROUGH HERE
    document.getElementById("heart-count").textContent = "3";
};

function skipButton(id) {
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
}
function disablePointer() {
    const parentDiv = document.querySelector('.mid-row');
    const childElements = parentDiv.getElementsByTagName('*');

    for (const childElement of childElements) {
        childElement.style.pointerEvents = 'none';
    }
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



document.addEventListener("DOMContentLoaded", function () {
    // Fetch the external JSON file
    fetch('../assets/JSON/german_lev_1.json')
        .then(response => response.json())
        .then(data => {
            let index = Math.floor(Math.random() * data.challenges.length);
            // console.log(data.challenges[index]);
            console.log(data.challenges[index]);
            console.log(data.challenges[index].type);
            // challengeDialogue(data.challenges[12]);
            // data.challenges
            // challengetranscription(data.challenges[13]);

            if (data.challenges[index].type == "assist") {
                console.log("inner");
                challengeAssist(data.challenges[index]);
            }
            else if (data.challenges[index].type == "dialogue") {
                challengeDialogue(data.challenges[index]);
            }
            else if (data.challenges[index].type == "selectTranscription") {
                challengetranscription(data.challenges[index]);

            }
        })

        .catch(error => {
            console.error('Error fetching choices:', error);
        });
})