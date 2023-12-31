
//button click animation

const buttonClickAnimation = (id) => {

    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 200);

}

//select option animation toggle
window.selectedOption = 0;


const selectOptionButton = (id) => {

    //same 3 statements for activating check button
    document.getElementById('check-button-div').classList.add('check-button-outer-active');
    document.getElementById('check-button').classList.remove('check-button-inner-inactive')
    document.getElementById('check-button').classList.add('check-button-inner-active')


    selectedOption = parseInt(id);
    console.log(selectedOption)
    document.querySelectorAll('.option-no-selected').forEach((option) => {
        option.classList.remove('option-no-selected');
        option.className = 'option-no'
    })
    document.querySelectorAll('.outer-options-div-selected').forEach((option) => {
        option.classList.remove('outer-options-div-selected');
        option.className = 'outer-options-div'
    });
    document.querySelectorAll('.option-name-selected').forEach((option) => {
        option.classList.remove('option-name-selected');
        option.className = 'option-name'

    });
    document.querySelectorAll('.option-div-selected').forEach((option) => {
        option.classList.remove('.option-div-selected');
        option.className = 'option-div'
    });
    document.getElementById('option-no-' + id).className = 'option-no-selected';
    document.getElementById('option-name-' + id).className = 'option-name-selected';
    document.getElementById(id).className = 'option-div-selected';
    document.getElementById('outer-options-div-' + id).className = 'outer-options-div-selected';

}


function correctOption(selectedOption) {

    document.getElementById('option-no-' + selectedOption).className = 'option-no-correct';
    document.getElementById('option-name-' + selectedOption).className = 'option-name-correct';
    document.getElementById(selectedOption).className = 'option-div-correct';
    document.getElementById('outer-options-div-' + selectedOption).className = 'outer-options-div-correct';
}




// let question;
// fetch('../assets/JSON/german_lev_1.json')
//     .then(response => response.json())
//     .then(data => { question = data.challenges[4] })
// challengeAssist(question);


// function fetchQuestion() {
//     fetch('../assets/JSON/german_lev_1.json')
//         .then(response => response.json())
//         .then(async data => { return await data.challenges[4] })
//     console.log();
// }

// question = fetchQuestion();


function challengeAssist(question) {
    console.log(question);

    let challengeAssistDiv = document.createElement("div");
    challengeAssistDiv.className = "challenge-assist";

    let assistSectionDiv = document.createElement("div");
    assistSectionDiv.className = "challenge-section";

    let assistHeaderDiv = document.createElement("div");
    assistHeaderDiv.className = "challenge-header";

    let h1Element = document.createElement("h1");
    let spanElement = document.createElement("span");
    spanElement.innerText = "Select the correct meaning";
    h1Element.appendChild(spanElement);

    let assistContentDiv = document.createElement("div");
    assistContentDiv.className = "assist-content";

    let assistContentQuestionDiv = document.createElement("div");
    assistContentQuestionDiv.className = "assist-content-question";

    let assistQuestionRowDiv = document.createElement("div");
    assistQuestionRowDiv.className = "assist-question-row";

    let assistCharacterDiv = document.createElement("div");
    assistCharacterDiv.id = "assist-character";

    let assistWordContainerDiv = document.createElement("div");
    assistWordContainerDiv.className = "assist-word-container";

    let containerDiv = document.createElement("div");

    let assistTextDiv = document.createElement("div");
    assistTextDiv.id = "assist-text";

    let containerProjectionDiv = document.createElement("div");
    containerProjectionDiv.className = "container-projection";

    // Create div with class "projection"
    let projectionDiv = document.createElement("div");
    projectionDiv.className = "projection";

    // Create div with id "assist-content-options"
    let assistContentOptionsDiv = document.createElement("div");
    assistContentOptionsDiv.id = "assist-content-options";

    // Append elements in a nested structure
    containerDiv.appendChild(assistTextDiv);
    containerProjectionDiv.appendChild(projectionDiv);
    assistWordContainerDiv.appendChild(containerDiv);
    assistWordContainerDiv.appendChild(containerProjectionDiv);
    assistQuestionRowDiv.appendChild(assistCharacterDiv);
    assistQuestionRowDiv.appendChild(assistWordContainerDiv);
    assistContentQuestionDiv.appendChild(assistQuestionRowDiv);
    assistContentDiv.appendChild(assistContentQuestionDiv);
    assistContentDiv.appendChild(assistContentOptionsDiv);

    // Append all elements to the document body
    assistHeaderDiv.appendChild(h1Element);
    assistHeaderDiv.appendChild(assistContentDiv);
    assistSectionDiv.appendChild(assistHeaderDiv);
    challengeAssistDiv.appendChild(assistSectionDiv);

    // Append the challengeAssistDiv to the div with class "mid-row"
    let midRowDiv = document.querySelector('.mid-row');
    midRowDiv.appendChild(challengeAssistDiv);
    let animationPath = '../assets/json-animations/assistheader.json';
    // Replace with the actual link to your Lottie JSON file
    const animation = bodymovin.loadAnimation({
        container: document.getElementById('assist-character'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });

    //question section
    document.getElementById('assist-text').textContent = question.prompt;
    const choices = question.options;
    // console.log(data.challenges[4].choices[data.challenges[4].correctIndex])
    //set correct answer in local storage
    localStorage.setItem('correctIndex', question.correctIndex + 1);
    localStorage.setItem('solution', question.choices[question.correctIndex]);
    // console.log(choices)
    // console.log(data.challenges.length)
    // num = Math.floor(Math.random() * data.challenges.length);
    // console.log(num)

    // Get the container where buttons will be added
    const assistContent = document.getElementById('assist-content-options');
    let outerOptionsCounter = 1;
    let optionCounter = 1;
    choices.forEach(choice => {
        const outerOptionsDiv = document.createElement("div");
        outerOptionsDiv.className = "outer-options-div";
        outerOptionsDiv.id = "outer-options-div-" + optionCounter;
        //audio
        const audio = new Audio(choice.tts);

        // Create option div
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-div";
        optionDiv.id = optionCounter.toString();
        optionDiv.addEventListener("click", function () {
            selectOptionButton(this.id);
            buttonClickAnimation(this.id);
            audio.play();
        });

        // Create option number span
        const optionNoSpan = document.createElement("span");
        optionNoSpan.className = "option-no";
        optionNoSpan.id = "option-no-" + optionCounter;
        optionNoSpan.textContent = optionCounter;
        // Create option name span
        const optionNameSpan = document.createElement("span");
        optionNameSpan.className = "option-name";
        optionNameSpan.id = "option-name-" + optionCounter;
        optionNameSpan.textContent = choice.text

        // Append spans to the option div
        optionDiv.appendChild(optionNoSpan);
        optionDiv.appendChild(optionNameSpan);

        // Append option div to outer options div
        outerOptionsDiv.appendChild(optionDiv);

        // Append outer options div to the body
        assistContent.appendChild(outerOptionsDiv);

        // Increment counters for unique IDs
        outerOptionsCounter++;
        optionCounter++;
    });

}

