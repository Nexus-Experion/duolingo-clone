const alreadyAccountButtonAnimation = () => {
    document.getElementById("already-have-account-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("already-have-account-button").classList.toggle('clicked'), 300)
}

const getStartedButtonAnimation = () => {
    document.getElementById("get-started-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("get-started-button").classList.toggle('clicked'), 300);
    window.location.href="/duolingo-clone/html/signup.html";
}
