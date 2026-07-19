/*===========================
        Infinity App
==============================*/        

console.log("Infinity iniciado!");

/*======================
    Elementos
=======================*/
const startButton = document.querySelector(".start-button");
const welcomeScreen = document.querySelector("#welcome-screen");
const loadingScreen = document.querySelector("#loading-screen");

/*===================
    Eventos
=====================*/
startButton.addEventListener("click", startInfinity);

/*=================
    Funções
==================*/
function startInfinity(){
     welcomeScreen.style.display = "none";
     loadingScreen.style.display = "flex";
     setTimeout(function(){
        console.log("Hora de abrir o aplicarivo!");
    
     },2000);
}


 