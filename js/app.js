console.log("Infinity iniciado!");
const startButton = document.querySelector(".star-button");
console.log(startButton);

startButton.addEventListener("click", function (){
    welcomeScreen.style.display = "none";
    loadingScreen.style.display = "flex";
});

const welcomeScreen = document.querySelector("#welcome-screen");
const loadingScreen = document.querySelector("#loading-screen");

 