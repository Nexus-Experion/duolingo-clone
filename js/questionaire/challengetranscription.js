function challengetranscription(question) {

    // Create the challenge-select-transcription element
    let challengeSelectTranscription = document.createElement('div');
    challengeSelectTranscription.classList.add('challenge-select-transcription');

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
    spanElement.textContent = 'What do you hear?';

    h1Element.appendChild(spanElement);

    // Create the transcription-content element
    let transcriptionContent = document.createElement('div');
    transcriptionContent.classList.add('transcription-content');

    // Create the transcription-content-question element
    let transcriptionContentQuestion = document.createElement('div');
    transcriptionContentQuestion.classList.add('transcription-content-question');

    // Create the button element for transcription
    let transcriptionButton = document.createElement('button');
    transcriptionButton.classList.add('transcription-button-div');
    let transcriptionOptions = document.createElement('div');
    transcriptionOptions.id = 'transcription-options';
    // Create the span element for speaker-animation-white
    let speakerAnimationWhite = document.createElement('span');
    speakerAnimationWhite.id = 'speaker-animation-white';

    transcriptionButton.appendChild(speakerAnimationWhite);
    transcriptionContentQuestion.appendChild(transcriptionButton);
    transcriptionContent.appendChild(transcriptionContentQuestion);
    transcriptionContent.appendChild(transcriptionOptions);

    challengeHeader.appendChild(h1Element);
    challengeHeader.appendChild(transcriptionContent);
    challengeSection.appendChild(challengeHeader);
    challengeSelectTranscription.appendChild(challengeSection);

    // Get the element with class "mid-row" and append the structure to it
    let midRowElement = document.querySelector('.mid-row');
    midRowElement.appendChild(challengeSelectTranscription);

    document.getElementById('skip-span').textContent = "CAN'T LISTEN NOW";

    speakerButton = document.querySelector('.transcription-button-div');

    const audio = new Audio(question.tts);

    speakerButton.addEventListener("click", function () {
        speakerButton.classList.toggle('clicked');
        setTimeout(() => speakerButton.classList.toggle('clicked'), 300);
        audio.play();
    });



    const choices = question.choices;
    localStorage.setItem('correctIndex', question.correctIndex + 1);
    localStorage.setItem('solution', question.choices[question.correctIndex].text);
    transContent = document.getElementById('transcription-options');
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
        optionNameSpan.textContent = choice.text;

        // Append spans to the option div
        optionDiv.appendChild(optionNoSpan);
        optionDiv.appendChild(optionNameSpan);

        // Append option div to outer options div
        outerOptionsDiv.appendChild(optionDiv);

        // Append outer options div to the body
        transContent.appendChild(outerOptionsDiv);

        // Increment counters for unique IDs
        outerOptionsCounter++;
        optionCounter++;
    });
    const speakerAnimation =
        bodymovin.loadAnimation({
            container:
                document.getElementById(
                    "speaker-animation-white"
                ),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "../assets/json-animations/speaker-white.json",
        });
}