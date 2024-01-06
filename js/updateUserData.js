// import { getFirestore, doc,getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
// import { app } from "./firebaseConfig.js";

// const db = getFirestore(app);

// const dbref = doc(db, 'UsersAuthList', 'pP12m5acbjdFd3XYWYMWMOeyDK62');

// getDoc(dbref).then((docSnapshot) => {
//   if (docSnapshot.exists()) {
//     const userData = docSnapshot.data();
//     console.log(userData);
//   }
// });

// let xpFromLesson = parseInt(localStorage.getItem("xpCount"));
// isNaN(xpFromLesson) ? xpFromLesson = 0 : 0
// console.log(xpFromLesson);

// let userData = JSON.parse(sessionStorage.getItem("user-info"))

// if (xpFromLesson != 0) {
//     let newXp=userData.xp+xpFromLesson;
//     userData.xp=newXp;
//     await updateDoc(dbref,{
//         xp: newXp
//       })
//     sessionStorage.setItem("user-info", JSON.stringify(userData));
//     localStorage.removeItem("xpCount");
// }

