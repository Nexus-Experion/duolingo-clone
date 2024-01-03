import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);
const auth = getAuth(app)

let emailInp = document.getElementById('emailInput');
let passwordInp = document.getElementById('passInput');
let mainForm = document.getElementById('main-form');

let signInUser = (evt) => {
    console.log("Reached Signin");
    evt.preventDefault();

    signInWithEmailAndPassword(auth, emailInp.value, passwordInp.value)
        .then((credentials) => {
            const dbref = doc(db, 'UsersAuthList', credentials.user.uid);

            getDoc(dbref).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    sessionStorage.setItem("user-info", JSON.stringify({
                        email: userData.email,
                        name: userData.name,
                        age: userData.age,
                        gems: userData.gems,
                        xp: userData.xp,
                        hearts: userData.hearts,
                        creationDate: userData.creationDate
                    }));
                    // sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href = "./learn.html";
                }
            });
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        });
}

mainForm.addEventListener('submit', signInUser);