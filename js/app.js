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
const app = document.querySelector("#app");
const counter = document.querySelector("#counter");
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
        loadingScreen.style.display = "none";
        app.style.display = "flex";
        updateCounter(); 
    
     },2000);
}

function updateCounter(){
    const startDate = new Date("2026-04-17");
    const today = new Date();

    const difference = today - startDate;
    const days = Math.floor(difference / 86400000);
    console.log(days);

    let word = "dias";
    if(days <0) {
        counter.textContent = "❤️ Nosso amor começa em breve...";
        return;
    }

    if (days ===1){
        word = "dia";
    }
    counter.textContent =  `❤️ ${days} ${word} juntos`;

}

 