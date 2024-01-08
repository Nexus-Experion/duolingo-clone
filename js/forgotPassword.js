import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { app } from "./firebaseConfig.js"

const auth = getAuth(app);


let passwordInp = document.getElementById('password-input');
let emailInp = document.getElementById('email-input');
let passwordErrorMessage = document.getElementById('password-error-message');
let emailErrorMessage = document.getElementById('email-error-message');

function forgotPassword() {
    const email = document.getElementById('email-input').value;
  
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent successfully
      console.log("Password reset email sent!");
      emailErrorMessage.innerHTML = '';
      emailInp.style.border = '';
      passwordErrorMessage.innerHTML = '<span>Password Reset Link Sent!</span>';

    })
    .catch((error) => {
      switch(error.code){
        case "auth/missing-email":
            emailErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Enter An Email</span>';
            emailInp.style.border = '2px solid #ff0000'; // Change border color to red
            break;
      }

      console.error(error.message);
    });
  }

document.getElementById('forgot-password').onclick = forgotPassword;