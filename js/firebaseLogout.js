import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

// Get the authentication instance
const auth = getAuth(app);

// Get the logout button element
const logoutButton = document.getElementById('logout-button');

const logoutUser = async () => {
    try {
        // Sign out the user
        await signOut(auth);

        // Log the user out successfully
        console.log('User signed out successfully');

        // Redirect or perform other actions after sign-out
        window.location.href = "../html/en-landingpage.html";

        //clear data in session storage
        sessionStorage.clear();
    } catch (error) {
        // An error happened.
        console.error('Error signing out:', error.message);
    }
};

// Add event listener to the logout button
if (logoutButton) {
    logoutButton.addEventListener('click', logoutUser);
}