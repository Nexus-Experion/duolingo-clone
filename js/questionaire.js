let heartCount = 5;
let clickCount = 0;
function currentHearts() {
    //FETCH HEART FROM FIRESTORE TO HERE AND UPDATE THROUGH HERE
    document.getElementById("heart-count").textContent = "3";
};

function skipButton(id) {
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
    // document.getElementById(id).classList.add('');
    document.getElementById('check-button').classList.remove('check-button-inner-inactive')
    checkButton(id);
}
function disablePointer() {
    const parentDiv = document.querySelector('.mid-row');
    const childElements = parentDiv.getElementsByTagName('*');

    for (const childElement of childElements) {
        childElement.style.pointerEvents = 'none';
    }
}
function resetBottomRow() {
    document.getElementById('skip-span').textContent = "SKIP";

    const skipButton = document.querySelector('.skip-button');
    skipButton.style.display = 'block';

    const bottomRow = document.querySelector('.bottom-row');
    bottomRow.style.backgroundColor = '#FFFFFF';

    const bottomLeftRow = document.querySelector('#correct-left');
    bottomLeftRow.style.display = 'none';
    const wrongNottomLeftRow = document.querySelector('#wrong-left');
    wrongNottomLeftRow.style.display = 'none';
    document.getElementById('continue-button').textContent = 'CHECK'
    document.querySelector('#check-button-div').classList.remove('check-button-continue');

    document.getElementById('check-button').classList.add('check-button-inner-inactive')
    document.getElementById('check-button-div').classList.remove('check-button-outer-active');

    document.getElementById('check-button-div').classList.remove('check-button-outer-wrong');
    document.getElementById('check-button').classList.add('check-button-inner-active');
    document.getElementById('check-button').classList.remove('check-button-inner-wrong');
}

