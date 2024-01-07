import { getFirestore, doc,getDoc, updateDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);


function updateToFirestore(){
    
    const dbref =  getDocs(collection(db, "UsersAuthList").where('name', '==', 'vijay'));
    let userData = JSON.parse(sessionStorage.getItem("user-info"));
    let newGem = userData.gems - 10;
    let newHeart = userData.hearts + 1;
    updateDoc(dbref,{
            gems: newGem,
            hearts: newHeart
        })
}
const myButton = document.getElementById('heartButton');
myButton.addEventListener('click',updateToFirestore);