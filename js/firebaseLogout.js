import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth(app);
const logoutButton = document.getElementById('logout-button');
const logoutButtonMobile = document.getElementById('logout-button-mobile');

const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log('User signed out successfully');

        window.location.href = "../index.html";
        sessionStorage.clear();
    } catch (error) {
        console.error('Error signing out:', error.message);
    }
};

if (logoutButton || logoutButtonMobile) {
    logoutButton.addEventListener('click', logoutUser);
    logoutButtonMobile.addEventListener('click', logoutUser);
}