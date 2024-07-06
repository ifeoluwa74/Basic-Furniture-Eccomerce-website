"use strict";
//git remote add origin https://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@github.com/ifeoluwa74/IdoFurniture
//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
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

  import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import  {getDatabase,ref} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAb77lh9sE0X8K1C-Otbfo4RaWLnn1g1dM",
    authDomain: "idofurniture-2c582.firebaseapp.com",
    projectId: "idofurniture-2c582",
    storageBucket: "idofurniture-2c582.appspot.com",
    messagingSenderId: "296246861768",
    appId: "1:296246861768:web:d39f60db9f1859a318eafd",
    measurementId: "G-QZFH51Y57Z"
  };

 
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const db = ref(getDatabase(app));



