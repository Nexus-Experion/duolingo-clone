const showNextItem = () => {
    document.getElementById("footer-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("footer-button").classList.toggle('clicked'), 300)
}