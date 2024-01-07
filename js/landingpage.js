const alreadyAccountButtonAnimation = () => {
    document.getElementById("already-have-account-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("already-have-account-button").classList.toggle('clicked'), 300)
    window.location.href = "/html/loginpage.html";
}

const getStartedButtonAnimation = () => {
    document.getElementById("get-started-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("get-started-button").classList.toggle('clicked'), 300);
    animationLoader()
    window.location.href = "/html/languages-select-page.html";
}
const headerPath = '../assets/json-animations/header.json';
const animationLoader = (id, path) => {
    bodymovin.loadAnimation({
        container: document.getElementById(id),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    });
}
animationLoader("left-logging-header", headerPath)

