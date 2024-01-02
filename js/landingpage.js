const alreadyAccountButtonAnimation = () => {
    document.getElementById("already-have-account-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("already-have-account-button").classList.toggle('clicked'), 300)
    window.location.href = "/html/loginpage.html";
}

const getStartedButtonAnimation = () => {
    document.getElementById("get-started-button").classList.toggle('clicked');
    setTimeout(() => document.getElementById("get-started-button").classList.toggle('clicked'), 300);
    window.location.href = "/html/signup.html";
}
const animation = bodymovin.loadAnimation({
    container: document.getElementById('left-logging-header-video'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/json-animations/header.json'
});


// let countriesList;
// const itemsToShow = 7;
// const itemsToScroll = 2;
// let currentIndex = 0;

// function scrollNavbar(direction) {
//     countriesList = document.querySelector('.countries-list');
//     const itemWidth = countriesList.firstElementChild.offsetWidth + 10; // 10 is the gap between items

//     if (direction === 'left' && currentIndex > 0) {
//         currentIndex -= itemsToScroll;
//     } else if (direction === 'right' && currentIndex < countriesList.children.length - itemsToShow) {
//         currentIndex += itemsToScroll;
//     }

//     countriesList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }