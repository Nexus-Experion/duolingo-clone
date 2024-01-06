import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore();
const auth = getAuth(app);

let ageInp = document.getElementById('age-input');
let nameInp = document.getElementById('name-input');
let emailInp = document.getElementById('email-input');
let passwordInp = document.getElementById('password-input');
let mainForm = document.getElementById('main-form');

let RegisterUser = async (event) => {
    event.preventDefault();

    try {
        const credentials = await createUserWithEmailAndPassword(auth, emailInp.value, passwordInp.value);

        console.log("Account created successfully");

        const currentDate = new Date();
        
        const userDocRef = doc(db, 'UsersAuthList', credentials.user.uid);
        console.log(credentials.user);

        await setDoc(userDocRef, {
            userId: credentials.user.uid,
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
            currentLesson: 1
        });

        const dbref = doc(db, 'UsersAuthList', credentials.user.uid);

            getDoc(dbref).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    sessionStorage.setItem("user-info", JSON.stringify({
                        userId: userData.userId,
                        email: userData.email,
                        name: userData.name,
                        age: userData.age,
                        gems: userData.gems,
                        xp: userData.xp,
                        hearts: userData.hearts,
                        creationDate: userData.creationDate,
                        learnLang: userData.learnLang,
                        sectionNumber: userData.sectionNumber,
                        completedUnits: userData.completedUnits,
                        completedChapters: userData.completedChapters,
                        currentLesson: userData.currentLesson

                    }));
                    console.log(userData);
                    // sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href = "./learn.html";
                }
            });

    } catch (error) {
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    }
};

mainForm.addEventListener('submit', RegisterUser);