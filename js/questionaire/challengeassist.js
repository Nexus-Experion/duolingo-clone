let animationPath = '../assets/json-animations/assistheader.json';
// Replace with the actual link to your Lottie JSON file
const animation = bodymovin.loadAnimation({
    container: document.getElementById('assist-character'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath
});


//change question header

// function changeAssistQuestion(assistText) {
//     document.getElementById('assist-text').textContent = assistText;
// }
// changeAssistQuestion('Hellos');




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


function disablePointer() {
    const parentDiv = document.getElementById('assist-content-options');
    const childElements = parentDiv.getElementsByTagName('*');

    for (const childElement of childElements) {
        childElement.style.pointerEvents = 'none';
    }
}






document.addEventListener("DOMContentLoaded", function () {
    // Fetch the external JSON file
    fetch('../assets/JSON/german_lev_1.json')
        .then(response => response.json())
        .then(data => {
            // num = Math.floor(Math.random() * data.challenges.length);
            // if (data.challenges[1].type == 'assist') {
            //     console.log('hello')
            // }

            //question section
            document.getElementById('assist-text').textContent = data.challenges[1].prompt;
            const choices = data.challenges[1].options;

            //set correct answer in local storage
            localStorage.setItem('correctIndex', data.challenges[1].correctIndex + 1);

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
                optionNameSpan.textContent = choice.text;

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
        })

        .catch(error => {
            console.error('Error fetching choices:', error);
        });
})