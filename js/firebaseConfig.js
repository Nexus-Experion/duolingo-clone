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

export{app};