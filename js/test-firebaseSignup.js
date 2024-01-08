import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore();
const auth = getAuth(app);

let ageInp = document.getElementById('age-input');
let nameInp = document.getElementById('name-input');
let emailInp = document.getElementById('email-input');
let passwordInp = document.getElementById('password-input');
let mainForm = document.getElementById('main-form');

let ageErrorMessage = document.getElementById('age-error-message');
let nameErrorMessage = document.getElementById('name-error-message');
let emailErrorMessage = document.getElementById('email-error-message');
let passwordErrorMessage = document.getElementById('password-error-message');

const createAccount = async () => {
    try {
        const credentials = await createUserWithEmailAndPassword(auth, emailInp.value, passwordInp.value);
        await sendEmailVerification(credentials.user);

        console.log("Verification email sent successfully");
        return credentials.user.uid;
    } catch (error) {
        handleAuthError(error);
        return null;
    }
};

const handleAuthError = (error) => {
    // ... (same as your existing error handling logic)
};

const redirectToLearnPage = (userId) => {
    const dbref = doc(db, 'UsersAuthList', userId);

    getDoc(dbref).then((docSnapshot) => {
        if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            sessionStorage.setItem("user-info", JSON.stringify(userData));
            console.log("User Data: ", userData);
            window.location.href = "./learn.html";
        }
    });
};

const validate = (event) => {
    event.preventDefault()

    let isValid = true;

    ageErrorMessage.textContent = '';
    nameErrorMessage.textContent = '';
    emailErrorMessage.textContent = '';
    passwordErrorMessage.textContent = '';

    if (!ageInp.value) {
        ageErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your age.</span>';
        ageInp.style.border = '2px solid #ff0000'; // Change border color to red
        document.getElementById('age-privacy-div').innerHTML='';   
        isValid = false;
    }
    else{
        ageErrorMessage.innerHTML = '';
        ageInp.style.border = ''; // Reset to the default border color
    }

    if (!nameInp.value) {
        console.log("Entering Name if Block"); // Add this line
        nameErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Name.</span>';
        nameInp.style.border = '2px solid #ff0000'; // Change border color to red  
        isValid = false;
    }
    else{
        console.log("Name Input is not empty"); // Add this line
        nameErrorMessage.innerHTML = '';
        nameInp.style.border = ''; // Reset to the default border color
    }

    if (!emailInp.value) {
        emailErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Email.</span>';
        emailInp.style.border = '2px solid #ff0000'; // Change border color to red
        isValid = false;
    }
    else{
        emailErrorMessage.innerHTML = '';
        emailInp.style.border = ''; // Reset to the default border color
    }

    if (!passwordInp.value) {
        passwordErrorMessage.innerHTML = '<img src="../assets/svg/error-message-icon.svg" alt=""> <span>Please enter your Password.</span>';
        passwordInp.style.border = '2px solid #ff0000'; // Change border color to red
        isValid = false;
    }
    else{
        passwordErrorMessage.innerHTML = '';
        passwordInp.style.border = ''; // Reset to the default border color
    }

    return isValid;
}

mainForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!validate(event)) {
        return;
    }

    const userId = await createAccount();

    if (userId) {

        const user = auth.currentUser;
        const isEmailVerified = user.emailVerified;
        console.log(isEmailVerified);
        // Polling function to check email verification status
        const checkEmailVerification = async () => {
            const user = auth.currentUser;

            if (user && user.emailVerified) {
                // If the email is verified, set user data and redirect
                await setUserInFirestore(userId);
                redirectToLearnPage(user.uid);
            } else {
                // If the email is not verified, wait for a short interval and check again
                setTimeout(checkEmailVerification, 1000); // Check every 1 second (adjust as needed)
                console.log("Checked")
            }
        };

        // Start the polling function
        checkEmailVerification();
    }
});

// Function to set user data in Firestore
const setUserInFirestore = async (userId) => {
    const currentDate = new Date();
    const userDocRef = doc(db, 'UsersAuthList', userId);

    await setDoc(userDocRef, {
        userId: userId,
        age: ageInp.value,
        name: nameInp.value,
        email: emailInp.value,
        gems: 500,
        xp: 0,
        hearts: 5,
        creationDate: currentDate,
        learnLang: localStorage.getItem('selectedLang'),
        sectionNumber: 1,
        completedUnits: 1,
        completedChapters: 1,
        currentLesson: 1,
        profileImage: "../assets/svg/profile-image-temp.svg"
    });

    console.log("User data set in Firestore");
};