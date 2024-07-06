"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import  {getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


  import { app } from "./db.js";
  import { auth } from "./db.js";
  import { db } from "./db.js";


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// // const dataBase = getDatabase(app);
// const dbRef = ref(getDatabase(app));


const formEl = document.querySelector('.validation_C_for_signin')

formEl.addEventListener("submit",(e)=>{

  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  e.preventDefault();

  document.querySelector(".signInLoadingGif").style.display = 'block';
  document.querySelector(".signinText_C").style.display = 'none';

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.querySelector(".signinText_C").style.display = 'block';
      document.querySelector(".signInLoadingGif").style.display = 'none';
      window.location.href = '/shop';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})
