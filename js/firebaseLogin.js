import {getFirestore, doc, getDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);
const auth = getAuth(app);

let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let mainForm = document.getElementById("main-form");

let emailErrorMessage = document.getElementById('email-error-message');
let passwordErrorMessage = document.getElementById('password-error-message');

let signInUser = (event) => {
  console.log("Reached Signin");
  event.preventDefault();

  if(!validateEntry(event))
  {
    return;
  }

  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value).then((credentials) => {
      const dbref = doc(db, "UsersAuthList", credentials.user.uid);
      console.log(dbref);

      getDoc(dbref).then((docSnapshot) => {
        console.log("Document data:", docSnapshot.data());
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log("userData = ", userData);
          sessionStorage.setItem("user-info", JSON.stringify(userData));
          
          window.location.href = "./learn.html";
        }
      });
    })
    .catch((error) => {
      document.getElementById('login-span').classList.toggle('hidden');
      document.getElementById('loading-balls-container').classList.toggle('hidden');

      switch (error.code) {
        case "wrong-password":
          passwordErrorMessage.innerHTML =
            '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Wrong Password.</span>';
          passwordInput.style.border = "2px solid #ff0000";
          break;
        case "user-not-found":
          emailErrorMessage.innerHTML =
            '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>User Not Found.</span>';
          emailInput.style.border = "2px solid #ff0000";
          break;
        case "auth/invalid-email":
          emailErrorMessage.innerHTML =
            '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Invalid Email</span>';
          emailInput.style.border = "2px solid #ff0000";
          break;
        case "auth/invalid-credential":
          emailErrorMessage.innerHTML =
            '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Invalid Credentials</span>';
          passwordErrorMessage.innerHTML =
            '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Invalid Credentials</span>';
          emailInput.style.border = "2px solid #ff0000";
          passwordInput.style.border = "2px solid #ff0000";
          break;
      }
      console.log(error.message);
    });
};

const validateEntry = (event) =>{
    event.preventDefault();

    let isValid = true;
    if (!emailInput.value) {
        emailErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Enter an Email</span>';
        emailInput.style.border = '2px solid #ff0000';
        isValid = false;
    }
    else{
        emailErrorMessage.innerHTML = '';
        emailInput.style.border = '';
    }

    if (!passwordInput.value) {
        passwordErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Enter a Password.</span>';
        passwordInput.style.border = '2px solid #ff0000';
        isValid = false;
    }
    else{
        passwordErrorMessage.innerHTML = '';
        passwordInput.style.border = '';
    }
    return isValid;
}

mainForm.addEventListener("submit", signInUser);
