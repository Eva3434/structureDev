console.log("DOM TP 22"); 

// Voici comment va se dérouler notre bouton Spoiler :
// - Un bouton s’affiche sur la page proposant d’afficher le message
// - L’utilisateur clique sur le bouton, ce qui va activer une condition

// • La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
// le texte du bouton en « Cacher », et on passe la variable hidden en false
// • La variable hidden vaut false ? Dans ce cas, on cache le message, on change
// le texte du bouton en « Afficher », et on passe la variable hidden en true


let p = document.querySelector("p")
let buttonSelector = document.querySelector("button")

buttonSelector.addEventListener("click", function(event) {
    console.log(event)
    p.setAttribute("style", "")
})

buttonSelector.addEventListener("mouseleave", function(event) {
    p.setAttribute("style", "visibility: hidden")
})


// CORRECTION 
let buttonSelector = document.querySelector("button");
let pSelector = document.querySelector("p");
let hidden = true;

buttonSelector.addEventListener("click", function(){
    if(hidden === true){
        pSelector.classList.remove("hidden");
        hidden = false;
        buttonSelector.textContent = "Cacher";
    }else if(hidden === false){
        pSelector.classList.add("hidden");
        hidden = true;
        buttonSelector.textContent = "Afficher";

    }
})