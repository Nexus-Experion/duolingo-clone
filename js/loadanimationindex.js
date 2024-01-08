"use strict";
const headerPath = 'assets/json-animations/header.json';
const floatingPhone = 'assets/json-animations/floating-phone.json';
const stayMotivated = 'assets/json-animations/stay-motivated.json';
const personalisedLearning = 'assets/json-animations/personalised-learning.json';
const backedByScience = 'assets/json-animations/backed-by-science.json';
const freeFunEffective = 'assets/json-animations/free-fun-effective.json';
const animationLoader = (id, path, autoplays = false) => {
    const options = {
        container: document.getElementById(id),
        renderer: 'svg',
        loop: true,
        autoplay: autoplays,
        path: path,
    };
    bodymovin.loadAnimation(options);
};

// Load all animations in the index page
animationLoader("left-logging-header", headerPath, true);
animationLoader("phone-animation", floatingPhone, true);
animationLoader("duolingo-feature-animation-stay-motivated", stayMotivated, true);
animationLoader("duolingo-feature-animation-personalised-learning", personalisedLearning, true);
animationLoader("duolingo-feature-animation-backed-by-science", backedByScience, true);
animationLoader("duolingo-feature-animation-free-fun-effective", freeFunEffective, true);
