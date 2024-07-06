"use strict";

import { UICtrl } from "./modules/UI.js";
import { DataCtrl } from "./modules/data.js";


const MainController =((UICtrl,DataCtrl)=>{

        class  MainCtrl{
            constructor(){
                this.imageStillLoading = 0;
                this.bannerImages = [];
                this.UICtrl = UICtrl;
                this.DataCtrl = DataCtrl;
                this.banner = undefined;
            }
            loadImage(){
                for(let i = 0;i < this.bannerImageData.length;i++){
                    const image = new Image();
                    image.src = `/images/${this.bannerImageData[i]}`;
                    image.classList.add("banner");
                    this.imageStillLoading += 1;
                    image.onload=()=>{
                        this.imageStillLoading -= 1;
                    }
                    this.bannerImages.push(image);
                }
                
            }
            imageLoadingLoop(){
                if(controller.imageStillLoading > 0){
                    controller.loadingGIF.style.display = "block";
                    requestAnimationFrame(controller.imageLoadingLoop)
                }else{
                    controller.loadingGIF.style.display = "none";
                    controller.loadAnimation();
                }
            }
            loadAnimation(){
                let index = 0;
                let indexs = this.UICtrl.getIndex();
                setInterval(()=>{
                    indexs.forEach((i)=>{
                        i.removeAttribute('id')
                    })
                    if(document.querySelector(".banner")){
                        document.querySelector(".banner").remove();
                    }
                    
                    index = (index >= this.bannerImageData.length) ? 0 : index++;
                    this.banner.append(this.bannerImages[index]);
                    indexs[index].setAttribute('id','show');
                    index++;
                },1000)
            }
            bannerAnimation(){
                this.banner = this.UICtrl.getBanner();
                this.bannerImageData = this.DataCtrl.getBannerImageData();
                this.loadingGIF = this.UICtrl.getLoadingGIF();
                if(this.banner){
                    this.loadImage();
                    this.imageLoadingLoop();
                }
            }
            ActionHandler(){
                let startBtn = this.UICtrl.getStartBtn();
                let timeContainer = this.UICtrl.getTimeContainer();
                let timeCart = this.UICtrl.getTimeCart();
                let sideMenuBar = this.UICtrl.getSideMenuBar();
                let navBar = this.UICtrl.getNavBar();
                let overLay = document.createElement("div");

                overLay.classList.add("overLay")



                if(startBtn)
                startBtn.addEventListener('click',()=>{
                    window.location.href = '/signup';
                })
                timeContainer.addEventListener("click",()=>{
                    sideMenuBar.removeAttribute('id')
                   sideMenuBar.setAttribute('id','slideIn');
                   document.querySelector(".overLay").remove();
                });
               
                navBar.addEventListener('click',()=>{
                    sideMenuBar.removeAttribute('id');
                    sideMenuBar.setAttribute('id','slideOut');
                    document.body.append(overLay);
                })


                // if(window.location.href === 'http://localhost:3000/signup' ||   window.location.href === 'http://localhost:3000/signin'){
                //    return null;
                // }else{
                //     DataCtrl.getUserData().then((datas)=>{
                //         const  cartsCount = datas.cartsCount;
                //           document.querySelector(".cart_text").textContent = cartsCount;
                //   })
                // }

                DataCtrl.getUserData().then((datas)=>{
                    const cartsCount = datas.cartsCount;
                    document.querySelector(".cart_text").textContent =  cartsCount;
                })




            }
        }
        const controller = new MainCtrl();
        return{
            init:function(){
                if(window.location.href === 'http://localhost/' || window.location.href === 'http://localhost/signin' || window.location.href === 'http://localhost/signup'){
                    document.querySelector('.bottom__layer').style.display = 'block';
                }
                DataCtrl.getUserData().then((datas)=>{
                    if(datas){
                        if(window.location.href === 'http://localhost/shop'){
                            document.querySelector('.bottom__layer').style.display = 'block';
                        }
                    }
                })

                controller.bannerAnimation();
                controller.ActionHandler();
            }
        }
})(UICtrl,DataCtrl);


document.addEventListener("DOMContentLoaded",MainController.init);

// window.onload =()=>{
//     console.log("hey")
//     MainController.init();
// }