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


