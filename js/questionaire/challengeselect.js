//create challenge select dynamically

let challengeSelect = (question) => {
    document.querySelector('.mid-row').innerHTML = '';
    console.log(question);
    localStorage.setItem('challenge', question.type);
    let challengeSelect = document.createElement('div');
    challengeSelect.classList.add('challenge-select');

    let challengeSection = document.createElement('div');
    challengeSection.classList.add('challenge-section');

    let challengeHeader = document.createElement('div');
    challengeHeader.classList.add('challenge-header');

    let h1Element = document.createElement('h1');

    let spanElement = document.createElement('span');
    spanElement.textContent = `Which one of these is \"${question.prompt}\" ?`;

    h1Element.appendChild(spanElement);

    challengeHeader.appendChild(h1Element);

    let selectChallengeOptions = document.createElement('div');
    selectChallengeOptions.classList.add('select-challenge-options');

    let selectOptions = document.createElement('div');
    selectOptions.classList.add('select-options');

    selectChallengeOptions.appendChild(selectOptions);

    challengeSection.appendChild(challengeHeader);
    challengeSection.appendChild(selectChallengeOptions);

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

        let innerDiv = document.createElement("div");
        innerDiv.classList.add("select-option-div", "select-option-inner-div");
        innerDiv.id = optionCounter;
        innerDiv.addEventListener("click", function () {
            selectChallengeOptionButton(this.id);
            buttonClickAnimation(this.id);
            audio.play();
        });


        let imageDiv = document.createElement("div");
        imageDiv.classList.add("select-div-image");
        imageDiv.style.justifyContent = "space-evenly";

        // Create image element
        let image = document.createElement("img");
        image.src = choice.image;


        imageDiv.appendChild(image);

        let textDiv = document.createElement("div");
        textDiv.classList.add("select-div-text");

        let optionNameSpan = document.createElement("span");
        optionNameSpan.classList.add("select-div-option-name");
        optionNameSpan.id = "select-div-option-name-" + optionCounter;
        optionNameSpan.textContent = choice.phrase;

        let optionNoSpan = document.createElement("span");
        optionNoSpan.classList.add("select-div-option-no");
        optionNoSpan.id = "option-no-" + optionCounter;
        optionNoSpan.textContent = optionCounter;

        textDiv.appendChild(optionNameSpan);
        textDiv.appendChild(optionNoSpan);

        innerDiv.appendChild(imageDiv);
        innerDiv.appendChild(textDiv);

        outerDiv.appendChild(innerDiv);

        document.querySelector(".select-options").appendChild(outerDiv);
        outerOptionsCounter++;
        optionCounter++;
    })



}
//select option ui change for challenge select

const selectChallengeOptionButton = (id) => {

    //for activating check button
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
    document.getElementById(id).className = 'select-option-div-selected';
    document.getElementById('select-outer-option-div-' + id).className = 'select-outer-option-div-selected';

}











