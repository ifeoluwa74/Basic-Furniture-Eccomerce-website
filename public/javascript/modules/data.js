"use strict";
// import { datas } from "../products.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import  {get,child} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// import { Product } from "./product.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyAb77lh9sE0X8K1C-Otbfo4RaWLnn1g1dM",
//     authDomain: "idofurniture-2c582.firebaseapp.com",
//     projectId: "idofurniture-2c582",
//     storageBucket: "idofurniture-2c582.appspot.com",
//     messagingSenderId: "296246861768",
//     appId: "1:296246861768:web:d39f60db9f1859a318eafd",
//     measurementId: "G-QZFH51Y57Z",
//     databaseURL:"https://idofurniture-2c582-default-rtdb.firebaseio.com/"
//   };

// export const app = initializeApp(firebaseConfig);
// export const db = ref(getDatabase(app));

import { app } from "../db.js";
import { db } from "../db.js";


const DataController =(()=>{
    class DataCtrl{
        constructor(){
            this.bannerImageData = ["pexels-fotoaibe-1643383.jpg","pexels-pixabay-276528.jpg","pexels-pixabay-276583.jpg"];
            this.products = [];
           
            // this.dataStore = this.products; // initializes an empty array to store list elements
        }

        getDataBase(){
            return db;
        }

        getUserData(){
            const userId = localStorage.getItem('userID');
            console.log(userId)
            return get(child(db,`users/` + userId)).then((dataSnapshot)=>{
                if(dataSnapshot.exists()){
                    return dataSnapshot.val();
                }else{
                    alert(`Data Not Found!!!`)
                }
            })
        }
     
        getProductData(){
           return get(child(db,`products/datas`)).then((dataSnapshot)=>{
                if(dataSnapshot.exists()){
                    return dataSnapshot.val();
                }else{
                    alert(`Data Not Found!!!`)
                }
            })
        }
        getProducts(){
            if(this.products.length > 1)
                return this.products;
        }
        setBannerImageData(data){
            this.bannerImageData = data;
        }
        getBannerImageData(){
            return this.bannerImageData;
        }
    }

    return new DataCtrl();
})();


export const DataCtrl = DataController;

