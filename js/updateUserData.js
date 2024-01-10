import { getFirestore, doc,getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { app } from "./firebaseConfig.js";

const db = getFirestore(app);


let userData = JSON.parse(sessionStorage.getItem("user-info"))

const dbref = doc(db, 'UsersAuthList', userData.userId);

getDoc(dbref).then((docSnapshot) => {
  if (docSnapshot.exists()) {
    const userData = docSnapshot.data();
    console.log(userData);
  }
});
// localStorage.setItem("hearts",3);
let xpFromLesson = parseInt(localStorage.getItem("xpCount"));
let newHearts = parseInt(localStorage.getItem("hearts"));

let sectionData=JSON.parse(localStorage.getItem("sectionData"));

isNaN(xpFromLesson) ? xpFromLesson = -2 : 0
isNaN(newHearts) ? newHearts = 0 : 0

console.log(userData);


if (xpFromLesson > -1) {
    let newXp=userData.xp+xpFromLesson;
    userData.xp=newXp;
    userData.hearts=newHearts;
    if(xpFromLesson > 0){
      userData.currentLesson+=1
      if(userData.currentLesson > 4){
        userData.currentLesson=1
        userData.completedChapters+=1
        if(userData.completedChapters >= 9){
          userData.completedChapters=0
          userData.completedUnits+=1
        }
      }
    }

    await updateDoc(dbref,userData);
    sessionStorage.setItem("user-info", JSON.stringify(userData));
    localStorage.removeItem("xpCount");
    setTimeout(()=>location.reload(),300)
}

