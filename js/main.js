"use strict";
const sound = new Audio("./mp3/hasbulla.mp3")
const cable = document.querySelector(".cable");
const storm = document.querySelector(".storm");


cable.addEventListener("click" , function(){
    this.classList.toggle("active")
    sound.play();
    
    let timer =  setTimeout(() => {
        storm.classList.add("passiv")
        sound.play();
    }, 400);
    
    setTimeout(() => {
        clearTimeout(timer);
        storm.classList.remove("passiv")
    }, 2000);

});






