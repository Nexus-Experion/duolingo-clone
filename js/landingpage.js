const alreadyAccountButtonAnimation = () => {
    document.getElementById("already-have-account-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("already-have-account-button").classList.toggle('clicked'), 300)
    window.location.href = "/html/loginpage.html";
}

const getStartedButtonAnimation = () => {
    document.getElementById("get-started-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("get-started-button").classList.toggle('clicked'), 300);
    window.location.href = "/html/languages-select-page.html";
}
// const animation = bodymovin.loadAnimation({
//     container: document.getElementById('left-logging-header-video'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: '../assets/json-animations/header.json'
// });
