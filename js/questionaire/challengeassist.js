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

function changeAssistQuestion(assistText) {
    document.getElementById('assist-text').textContent = assistText;
}
changeAssistQuestion('Hellos');




//button click animation

const buttonClickAnimation = (id) => {

    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 200);

}

//select option animation toggle


const selectOptionButton = (id) => {
    document.querySelectorAll('.option-no-selected').forEach((option) => {
        option.classList.toggle('option-no-selected');
        option.className = 'option-no'
    })
    document.querySelectorAll('.outer-options-div-selected').forEach((option) => {
        option.classList.toggle('outer-options-div-selected');
        option.className = 'outer-options-div'
    });
    document.querySelectorAll('.option-name-selected').forEach((option) => {
        option.classList.toggle('option-name-selected');
        option.className = 'option-name'

    });
    document.querySelectorAll('.option-div-selected').forEach((option) => {
        option.classList.toggle('.option-div-selected');
        option.className = 'option-div'
    });
    document.getElementById('option-no-' + id).className = 'option-no-selected';
    document.getElementById('option-name-' + id).className = 'option-name-selected';
    document.getElementById(id).className = 'option-div-selected';
    document.getElementById('outer-options-div-' + id).className = 'outer-options-div-selected';

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