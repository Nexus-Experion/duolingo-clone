




import { getFirestore, doc,getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);


let userData = JSON.parse(sessionStorage.getItem("user-info"))
const myButton = document.getElementById('heartButton');

async function upDate(){
const dbref = doc(db, 'UsersAuthList',userData.userId);
console.log("firing firebase");
let newGem = userData.gems - 10;
let newHeart = userData.hearts + 1;
userData.gems = newGem ;
userData.hearts = newHeart;
await updateDoc(dbref,userData);
}
myButton.addEventListener('click',upDate);



