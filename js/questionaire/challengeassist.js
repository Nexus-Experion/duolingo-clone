function challengeAssist(question) {
    document.querySelector('.mid-row').innerHTML = '';
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

    let projectionDiv = document.createElement("div");
    projectionDiv.className = "projection";

    let assistContentOptionsDiv = document.createElement("div");
    assistContentOptionsDiv.id = "assist-content-options";

    containerDiv.appendChild(assistTextDiv);
    containerProjectionDiv.appendChild(projectionDiv);
    assistWordContainerDiv.appendChild(containerDiv);
    assistWordContainerDiv.appendChild(containerProjectionDiv);
    assistQuestionRowDiv.appendChild(assistCharacterDiv);
    assistQuestionRowDiv.appendChild(assistWordContainerDiv);
    assistContentQuestionDiv.appendChild(assistQuestionRowDiv);
    assistContentDiv.appendChild(assistContentQuestionDiv);
    assistContentDiv.appendChild(assistContentOptionsDiv);

    assistHeaderDiv.appendChild(h1Element);
    assistHeaderDiv.appendChild(assistContentDiv);
    assistSectionDiv.appendChild(assistHeaderDiv);
    challengeAssistDiv.appendChild(assistSectionDiv);

    let midRowDiv = document.querySelector('.mid-row');
    midRowDiv.appendChild(challengeAssistDiv);

    let animationPath = '../assets/json-animations/assistheader.json';
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

    //set correct answer in local storage
    localStorage.setItem('correctIndex', question.correctIndex + 1);
    localStorage.setItem('solution', question.choices[question.correctIndex]);

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

        // Create option number 
        const optionNoSpan = document.createElement("span");
        optionNoSpan.className = "option-no";
        optionNoSpan.id = "option-no-" + optionCounter;
        optionNoSpan.textContent = optionCounter;

        // Create option name 
        const optionNameSpan = document.createElement("span");
        optionNameSpan.className = "option-name";
        optionNameSpan.id = "option-name-" + optionCounter;
        optionNameSpan.textContent = choice.text

        optionDiv.appendChild(optionNoSpan);
        optionDiv.appendChild(optionNameSpan);

        outerOptionsDiv.appendChild(optionDiv);

        assistContent.appendChild(outerOptionsDiv);

        // Increment counters for unique IDs
        outerOptionsCounter++;
        optionCounter++;
    });
}

