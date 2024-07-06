"use strict";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

  import { getAuth, createUserWithEmailAndPassword,sendSignInLinkToEmail,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import  {getDatabase,ref,set,get,child} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  import { User } from "./users.js";
  // import { DataCtrl } from "./modules/data.js";
  import { datas } from "./products.js";
  import { UICtrl } from "./modules/UI.js";

  import { app } from "./db.js";
  import { auth } from "./db.js";
  import { db } from "./db.js";

// Follow this pattern to import other Firebase services
// const firebaseConfig = {
//   apiKey: "AIzaSyAb77lh9sE0X8K1C-Otbfo4RaWLnn1g1dM",
//   authDomain: "idofurniture-2c582.firebaseapp.com",
//   projectId: "idofurniture-2c582",
//   storageBucket: "idofurniture-2c582.appspot.com",
//   messagingSenderId: "296246861768",
//   appId: "1:296246861768:web:d39f60db9f1859a318eafd",
//   measurementId: "G-QZFH51Y57Z",
//   databaseURL:"https://idofurniture-2c582-default-rtdb.firebaseio.com/"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

async function writeUserData(userId,user) {
  console.log(user)
  const db = getDatabase(app);
  await set(ref(db, 'users/' + userId), {
    username: user.userName,
    email: user.email,
    products:user.products,
    password:user.password,
    cartsCount:user.CartCount,
    cartsStore:user.CartList
  })
}



// const dbRef = ref(getDatabase(app));
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });



const signUpHandler =()=>{
  document.querySelector(".validation_C_for_signup").addEventListener("submit",(e)=>{
  
      const firstName = document.getElementById("FirstName").value;
      const LastName = document.getElementById("LastName").value;
      const password = document.getElementById("Password").value;
      const email = document.getElementById("Email").value;
  
      let dataStore = false;
  
      e.preventDefault();
  
      if(firstName == ' ' ||  LastName == " " || email == '' || password == ""){
        alert('One input empty!!!')
        return;
      }
      
      document.querySelector(".signUpLoadingGif").style.display = 'block';
      document.querySelector(".signupText_C").style.display = 'none';
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          document.querySelector(".signupText_C").style.display = 'block';
        document.querySelector(".signUpLoadingGif").style.display = 'none';

          // document.querySelector(".validation__container_for_signup").style.display = 'none';
          // document.querySelector(".signupText_C").style.display = "none";
          // document.querySelector(".signUpLoadingGif").style.display = "flex";

          saveData();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });

        console.log(password)


        function saveData(){
          onAuthStateChanged(auth, (user) => {
            if (user) {
              document.querySelector(".signupText_C").style.display = "flex";
              document.querySelector(".signUpLoadingGif").style.display = "none";
              document.querySelector(".validation__container_for_signup").style.display = 'none';
              document.querySelector(".signUp_success_C").style.display = 'flex';
  
              const userId = user.uid;
                const products = datas;
                UICtrl.getSignUpText().style.display = 'none';
                const cartsStore = JSON.stringify([]);
                let cartsCount = 0;

                localStorage.setItem('userID',`${userId}`);
                console.log(password)
                writeUserData(userId,new User(`${firstName} ${LastName}`,email,password,products,cartsCount,cartsStore));
    
                // window.location.href = '/signin';
              // ...
            }
          });

        }
  
  
  })
}

document.addEventListener("DOMContentLoaded",signUpHandler);

