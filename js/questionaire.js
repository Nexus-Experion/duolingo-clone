function currentHearts() {
    //FETCH HEART FROM FIRESTORE TO HERE AND UPDATE THROUGH HERE
    document.getElementById("heart-count").textContent = "3";
};
// currentHearts();

function skipButton(id) {
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
}

function checkButton(id) {
    document.getElementById(id).classList.toggle('clicked');
    setTimeout(() => document.getElementById(id).classList.toggle('clicked'), 300);
}