"use strict";

import { DataCtrl } from "./modules/data.js";

function seqSearch (arr,data){
    for (let i = 0; i < arr.length; ++i) {
            let wordIndex = data.length - 1;
           
            if (arr[i] == data[wordIndex]) {
                return i;
            }
    }
    return -1;
}

document.querySelector(".searchSubmission").addEventListener("submit",(e)=>{
    e.preventDefault();

    const searchInput = document.getElementById("search_input").value;
    
    var userInput = new String(searchInput).split(" ");
    DataCtrl.getUserData().then((datas)=>{
        const products = datas.products;

        for(let i = 0;i < products.length;i++){
            // const 
        }
    })
    var word = new String("How are you").split(" ");
    var start = new Date().getTime();
    var pos = seqSearch(words, word);
    var stop = new Date().getTime();
    var elapsed = stop - start;
    if (pos >= 0) {
     console.log("Found " + word + " at position " + pos + ".");
     console.log("Sequential search took " + elapsed + " milliseconds.");
    }
    else {
        console.log(word + " is not in the file.");
    }

})


