validate = (event) => {
    event.preventDefault()
    var ageInput = document.getElementById('age-input');
    var emailInput = document.getElementById('email-input');
    var passwordInput = document.getElementById('password-input');

    let ageErrorMessage = document.getElementById('age-error-message');
    let emailErrorMessage = document.getElementById('email-error-message');
    let passwordErrorMessage = document.getElementById('password-error-message');

    ageErrorMessage.textContent = '';
    emailErrorMessage.textContent = '';
    passwordErrorMessage.textContent = '';

    if (!ageInput.value) {
        ageErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your age.</span>';
        ageInput.style.border = '2px solid #ff0000'; // Change border color to red
        document.getElementById('age-privacy-div').innerHTML='';   
    }
    else{
        ageErrorMessage.innerHTML = '';
        ageInput.style.border = ''; // Reset to the default border color
    }

    if (!emailInput.value) {
        emailErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Email.</span>';
        emailInput.style.border = '2px solid #ff0000'; // Change border color to red
    }
    else{
        emailErrorMessage.innerHTML = '';
        emailInput.style.border = ''; // Reset to the default border color
    }

    if (!passwordInput.value) {
        passwordErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Password.</span>';
        passwordInput.style.border = '2px solid #ff0000'; // Change border color to red
    }
    else{
        passwordErrorMessage.innerHTML = '';
        passwordInput.style.border = ''; // Reset to the default border color
    }
}