import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjnf2lpJBhCS8f4SXiDxxoJbcUMVguQ4s",
  authDomain: "duolingo-project-e5ef7.firebaseapp.com",
  projectId: "duolingo-project-e5ef7",
  storageBucket: "duolingo-project-e5ef7.appspot.com",
  messagingSenderId: "965532549154",
  appId: "1:965532549154:web:a36cf358c57a675e820a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const leaderboardContainer = document.getElementById('leaderboard-container');
// const leaderboardRef = db.collection('UsersAuthList');
const querySnapshot = await getDocs(collection(db, "UsersAuthList"));
let arrayForProfiles=[];
querySnapshot.forEach((doc) => {
    const data = doc.data();
    // console.log(data);
    // console.log(data.name);
    arrayForProfiles.push(data);
});
export default arrayForProfiles;
