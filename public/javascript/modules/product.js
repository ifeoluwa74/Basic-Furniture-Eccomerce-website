"use strict";
import { List } from "../List.js";

export class Product extends List{
    constructor(dataStore){
        super(dataStore)
        this.src = dataStore.image;
        this.title = dataStore.title;
        this.price = dataStore.price;
        this.image = null;
    }
    checkOut(name, movie, filmList, customerList){
        // if (movieList.contains(movie)) {
        //     var c = new Customer(name, movie);
        //     customerList.append(c);
        //     filmList.remove(movie);
        //     }
        //     else {
        //     print(movie + " is not available.");
        //     }
    }
    getProductObject(){
        const product = `<div class="products_C">
        <div class="products_image_C">
            <img src="${this.src}" alt="">
        </div>
        <div class="products_content">
            <div class="products_description_C">
                <p class="products_description">
                    ${this.title}
                </p>
            </div>
            <div class="products_price_C">
                <div class="products_price">${this.price}</div>
            </div>
            <div class="products_cartOut_btn_C">
               
                <button class = "add_btn">
                    <div class = "loading_cart_add_C">
                 <img class = "loading_cart_add" src"/images/ZZ5H.gif"/>
                    </div>
                <p class = "addCart_text">
                Add To Cart
                </p>
                </button>
            </div>
        </div>
    </div>`;
        return  product;
    }
    
}

