const loginAccountButtonAnimation = (event) => {
    document.getElementById("create-account-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("create-account-button").classList.toggle('clicked'), 300)
    console.log("Reached Animation");

    document.getElementById('login-span').classList.toggle('hidden');
    document.getElementById('loading-balls-container').classList.toggle('hidden');
}

const signupButtonAnimation = () => {
    document.getElementById("login-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("login-button").classList.toggle('clicked'), 300)
    window.location.href = "languages-select-page.html";
}

const validateEntry = (event) => {
    event.preventDefault();
    var emailInput = document.getElementById('emailInput');
    var passwordInput = document.getElementById('passInput');
    var divPassword = document.getElementById('divPassword');

    var errorEmail = document.getElementById('errorEmail');
    var errorPassword = document.getElementById('errorPassword');

    errorEmail.textContent = '';
    errorPassword.textContent = '';

    if (!emailInput.value) {
        errorEmail.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Invalid email address.</span>';
        emailInput.style.border = '2px solid #ff0000'; // Change border color to red  
    }
    else {
        errorEmail.innerHTML = '';
        emailInput.style.border = ''; // Reset to the default border color
    }

    if (!passwordInput.value) {
        errorPassword.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Password too short.</span>';
        divPassword.style.border = '2px solid #ff0000'; // Change border color to red  
    }
    else {
        errorPassword.innerHTML = '';
        divPassword.style.border = ''; // Reset to the default border color
    }
}