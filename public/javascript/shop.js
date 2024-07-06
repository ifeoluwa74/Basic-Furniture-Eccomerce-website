"use strict";

  import  {getDatabase,ref,set,get,child,onValue,push,update,runTransaction,increment} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  

import { Product } from "./modules/product.js";
import { DataCtrl } from "./modules/data.js";
import { db } from "./db.js";
// import { app } from "./modules/data.js";
// import { db } from "./modules/data.js";
import { UICtrl } from "./modules/UI.js";
import { User } from "./users.js";
  


class Shop extends User{
    constructor(products){
      super()
        this.loadingIndex = 0;
        this.products = [];
        this.productData = []
        this.cartsCount = 0;
        this.CartList = [];
    }
    displayProducts(){

      DataCtrl.getUserData().then((datas)=>{
        document.querySelector(".loadingImage").style.display = "none";
        document.querySelector(".bottom__layer").style.display = "block";
        const products = datas.products;
        this.cartsCount = datas.cartsCount;
        if(typeof datas.cartsStore === "string")
        this.CartList = [];
        else  
          this.CartList = datas.cartsStore;
        // document.querySelector(".cart_text").textContent = this.cartsCount;
        const productsLayout = UICtrl.getProductsLayout();

        for(let i = 0;i < products.length;i++){
          this.products.push(new Product(products[i]));
          this.productData.push(products[i]);
        }

        for(let i = 0;i < this.products.length;i++){
          if(i <= 30){
              this.loadingIndex = 50;
              productsLayout.insertAdjacentHTML('beforeend',this.products[i].getProductObject());
          }
      }
              // productsLayout.insertAdjacentHTML('beforeend',UICtrl.getLoadingBtn());
              document.querySelector(".productLoadingBtn_C").style.display = "block";
        this.ActionHandler()
      })
    }
    ActionHandler(){
      const productsBtn = document.querySelectorAll(".products_cartOut_btn_C");
      const dataBase = DataCtrl.getDataBase();
      const userId = localStorage.getItem("userID");

      // console.log(this)
      productsBtn.forEach((btn,index)=>{
       btn.addEventListener("click",()=>{
          const updates = {};
          //   console.log(this)
          shop.CartList.push(shop.productData[index])

          updates[`users/${userId}/cartsCount`] = increment(1);
          updates[`users/${userId}/cartsStore`] = shop.CartList;

          document.querySelectorAll(".loading_cart_add_C")[index].style.display = "block";
          // document.querySelectorAll("")
          document.querySelectorAll(".addCart_text")[index].style.display = "none";
          if(update(db,updates)){
            document.querySelectorAll(".loading_cart_add_C")[index].style.display = 'none';
            document.querySelectorAll(".addCart_text")[index].style.display = "block";


            this.cartsCount++
            document.querySelector(".cart_text").textContent = this.cartsCount;
          }


       },false)
      })
        let counter = 2;
      document.querySelector(".productLoadingBtn_C").addEventListener("click",()=>{
          
      DataCtrl.getUserData().then((datas)=>{
        const products = datas.products;
        
        // document.querySelector(".cart_text").textContent = this.cartsCount;
        const productsLayout = UICtrl.getProductsLayout();

        // for(let i = 0;i < products.length;i++){
        //   this.products.push(new Product(products[i]));
        //   this.productData.push(products[i]);
        // }
        const nth = 30 * counter
        for(let i = this.loadingIndex;i < this.products.length;i++){
          if(i <= nth){
              this.loadingIndex = nth;
              productsLayout.insertAdjacentHTML('beforeend',this.products[i].getProductObject());
              counter++;
          }
      }
        this.ActionHandler()
      })
      })
      /* 
      
      const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
      
      */
  // const postRef = ref(db, '/posts/foo-bar-123');
      
  // runTransaction(postRef, (post) => {
  //   if (post) {
  //     if (post.stars && post.stars[uid]) {
  //       post.starCount--;
  //       post.stars[uid] = null;
  //     } else {
  //       post.starCount++;
  //       if (!post.stars) {
  //         post.stars = {};
  //       }
  //       post.stars[uid] = true;
  //     }
  //   }
  //   return post;
  // });

        // if(UICtrl.getProductLoadingBtn()){
        //   UICtrl.getProductLoadingBtn().addEventListener("click",()=>{
        //     get(child(db, `products/datas`)).then((datas)=>{
        //       if(datas.exists()){
        //         document.querySelector(".loadingImage").style.display = 'none';
        //         const products = datas.val();
        //         const productsLayout = UICtrl.getProductsLayout();
        //             this.productData = products;
        //             for(let i = this.loadingIndex;i < products.length;i++){
        //                 if(i <= 50){
        //                   this.loadingIndex = 50;
        //                   this.products.push(new Product(products[i]));
        //                 }
        //                 // productsLayout.insertAdjacentHTML('beforeend',new Product(products[i]));
        //             }
      
        //             this.products.forEach((product)=>{
        //                productsLayout.insertAdjacentHTML('beforeend',product.getProductObject());
        //             })
        //             productsLayout.insertAdjacentHTML('beforeend',UICtrl.getLoadingBtn());
        //             shop.ActionHandler();
        //       }
        //     })
        //   })
        // }
    }
}
 const shop = new Shop();

window.onload =()=>{
  const userID = localStorage.getItem("userID");
  if(userID){
    shop.displayProducts();
  }else{
    window.location.href = "/signup";
  }
}
