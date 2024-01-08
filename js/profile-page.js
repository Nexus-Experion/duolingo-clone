import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);
// const storage = getStorage(app);

let userInfo = JSON.parse(sessionStorage.getItem('user-info'));
const userId = userInfo.userId;

const userDocRef = doc(db, 'UsersAuthList', userId);

const profileImage = document.getElementById('profile-image');

$(document).ready(function() {

    if (userInfo) {

        document.getElementById('first-and-last-name').innerHTML = userInfo.name;
        document.getElementById('email').innerHTML = userInfo.email;

        document.getElementById('xp-value').innerHTML = userInfo.xp;
        
        // Check if creationDate is available and is a valid timestamp object
        if (userInfo.creationDate && typeof userInfo.creationDate === 'object') {
            const milliseconds = userInfo.creationDate.seconds * 1000 + userInfo.creationDate.nanoseconds / 1000000;
            const formattedCreationDate = new Date(milliseconds).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        
            document.getElementById('join-date').innerHTML = formattedCreationDate;

        } else {
            document.getElementById('join-date').innerHTML = "Unknown Date";
        }

        profileImage.src = userInfo.profileImage
    }
});

// onSnapshot(userDocRef, (doc) => {
//     console.log("Snapshot triggered");
//     const data = doc.data();
//     if (data && data.profileImage) {
//         profileImage.src = data.profileImage;
//     }
// });