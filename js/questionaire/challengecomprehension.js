function buttonClick() {
    document.querySelector('#speaker-inner').classList.toggle('clicked');
    setTimeout(() => document.querySelector('#speaker-inner').classList.toggle('clicked'), 200);
}

function challengeReadComprehension(question) {

    console.log(question)
    // Create the main container
    const challengeReadComprehension = document.createElement('div');
    challengeReadComprehension.classList.add('challenge-read-comprehension');

    // Create the challenge section
    const challengeSection = document.createElement('div');
    challengeSection.classList.add('challenge-section');

    // Create the challenge header
    const challengeHeader = document.createElement('div');
    challengeHeader.classList.add('challenge-header');

    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    span.textContent = 'Read and Respond';
    h1.appendChild(span);
    challengeHeader.appendChild(h1);

    // Create the assist content
    const assistContent = document.createElement('div');
    assistContent.classList.add('assist-content');

    // Create the sound question comprehension
    const soundQuestionComprehension = document.createElement('div');
    soundQuestionComprehension.classList.add('sound-question-comprehension');
    const audio = new Audio(question.tts);

    const speakerOuter = document.createElement('div');
    speakerOuter.classList.add('speaker-outer');
    speakerOuter.addEventListener("click", function () {
        buttonClick();
        audio.play();
    });


    const speakerInner = document.createElement('div');
    speakerInner.classList.add('speaker-inner');
    speakerInner.id = 'speaker-inner';
    speakerOuter.appendChild(speakerInner);

    const comprehensionQuestion = document.createElement('div');
    comprehensionQuestion.classList.add('comprehension-question');
    comprehensionQuestion.textContent = question.passage;

    soundQuestionComprehension.appendChild(speakerOuter);
    soundQuestionComprehension.appendChild(comprehensionQuestion);

    // Create the read comprehension prompt
    const readComprehensionPrompt = document.createElement('div');
    readComprehensionPrompt.classList.add('read-comprehension-prompt');
    readComprehensionPrompt.textContent = question.question;

    // Append elements to their respective parents
    soundQuestionComprehension.appendChild(speakerOuter);
    soundQuestionComprehension.appendChild(comprehensionQuestion);
    assistContent.appendChild(soundQuestionComprehension);
    assistContent.appendChild(readComprehensionPrompt);
    challengeSection.appendChild(challengeHeader);
    challengeSection.appendChild(assistContent);
    challengeReadComprehension.appendChild(challengeSection);

    const midRow = document.querySelector('.mid-row');
    midRow.appendChild(challengeReadComprehension);

    const choices = question.choices;

    //set correct answer in local storage
    localStorage.setItem('correctIndex', question.correctIndex + 1);
    localStorage.setItem('solution', question.choices[question.correctIndex]);

    // assistContent = document.getElementsByClassName('assist-content');
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
        optionNameSpan.textContent = choice

        optionDiv.appendChild(optionNoSpan);
        optionDiv.appendChild(optionNameSpan);

        outerOptionsDiv.appendChild(optionDiv);

        assistContent.appendChild(outerOptionsDiv);

        // Increment counters for unique IDs
        outerOptionsCounter++;
        optionCounter++;
    });


    const speakerAnimation =
        bodymovin.loadAnimation({
            container:
                document.getElementById(
                    "speaker-inner"
                ),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "../assets/json-animations/speaker-white.json",
        });
}
