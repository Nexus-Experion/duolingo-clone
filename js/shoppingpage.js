const myButton = document.getElementById('heartButton');
const mySpan = document.getElementById('text-in-button heart-text');
let userData = JSON.parse(sessionStorage.getItem("user-info"));
let diamond = userData.gems;
let hearts = userData.hearts;

function checkSpanValue() {
    console.log('entered');
  const spanValue = parseInt(mySpan.textContent);
  
  if (hearts >= 5) {
    myButton.disabled = true;
  } else {
    myButton.disabled = false;
    myButton.style.color ='rgb(var(--color-blue-space))';
    myButton.querySelector("span").textContent="Buy";
    
  }
}
mySpan.addEventListener('change', checkSpanValue);
checkSpanValue();
function calcDiamond(){
  userData.gems -= 10;
  userData.hearts += 1;
  sessionStorage.setItem("user-info",JSON.stringify(userData));
}
myButton.addEventListener('click',calcDiamond);