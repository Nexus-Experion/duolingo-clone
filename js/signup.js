const validate = (event) => {
    event.preventDefault()
    let ageInput = document.getElementById('age-input');
    let nameInput = document.getElementById('name-input');
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');

    let ageErrorMessage = document.getElementById('age-error-message');
    let nameErrorMessage = document.getElementById('name-error-message');
    let emailErrorMessage = document.getElementById('email-error-message');
    let passwordErrorMessage = document.getElementById('password-error-message');

    ageErrorMessage.textContent = '';
    nameErrorMessage.textContent = '';
    emailErrorMessage.textContent = '';
    passwordErrorMessage.textContent = '';

    if (!ageInput.value) {
        ageErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your age.</span>';
        ageInput.style.border = '2px solid #ff0000'; // Change border color to red
        document.getElementById('age-privacy-div').innerHTML = '';
    }
    else {
        ageErrorMessage.innerHTML = '';
        ageInput.style.border = ''; // Reset to the default border color
    }

    if (!nameInput.value) {
        console.log("Entering Name if Block"); // Add this line
        nameErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Name.</span>';
        nameInput.style.border = '2px solid #ff0000'; // Change border color to red  
    }
    else {
        console.log("Name Input is not empty"); // Add this line
        nameErrorMessage.innerHTML = '';
        nameInput.style.border = ''; // Reset to the default border color
    }

    if (!emailInput.value) {
        emailErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Email.</span>';
        emailInput.style.border = '2px solid #ff0000'; // Change border color to red
    }
    else {
        emailErrorMessage.innerHTML = '';
        emailInput.style.border = ''; // Reset to the default border color
    }

    if (!passwordInput.value) {
        passwordErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Password.</span>';
        passwordInput.style.border = '2px solid #ff0000'; // Change border color to red
    }
    else {
        passwordErrorMessage.innerHTML = '';
        passwordInput.style.border = ''; // Reset to the default border color
    }
    // RegisterUser(event);
}

const createAccountButtonAnimation = () => {
    document.getElementById("create-account-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("create-account-button").classList.toggle('clicked'), 300)

    document.getElementById('create-account-span').classList.toggle('hidden');
    document.getElementById('loading-balls-container').classList.toggle('hidden');
}

const loginButtonAnimation = () => {
    document.getElementById("login-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("login-button").classList.toggle('clicked'), 300)
    window.location.href = "loginpage.html";
}

