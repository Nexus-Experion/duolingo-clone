const myButton: HTMLButtonElement | null = document.getElementById('heartButton') as HTMLButtonElement;
const mySpan: HTMLElement | null = document.getElementById('text-in-button-heart-text');
let userData: { gems: number, hearts: number } = JSON.parse(sessionStorage.getItem("user-info") || "{}") || { gems: 0, hearts: 0 };
let diamond: number = userData.gems;
let hearts: number = userData.hearts;





function checkSpanValue() {
  console.log('entered');
  const spanValue: number = parseInt((mySpan?.textContent || '0'), 10);
  
  if (hearts >= 10) {
    if (myButton) myButton.disabled = true;
  } else {
    if (myButton) {
      myButton.disabled = false;
      myButton.style.color = 'rgb(var(--color-blue-space))';
      const spanInsideButton = myButton.querySelector("span");
      if (spanInsideButton) spanInsideButton.textContent = "Buy";
    }
  }
}
if (mySpan) mySpan.addEventListener('change', checkSpanValue);
checkSpanValue();

function calcDiamond() {
  if (userData.gems >= 10 && userData.hearts < 5) {
    userData.gems -= 10;
    userData.hearts += 1;
    sessionStorage.setItem("user-info", JSON.stringify(userData));
    // Update hearts and gems display or any other necessary action
  }
}
if (myButton) myButton.addEventListener('click', calcDiamond);
