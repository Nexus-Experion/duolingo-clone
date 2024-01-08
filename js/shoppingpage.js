let myButton = document.getElementById('heartButton');
let mySpan = document.getElementById('text-in-button heart-text');
let userData = JSON.parse(sessionStorage.getItem("user-info"));
let diamond = userData.gems;
let hearts = userData.hearts;

function checkSpanValue() {
  userData = JSON.parse(sessionStorage.getItem("user-info"));
  hearts=userData.hearts
  console.log(userData.hearts);
  if (hearts >= 4) {
    myButton.disabled = true;
    myButton.querySelector("span").textContent = "Full";
  } else {
    myButton.disabled = false;
    myButton.style.color = 'rgb(var(--color-blue-space))';
    myButton.querySelector("span").textContent = "Buy";
  }
}
checkSpanValue();

function calcDiamond(){
  checkSpanValue();
  
  console.log("userdata is ",userData);
  userData.gems -= 10;
  userData.hearts += 1;
  sessionStorage.setItem("user-info",JSON.stringify(userData));
}
myButton.addEventListener('click',calcDiamond);