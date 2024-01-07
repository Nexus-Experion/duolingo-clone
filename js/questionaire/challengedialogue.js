let challengeDialogue = (question) => {
    localStorage.setItem('challenge', question.type);

    // const audioQuestion = new Audio(question.tts);
    // audioQuestion.play();
    document.querySelector('.mid-row').innerHTML = '';

    let challengeDialogue = document.createElement('div');
    challengeDialogue.classList.add('challenge-dialogue');

    let challengeSection = document.createElement('div');
    challengeSection.classList.add('challenge-section');

    let challengeHeader = document.createElement('div');
    challengeHeader.classList.add('challenge-header');

    let h1Element = document.createElement('h1');

    let spanElement = document.createElement('span');
    spanElement.textContent = 'Complete the chat';

    h1Element.appendChild(spanElement);

    // Create the dialogue-content 
    let dialogueContent = document.createElement('div');
    dialogueContent.classList.add('dialogue-content');

    let dialogueContentQuestion = document.createElement('div');
    dialogueContentQuestion.classList.add('dialogue-content-question');

    let dialogueQuestionRow = document.createElement('div');
    dialogueQuestionRow.classList.add('dialogue-question-row');

    let assistContentOptions = document.createElement('div');
    assistContentOptions.id = 'assist-content-options';

    dialogueContentQuestion.appendChild(dialogueQuestionRow);
    dialogueContent.appendChild(dialogueContentQuestion);
    dialogueContent.appendChild(assistContentOptions);

    challengeHeader.appendChild(h1Element);
    challengeHeader.appendChild(dialogueContent);

    challengeSection.appendChild(challengeHeader);
    challengeDialogue.appendChild(challengeSection);


    let midRowElement = document.querySelector('.mid-row');
    midRowElement.appendChild(challengeDialogue);

    let firstDialogueRow = document.createElement('div');
    firstDialogueRow.classList.add('first-dialogue-row');

    let firstDialogueRowContent = document.createElement('div');
    firstDialogueRowContent.classList.add('dialogue-row-content', 'first-dialogue-row-content');

    //image element for dialogue-character-one
    let dialogueCharacterOne = document.createElement('img');
    dialogueCharacterOne.id = 'dialogue-character-one';

    let projectionDialogue = document.createElement('div');
    projectionDialogue.classList.add('projection-dialogue');

    let firstDialogueContainer = document.createElement('div');
    firstDialogueContainer.classList.add('dialogue-container', 'first-dialogue-container');

    let dialogueSpeakerSpan = document.createElement('span');
    dialogueSpeakerSpan.classList.add('dialogue-speaker');

    let speakerButton = document.createElement('button');
    speakerButton.classList.add('speaker-button');

    let speakerAnimationSpan = document.createElement('span');
    speakerAnimationSpan.classList.add('speaker-animation');
    speakerAnimationSpan.id = 'speaker-animation';

    let dialogueTextDiv = document.createElement('div');
    dialogueTextDiv.id = 'dialogue-text';

    firstDialogueContainer.appendChild(dialogueSpeakerSpan);
    dialogueSpeakerSpan.appendChild(speakerButton);
    speakerButton.appendChild(speakerAnimationSpan);
    firstDialogueContainer.appendChild(dialogueTextDiv);

    firstDialogueRowContent.appendChild(dialogueCharacterOne);
    firstDialogueRowContent.appendChild(projectionDialogue);
    firstDialogueRowContent.appendChild(firstDialogueContainer);

    firstDialogueRow.appendChild(firstDialogueRowContent);


    let secondDialogueRow = document.createElement('div');
    secondDialogueRow.classList.add('second-dialogue-row');

    let secondDialogueRowContent = document.createElement('div');
    secondDialogueRowContent.classList.add('dialogue-row-content', 'second-dialogue-row-content');

    let secondDialogueContainer = document.createElement('div');
    secondDialogueContainer.classList.add('dialogue-container', 'second-dialogue-container');

    let emptyDialogueSpan = document.createElement('span');
    emptyDialogueSpan.classList.add('empty-dialogue');

    let innerEmptySpan = document.createElement('span');
    innerEmptySpan.classList.add('inner-empty-span');

    let rightAngleProjectileDialogue = document.createElement('div');
    rightAngleProjectileDialogue.classList.add('projection-dialogue', 'right-angle-projectile-dialogue');

    let dialogueCharacterTwo = document.createElement('img');
    dialogueCharacterTwo.id = 'dialogue-character-two';

    secondDialogueContainer.appendChild(emptyDialogueSpan);
    emptyDialogueSpan.appendChild(innerEmptySpan);

    secondDialogueRowContent.appendChild(secondDialogueContainer);
    secondDialogueRowContent.appendChild(rightAngleProjectileDialogue);
    secondDialogueRowContent.appendChild(dialogueCharacterTwo);

    secondDialogueRow.appendChild(secondDialogueRowContent);

    let dialogueQuestionRowElement = document.querySelector('.dialogue-question-row');
    dialogueQuestionRowElement.appendChild(firstDialogueRow);
    dialogueQuestionRowElement.appendChild(secondDialogueRow);

    const choices = question.choices;
    localStorage.setItem('correctIndex', question.correctIndex + 1);
    localStorage.setItem('solution', question.choices[question.correctIndex]);
    assistContent = document.getElementById('assist-content-options');
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
        optionNameSpan.textContent = choice;

        // Append spans to the option div
        optionDiv.appendChild(optionNoSpan);
        optionDiv.appendChild(optionNameSpan);

        outerOptionsDiv.appendChild(optionDiv);

        assistContent.appendChild(outerOptionsDiv);

        // Increment counters
        outerOptionsCounter++;
        optionCounter++;
    });

    const speakerAnimation =
        bodymovin.loadAnimation({
            container:
                document.getElementById(
                    "speaker-animation"
                ),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "../assets/json-animations/speaker.json",
        });

    const audio = new Audio(question.dialogue[0].tts);
    // audio.muted = false;
    // var audioPlay = audio.play();
    console.log(question.dialogue[0].character.idleAnimation);
    console.log(question.dialogue[1].character.idleAnimation);
    let imagePath1 = question.dialogue[0].character.image.svg;
    let imagePath2 = question.dialogue[1].character.image.svg;

    let imageElementOne = document.getElementById('dialogue-character-one');
    // Set the path of the image
    imageElementOne.src = imagePath1;

    let imageElementTwo = document.getElementById('dialogue-character-two');
    imageElementTwo.src = imagePath2;
    //audioPlay;
    const textArray = (question.dialogue[0].displayTokens).map(obj => obj.text);
    const firstDialogueText = textArray.join('');
    console.log(firstDialogueText);
    document.getElementById("dialogue-text").textContent = firstDialogueText;
    speakerButton = document.getElementById('speaker-animation');
    speakerButton.addEventListener("click", function () {
        audio.play();
    })


}