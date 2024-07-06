"use strict";

const UIController =(()=>{
    class UICtrl{
        constructor(){
            this.bannerDOM = document.querySelector(".Banner");
            this.loadingGIF = document.querySelector(".loadingGIF");
            this.indexs = document.querySelectorAll('.index');
            this.startBtn = document.querySelector('.Starter_btn');
            this.signUpText = document.querySelector(".signupText_C");
            this.signUpBtn = document.querySelector(".signUpBtn");
            this.times = document.querySelector('.times_C');
            this.timeCart = document.querySelector('.times_Cart')
            this.sideMenuBar = document.querySelector('.sideMenuBar_C');
            this.navBar = document.querySelector('#navBar');
            this.productsLayout = document.querySelector('.products_layout_C');
            this.productLoadingBtn = document.querySelector('.productLoadingBtn');
            this.productsBtn = document.querySelectorAll(".products_cartOut_btn_C");
        }
        getProductBtn(){
            return this.productsBtn;
        }
        getSignUpBtn(){
            return this.signUpBtn;
        }
        getProductLoadingBtn(){
            return  this.productLoadingBtn;
        }
        getSignUpLoadingGif(){
            return document.querySelector(".signUpLoadingGif");
        }
        getLoadingBtn(){
            return `<div class="productLoadingBtn_C">
                    <button class="productLoadingBtn">
                        <img class="productLoadingGif" src="/images/ZZ5H.gif"/>
                        <div class="productLoading_text_C">
                            <p>Load Product</p>
                        </div>
                        </button>
                        </div>
                        `
        }
        getSignUpText(){
            return this.signUpText;
        }
        getTimeCart(){
            return this.timeCart;
        }
        getProductsLayout(){
            return this.productsLayout;
        }
        getNavBar(){
            return this.navBar;
        }
        getSideMenuBar(){
            return this.sideMenuBar;
        }
        getTimeContainer(){
            return this.times;
        }
        getStartBtn(){
            return this.startBtn;
        }
        getIndex(){
            return this.indexs;
        }
        getLoadingGIF(){
            return this.loadingGIF;
        }
        getSignUpBtn(){
            return this.signUp;
        }
        setBanner(banner){
            this.bannerDOM = banner;
        }
        getBanner(){
            return this.bannerDOM;
        }
    }
   return new UICtrl();
})();

export const UICtrl = UIController;