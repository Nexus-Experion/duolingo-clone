const myButton = document.getElementById('heartButton');
const mySpan = document.getElementById('text-in-button heart-text');


// Function to check the span value and disable the button
function checkSpanValue() {
    console.log('entered');
  const spanValue = parseInt(mySpan.textContent);
  
  if (spanValue >= 5) {
    myButton.disabled = true;
  } else {
    myButton.disabled = false;
    myButton.style.color ='rgb(var(--color-blue-space))';
    myButton.querySelector("span").textContent="Buy";
    
  }
}

// Event listener for changes in the span value
mySpan.addEventListener('change', checkSpanValue);

// Call the function initially to check the initial value
checkSpanValue();