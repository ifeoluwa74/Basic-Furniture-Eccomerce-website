"use strict";

export class User{
    constructor(userName,email,password,products,CartCount,CartList){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.products = products;
        this.CartCount = CartCount;
        this.CartList = CartList;
    }
}


