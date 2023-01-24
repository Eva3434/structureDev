console.log("DOM TP 19");

// - Enlevez tout les scripts ajouté plus tôt.
// - Modifiez le style du body en js pour mettre un background gradient plutôt que le bleu de base

let body = document.querySelector('body'); 
body.style.backgroundColor = 'green';

// CORRECTION 

document.body.style.backgroundColor = "unset";
document.body.style.color = "red";
let bodySelector = document.querySelector("body");
document.body.style.background = "linear-gradient(#f69d3c, #3f87a6)";
document.body.classList.add("gradient-body");

document.body.setAttribute("style", "background-color: red");
document.body.setAttribute("style", "background-color: red; color: red");
bodySelector.setAttribute("class", "gradient-body");
// let imgSelector = document.querySelector("img");

// imgSelector.setAttribute("src", "img/quarate.jpg");
// imgSelector.src = "https://pressegalactique.com/wp-content/uploads/2020/02/licorne.jpg";
// //correction

// document.querySelector("body").className = "gradientBody";
// document.querySelector("h1").style.color = "#111d5e"; //il n'existe plus