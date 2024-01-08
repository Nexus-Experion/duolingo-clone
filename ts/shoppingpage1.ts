let myButton: HTMLButtonElement | null = document.getElementById('heartButton') as HTMLButtonElement | null;

function checkSpanValue() {
    const userDataString = sessionStorage.getItem("user-info");

let userData: { gems: number; hearts: number } | null = null;

if (userDataString !== null) {
  userData = JSON.parse(userDataString) as { gems: number; hearts: number };
}

  let hearts: number = userData ? userData.hearts : 0; // Provide a default value if userData is null

  console.log(userData?.hearts); // Optional chaining operator to avoid errors if userData is null

  if (hearts && myButton) {
    if (hearts >= 4) {
      myButton.disabled = true;
      let spanElement = myButton.querySelector("span");
      if (spanElement) {
        spanElement.textContent = "Full";
      }
    } else {
      myButton.disabled = false;
      myButton.style.color = 'rgb(var(--color-blue-space))';
      let spanElement = myButton.querySelector("span");
      if (spanElement) {
        spanElement.textContent = "Buy";
      }
    }
  }
}

checkSpanValue();