function checkButton(id) {
    disablePointer();
    if (localStorage.getItem('correctIndex') == window.selectedOption) {
        correctOption(selectedOption);

        correctBottomRow();
        if (clickCount == 0) {
            const audio = new Audio('../assets/audio/correct-sound.mp3');
            audio.play();
            xpCount = xpCount + 2;
        }
    }
    else {

        wrongBottomRow();


        if (clickCount == 0) {
            document.getElementById("heart-count").textContent = heartCount - 1;
            heartCount = heartCount - 1;
            const audio = new Audio('../assets/audio/wrong-sound.mp3');
            audio.play();
        }
    }

    // console.log(window.selectedOption)
    console.log(window.selectedOption)
    // console.log(selectedOption)
    document.querySelector('#check-button-div').classList.add('check-button-continue');
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
    document.getElementById('continue-button').textContent = 'Continue'
    clickCount++;
    // console.log(clickCount + "after addition")
    // console.log("lorem1234")
    if (clickCount === 2) {
        // Call your function on the second click
        // console.log("lorem12345678")

        questionLoad();
        // Reset clickCount for future clicks
        clickCount = 0;
    }

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



let questionCount = 1;
let xpCount = -1;

function questionLoad() {
    fetch('../assets/JSON/german_lev_1.json')
        .then(response => response.json())
        .then(data => {
            let index = Math.floor(Math.random() * data.challenges.length);
            // console.log(data.challenges[index]);
            if (questionCount < 5) {
                console.log(data.challenges[index]);
                console.log(data.challenges[index].type);
                // challengeDialogue(data.challenges[12]);
                // data.challenges
                // challengetranscription(data.challenges[13]);

                if (data.challenges[index].type == "assist") {
                    resetBottomRow();
                    console.log("inner");
                    challengeAssist(data.challenges[index]);
                    questionCount++;

                }
                else if (data.challenges[index].type == "dialogue") {
                    resetBottomRow();
                    challengeDialogue(data.challenges[index]);
                    questionCount++;

                }
                else if (data.challenges[index].type == "selectTranscription") {
                    resetBottomRow();
                    challengetranscription(data.challenges[index]);
                    questionCount++;

                }
                else {
                    questionLoad();

                }
            }
            else {

                localStorage.setItem('xpCount', xpCount + 1);

                lessonComplete();
                console.log("Ended the questionaire");
                xpCount = -1;

            }

        })

        .catch(error => {
            console.error('Error fetching choices:', error);
        });
}


window.onload = setTimeout(() => questionLoad(), 300);


function lessonComplete() {
    clickCount = 0;
    resetBottomRow();
    document.getElementById('check-button-div').classList.add('check-button-outer-active');
    document.getElementById('check-button').classList.remove('check-button-inner-inactive')
    document.getElementById('check-button').classList.add('check-button-inner-active');
    document.getElementById('continue-button').textContent = 'Continue'


    document.querySelector('.mid-row').innerHTML = '';
    document.querySelector('.top-row-question-page-sections').innerHTML = '';
    // Create the main container
    let lessonCompleteContainer = document.createElement('div');
    lessonCompleteContainer.className = 'lesson-complete';

    // Create the inner elements
    let lottieLesson = document.createElement('div');
    lottieLesson.id = 'lottie-lesson';

    let appreciationContainer = document.createElement('div');
    appreciationContainer.className = 'lesson-appreciation';

    let appreciationHead = document.createElement('div');
    appreciationHead.className = 'appreciation-head';
    appreciationHead.textContent = 'Lesson Complete';

    let appreciationBody = document.createElement('div');
    appreciationBody.className = 'appreciation-body';
    appreciationBody.textContent = 'You have completed this lesson';

    let lessonStatsContainer = document.createElement('div');
    lessonStatsContainer.className = 'lesson-stats';

    // XP container
    let xpOuter = document.createElement('div');
    xpOuter.className = 'xp-outer';

    let lessonXp = document.createElement('div');
    lessonXp.className = 'lesson-xp';

    let xpHead = document.createElement('div');
    xpHead.className = 'lesson-head';
    xpHead.id = 'xp-head';
    xpHead.textContent = 'TOTAL XP';

    let innerXpContainer = document.createElement('div');
    innerXpContainer.className = 'inner-xp-container inner-xp-container-xp';

    let xpImage = document.createElement('img');
    xpImage.src = '../assets/svg/lesson-xp.svg';

    let xpSpan = document.createElement('span');
    xpSpan.textContent = localStorage.getItem("xpCount");

    appreciationContainer.appendChild(appreciationHead);
    appreciationContainer.appendChild(appreciationBody);


    innerXpContainer.appendChild(xpImage);
    innerXpContainer.appendChild(xpSpan);

    xpOuter.appendChild(lessonXp);
    xpOuter.appendChild(xpHead);
    xpOuter.appendChild(innerXpContainer);

    // Percent container
    let percentOuter = document.createElement('div');
    percentOuter.className = 'xp-outer';

    let lessonPercent = document.createElement('div');
    lessonPercent.className = 'lesson-percent';

    let percentHead = document.createElement('div');
    percentHead.className = 'lesson-head';
    percentHead.id = 'percent-head';
    percentHead.textContent = 'TRY HARDER';

    let innerPercentContainer = document.createElement('div');
    innerPercentContainer.className = 'inner-xp-container inner-xp-container-percent';

    let percentImage = document.createElement('img');
    percentImage.src = '../assets/svg/lesson-percent.svg';

    let percentSpan = document.createElement('span');
    percentSpan.textContent = (localStorage.getItem("xpCount") / 8) * 100 + "%";

    innerPercentContainer.appendChild(percentImage);
    innerPercentContainer.appendChild(percentSpan);

    percentOuter.appendChild(lessonPercent);
    percentOuter.appendChild(percentHead);
    percentOuter.appendChild(innerPercentContainer);

    lessonStatsContainer.appendChild(xpOuter);
    lessonStatsContainer.appendChild(percentOuter);

    lessonCompleteContainer.appendChild(lottieLesson);
    lessonCompleteContainer.appendChild(appreciationContainer);
    lessonCompleteContainer.appendChild(lessonStatsContainer);
    switchCount = 0;
    // Append the main container to the 'mid-row' class
    let midRow = document.querySelector('.mid-row');
    midRow.appendChild(lessonCompleteContainer);
    let continueButton = document.getElementById('check-button');
    continueButton.addEventListener('click', switchToLearn)

    document.querySelector('.skip-button').style.display = 'none';
    document.querySelector('#correct-left').style.display = 'none';
    document.querySelector('#wrong-left').style.display = 'none';



    let animationPath = '../assets/json-animations/lesson-complete.json';
    // Replace with the actual link to your Lottie JSON file
    const animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-lesson'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });

}

function switchToLearn() {

    switchCount++;

    if (switchCount === 1) {
        window.location.href = './learn.html';
    }

} a
