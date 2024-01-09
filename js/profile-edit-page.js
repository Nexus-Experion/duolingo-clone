import { getFirestore, doc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);
const storage = getStorage(app);

let userInfo = JSON.parse(sessionStorage.getItem('user-info'));
const userId = userInfo.userId;
console.log(userId);
const userDocRef = doc(db, 'UsersAuthList', userId);

const imageInput = document.getElementById("choose-file-input");

const updateProfile = async () => {
    console.log("Reached Update Profile");

    const file = imageInput.files[0];
    const changedName = document.getElementById('name').value;

    try {
        if (file) {
            // If a file is uploaded, update profile picture in Firebase Storage
            const storageRef = ref(storage, `profile_images/${userId}/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            // Update user data in sessionStorage with profile picture URL
            sessionStorage.setItem('user-info', JSON.stringify({
                    ...userInfo,
                    name: changedName,
                    profileImage: downloadURL,
            }));

            // Update the user's document with the new profile picture URL
            await updateDoc(userDocRef, {
                profileImage: downloadURL,
                name: changedName,
            });
        } else {
            // If no file is uploaded, update user document with only text information
            sessionStorage.setItem('user-info', JSON.stringify({
                    ...userInfo,
                    name: changedName
            }));

            await updateDoc(userDocRef, {
                name: changedName,
            });
        }

        // Redirect to the profile page
        redirectToProfilePage();
    } catch (error) {

        document.getElementById('save-changes-span').classList.toggle('hidden');
        document.getElementById('loading-balls-container').classList.toggle('hidden');

        console.error("Error during profile update:", error);
    }
};

const redirectToProfilePage = () => {
    window.location.href = "../html/profile-page.html";
};


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('name').value = userInfo.name;
    document.getElementById('email').value = userInfo.email;

    // document.getElementById("save-changes").onclick = updateProfile;
    document.getElementById("choose-file-input").onchange = updateFileName;
    document.getElementById("go-back").onclick = goBackButtonAnimation;
    document.getElementById("save-changes").onclick = saveChangesButtonAnimation;

    updateLeftProfileImage();
});

const updateFileName = () => {

    let fileInput = document.getElementById("choose-file-input");
    let fileNameDiv = document.getElementById("selected-file-name");

    fileNameDiv.textContent = fileInput.files[0].name;
}

const updateLeftProfileImage = () => {
    const leftProfileImage = document.getElementById('left-profile-image');

    leftProfileImage.src = userInfo.profileImage;
}

const saveChangesButtonAnimation = () => {
    document.getElementById("save-changes").classList.toggle('clicked');
    setTimeout(() => document.getElementById("save-changes").classList.toggle('clicked'), 300);
    
    document.getElementById('save-changes-span').classList.toggle('hidden');
    document.getElementById('loading-balls-container').classList.toggle('hidden');
    updateProfile();
}

const goBackButtonAnimation = () => {
    document.getElementById("go-back").classList.toggle('clicked');
    setTimeout(() => document.getElementById("go-back").classList.toggle('clicked'), 300)
    window.location.href = "../html/profile-page.html";
}