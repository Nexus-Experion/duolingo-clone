function challengeSelect(question) {
    document.querySelector('.mid-row').innerHTML = '';
    console.log(question);
    localStorage.setItem('challenge', question.type);
    let challengeSelect = document.createElement('div');
    challengeSelect.classList.add('challenge-select');

    // Create challenge-section element
    let challengeSection = document.createElement('div');
    challengeSection.classList.add('challenge-section');

    // Create challenge-header element
    let challengeHeader = document.createElement('div');
    challengeHeader.classList.add('challenge-header');

    // Create h1 element
    let h1Element = document.createElement('h1');

    // Create span element
    let spanElement = document.createElement('span');
    spanElement.textContent = `Which one of these is \"${question.prompt}\" ?`;

    // Append span to h1
    h1Element.appendChild(spanElement);

    // Append h1 to challenge-header
    challengeHeader.appendChild(h1Element);

    // Create assist-content element


    // Create select-challenge-options element
    let selectChallengeOptions = document.createElement('div');
    selectChallengeOptions.classList.add('select-challenge-options');

    // Create select-options element
    let selectOptions = document.createElement('div');
    selectOptions.classList.add('select-options');

    // Append select-options to select-challenge-options
    selectChallengeOptions.appendChild(selectOptions);

    // Append challenge-header, assist-content, and select-challenge-options to challenge-section
    challengeSection.appendChild(challengeHeader);
    challengeSection.appendChild(selectChallengeOptions);

    // Append challenge-section to challenge-select
    challengeSelect.appendChild(challengeSection);

    document.querySelector('.mid-row').appendChild(challengeSelect);



    const choices = question.choices;
    console.log(choices)

    //set correct answer in local storage
    localStorage.setItem('correctIndex', question.correctIndex + 1);
    localStorage.setItem('solution', question.choices[question.correctIndex].phrase);

    assistContent = document.getElementById('assist-content-options');
    let outerOptionsCounter = 1;
    let optionCounter = 1;
    choices.forEach(choice => {
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("select-outer-option-div");
        outerDiv.id = "select-outer-option-div-" + optionCounter;
        //audio
        const audio = new Audio(choice.tts);

        // Create inner div
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("select-option-div", "select-option-inner-div");
        innerDiv.id = optionCounter;
        innerDiv.addEventListener("click", function () {
            selectChallengeOptionButton(this.id);
            buttonClickAnimation(this.id);
            audio.play();
        });


        // Create image div
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("select-div-image");
        imageDiv.style.justifyContent = "space-evenly";

        // Create image element
        let image = document.createElement("img");
        image.src = choice.image;


        // Append image to image div
        imageDiv.appendChild(image);

        // Create text div
        let textDiv = document.createElement("div");
        textDiv.classList.add("select-div-text");

        // Create option name span
        let optionNameSpan = document.createElement("span");
        optionNameSpan.classList.add("select-div-option-name");
        optionNameSpan.id = "select-div-option-name-" + optionCounter;
        optionNameSpan.textContent = choice.phrase;

        // Create option number span
        let optionNoSpan = document.createElement("span");
        optionNoSpan.classList.add("select-div-option-no");
        optionNoSpan.id = "option-no-" + optionCounter;
        optionNoSpan.textContent = optionCounter;

        // Append spans to text div
        textDiv.appendChild(optionNameSpan);
        textDiv.appendChild(optionNoSpan);

        // Append image div and text div to inner div
        innerDiv.appendChild(imageDiv);
        innerDiv.appendChild(textDiv);

        // Append inner div to outer div
        outerDiv.appendChild(innerDiv);

        // Append the outer div to the select container
        document.querySelector(".select-options").appendChild(outerDiv);
        outerOptionsCounter++;
        optionCounter++;
    })



}

const selectChallengeOptionButton = (id) => {

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
    document.querySelectorAll('.select-outer-option-div-selected').forEach((option) => {
        option.classList.remove('select-outer-option-div-selected');
        option.className = 'outer-options-div'
    });
    document.querySelectorAll('.option-name-selected').forEach((option) => {
        option.classList.remove('option-name-selected');
        option.className = 'option-name'

    });
    document.querySelectorAll('.select-option-div-selected').forEach((option) => {
        option.classList.remove('.select-option-div-selected');
        option.className = 'select-option-div select-option-inner-div'

    });
    document.getElementById('option-no-' + id).className = 'option-no-selected';
    // document.getElementById('option-name-' + id).className = 'option-name-selected';
    document.getElementById(id).className = 'select-option-div-selected';
    document.getElementById('select-outer-option-div-' + id).className = 'select-outer-option-div-selected';

}











