"use strict";

import  {getDatabase,ref,set,get,child,onValue,push,update,runTransaction,increment} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


import { db } from "./db.js";
import { DataCtrl } from "./modules/data.js";
//https://github.com/ifeoluwa74/kings-and-pigs/tree/master
class Cart{
    constructor(){
        this.subtotal = 0;
        this.cartList = [];
    }
    ActionHandler(){
        document.querySelectorAll("#quantity").forEach((input,index)=>{
            // input.addEventListener("change",(e)=>{
            //     this.subtotal *= e.currentTarget.value;
            //     document.querySelectorAll(".subtotal_cell")[index].textContent = `₦${this.subtotal}`;
            // })
        })
        
        
    }
    getCartData(){
        const datas = DataCtrl.getUserData().then((data)=>{
            document.querySelector(".loadingImage").style.display = "none";
            
            const cartStore = data.cartsStore;
            console.log(cartStore)
            let subtotal  = 0;
            if(typeof cartStore !== "string")
            cartStore.forEach((cartdata)=>{
                const image = cartdata.image;
                const  des =  cartdata.title;
                const  price = cartdata.price;

                // const nairaRemover = price.replace(/[^\d]/g, '');
                // console.log(nairaRemover)
                // subtotal += nairaRemover;

                this.subtotal = price.replace(/[^\d]/g,'');

                const cartUI = ` 
        <tr class = "cart_cells">
    <td class="product_cell">
        <img src="${image}" alt="" class="cartImage">
            <p class="cart_des">${des}</p>
    </td>
    <td class="price_cell">
        <p class="cart_price_C">${price}</p>
    </td>
    <td class="quantity">
    <input type="number" name="number" id="quantity">
    </td>
    <td class="subtotal_cell">
        ₦${subtotal}
    </td>
    <td class = "productRemover">
    <i class="fa fa-trash" aria-hidden="true"></i>
    </td>
</tr>`;

                    document.querySelector(".cart_table").insertAdjacentHTML("beforeend",cartUI);
            })
            this.ActionHandler()
        })
    }
}

const cart = new Cart();

window.onload =()=>{
    cart.getCartData();
}