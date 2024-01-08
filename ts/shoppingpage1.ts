function checkSpanValue() {
    let userData: { hearts: number } = JSON.parse(sessionStorage.getItem("user-info") || '{}');
    let hearts = userData.hearts;
    console.log(userData.hearts);
  
    let myButton: HTMLElement | null = document.getElementById('heartButton');
    if (!myButton) return; // Handle the case when myButton is null
  
    if (hearts >= 4) {
      (myButton as HTMLButtonElement).disabled = true;
      const span = myButton.querySelector("span");
      if (span) {
        span.textContent = "Full";
      }
    } else {
      (myButton as HTMLButtonElement).disabled = false;
      (myButton as HTMLButtonElement).style.color = 'rgb(var(--color-blue-space))';
      const span = myButton.querySelector("span");
      if (span) {
        span.textContent = "Buy";
      }
    }
  }
  
  checkSpanValue();
  
  
  