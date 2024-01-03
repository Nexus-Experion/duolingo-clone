function challengeDialogue(question) {
    // const audioQuestion = new Audio(question.tts);
    // audioQuestion.play();
    document.querySelector('.mid-row').innerHTML = '';


    // Create the challenge-dialogue element
    let challengeDialogue = document.createElement('div');
    challengeDialogue.classList.add('challenge-dialogue');

    // Create the challenge-section element
    let challengeSection = document.createElement('div');
    challengeSection.classList.add('challenge-section');

    // Create the challenge-header element
    let challengeHeader = document.createElement('div');
    challengeHeader.classList.add('challenge-header');

    // Create the h1 element
    let h1Element = document.createElement('h1');

    // Create the span element inside h1
    let spanElement = document.createElement('span');
    spanElement.textContent = 'Complete the chat';

    h1Element.appendChild(spanElement);

    // Create the dialogue-content element
    let dialogueContent = document.createElement('div');
    dialogueContent.classList.add('dialogue-content');

    // Create the dialogue-content-question element
    let dialogueContentQuestion = document.createElement('div');
    dialogueContentQuestion.classList.add('dialogue-content-question');

    // Create the dialogue-question-row element
    let dialogueQuestionRow = document.createElement('div');
    dialogueQuestionRow.classList.add('dialogue-question-row');

    let assistContentOptions = document.createElement('div');
    assistContentOptions.id = 'assist-content-options';

    // Append the elements to build the structure
    dialogueContentQuestion.appendChild(dialogueQuestionRow);
    dialogueContent.appendChild(dialogueContentQuestion);
    dialogueContent.appendChild(assistContentOptions);

    challengeHeader.appendChild(h1Element);
    challengeHeader.appendChild(dialogueContent);

    challengeSection.appendChild(challengeHeader);
    challengeDialogue.appendChild(challengeSection);


    let midRowElement = document.querySelector('.mid-row');
    midRowElement.appendChild(challengeDialogue);



    // Create the first-dialogue-row element
    let firstDialogueRow = document.createElement('div');
    firstDialogueRow.classList.add('first-dialogue-row');

    // Create the dialogue-row-content element for the first row
    let firstDialogueRowContent = document.createElement('div');
    firstDialogueRowContent.classList.add('dialogue-row-content', 'first-dialogue-row-content');

    // Create the image element for dialogue-character-one
    let dialogueCharacterOne = document.createElement('img');
    dialogueCharacterOne.id = 'dialogue-character-one';

    // Create the projection-dialogue element
    let projectionDialogue = document.createElement('div');
    projectionDialogue.classList.add('projection-dialogue');

    // Create the dialogue-container element for the first row
    let firstDialogueContainer = document.createElement('div');
    firstDialogueContainer.classList.add('dialogue-container', 'first-dialogue-container');

    // Create the span element for dialogue-speaker
    let dialogueSpeakerSpan = document.createElement('span');
    dialogueSpeakerSpan.classList.add('dialogue-speaker');

    // Create the button element for speaker-button
    let speakerButton = document.createElement('button');
    speakerButton.classList.add('speaker-button');

    // Create the span element for speaker-animation
    let speakerAnimationSpan = document.createElement('span');
    speakerAnimationSpan.classList.add('speaker-animation');
    speakerAnimationSpan.id = 'speaker-animation';

    // Create the div element for dialogue-text
    let dialogueTextDiv = document.createElement('div');
    dialogueTextDiv.id = 'dialogue-text';

    // Append the elements to build the structure
    firstDialogueContainer.appendChild(dialogueSpeakerSpan);
    dialogueSpeakerSpan.appendChild(speakerButton);
    speakerButton.appendChild(speakerAnimationSpan);
    firstDialogueContainer.appendChild(dialogueTextDiv);

    firstDialogueRowContent.appendChild(dialogueCharacterOne);
    firstDialogueRowContent.appendChild(projectionDialogue);
    firstDialogueRowContent.appendChild(firstDialogueContainer);

    firstDialogueRow.appendChild(firstDialogueRowContent);


    // Create the second-dialogue-row element
    let secondDialogueRow = document.createElement('div');
    secondDialogueRow.classList.add('second-dialogue-row');

    // Create the dialogue-row-content element for the second row
    let secondDialogueRowContent = document.createElement('div');
    secondDialogueRowContent.classList.add('dialogue-row-content', 'second-dialogue-row-content');

    // Create the dialogue-container element for the second row
    let secondDialogueContainer = document.createElement('div');
    secondDialogueContainer.classList.add('dialogue-container', 'second-dialogue-container');

    // Create the span element for empty-dialogue
    let emptyDialogueSpan = document.createElement('span');
    emptyDialogueSpan.classList.add('empty-dialogue');

    // Create the span element for inner-empty-span
    let innerEmptySpan = document.createElement('span');
    innerEmptySpan.classList.add('inner-empty-span');

    // Create the projection-dialogue element for right-angle-projectile-dialogue
    let rightAngleProjectileDialogue = document.createElement('div');
    rightAngleProjectileDialogue.classList.add('projection-dialogue', 'right-angle-projectile-dialogue');

    // Create the image element for dialogue-character-two
    let dialogueCharacterTwo = document.createElement('img');
    dialogueCharacterTwo.id = 'dialogue-character-two';

    // Append the elements to build the structure for the second row
    secondDialogueContainer.appendChild(emptyDialogueSpan);
    emptyDialogueSpan.appendChild(innerEmptySpan);

    secondDialogueRowContent.appendChild(secondDialogueContainer);
    secondDialogueRowContent.appendChild(rightAngleProjectileDialogue);
    secondDialogueRowContent.appendChild(dialogueCharacterTwo);

    secondDialogueRow.appendChild(secondDialogueRowContent);




    // Get the element with class "dialogue-question-row" and append the structure to it
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

        // Create option number span
        const optionNoSpan = document.createElement("span");
        optionNoSpan.className = "option-no";
        optionNoSpan.id = "option-no-" + optionCounter;
        optionNoSpan.textContent = optionCounter;
        // Create option name span
        const optionNameSpan = document.createElement("span");
        optionNameSpan.className = "option-name";
        optionNameSpan.id = "option-name-" + optionCounter;
        optionNameSpan.textContent = choice;

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

    // Get the image element by its ID
    let imageElementOne = document.getElementById('dialogue-character-one');
    // Set the src attribute of the image
    imageElementOne.src = imagePath1;

    let imageElementTwo = document.getElementById('dialogue-character-two');
    // Set the src attribute of the image
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

    // console.log(question.dialogue[0].displayTokens.length)

    // console.log(question.dialogue[0].displayTokens[0].text)


}