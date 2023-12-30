import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDnNGi5xjCZ6QyWhor0FdBmzZtGwDE0qG8",
    authDomain: "test-authentication-55b9c.firebaseapp.com",
    databaseURL: "https://test-authentication-55b9c-default-rtdb.firebaseio.com",
    projectId: "test-authentication-55b9c",
    storageBucket: "test-authentication-55b9c.appspot.com",
    messagingSenderId: "989265688187",
    appId: "1:989265688187:web:d907150303d815ac0a14de"
  };

const app = initializeApp(firebaseConfig);

export{app};
