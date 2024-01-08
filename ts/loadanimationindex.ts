const headerPath: string = 'assets/json-animations/header.json';
const floatingPhone: string = 'assets/json-animations/floating-phone.json';
const stayMotivated: string = 'assets/json-animations/stay-motivated.json';
const personalisedLearning: string = 'assets/json-animations/personalised-learning.json';
const backedByScience: string = 'assets/json-animations/backed-by-science.json';
const freeFunEffective: string = 'assets/json-animations/free-fun-effective.json';

interface AnimationLoaderOptions {
    container: HTMLElement;
    renderer: string;
    loop: boolean;
    autoplay: boolean;
    path: string;
}

const animationLoader = (id: string, path: string, autoplays: boolean = false): void => {
    const options: AnimationLoaderOptions = {
        container: document.getElementById(id) as HTMLElement,
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
