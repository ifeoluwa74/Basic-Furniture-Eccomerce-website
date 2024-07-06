"use strict";

const index =(req,res)=>{
    res.render('index.jade', { title: 'Ido furniture/HOME',csspath:"index.css",javascriptpath:'index.js'});
}

const signup =(req,res)=>{
    res.render('signup',{title:'ido furniture/signUp',csspath:"signup.css",javascriptpath:"signup.js"})
}

const signin =(req,res)=>{
    res.render('signin',{title:'ido furniture/signIn',csspath:'signin.css',javascriptpath:'signin.js'});
}

const shop =(req,res)=>{
    res.render('shop',{title:'idofurniture Shop/shop',csspath:'shop.css',javascriptpath:'shop.js'})
}

const notFound =(req,res)=>{
    res.render('404',{title:'ido furniture',csspath:'404.css'})
}

const Cart =(req,res)=>{
    res.render('cart',{title:'idofurniture ShoppingCart',csspath:'cart.css',javascriptpath:'cart.js'});
}

const serverError =(req,res)=>{
    res.render('500')
}

export const jades = {
    index,
    signup,
    shop,
    signin,
    notFound,
    Cart
}