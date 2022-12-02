/***
 * TP MODALS
 * Vous allez réaliser trois modal dans votre site.
 * Les modals sont des fenêtre de type popup qui apparaissent pour donner des informations à vos utilisateurs.
 * pour les deux première vous allez utilisez le design que je vous fournis en regardant l'url suivante.
 * https://rubenavone.github.io/modals-javascript/
 * Le troisième devra être une modal pour la connexion/inscription à votre site.
 * Cherchez un design qui vous plait et integrer le comme les précedent.
 * N'hésiter pas à passer un peu de temp sur la recherche pour faire un design qui vous plait et qui vous met au défis.
 * 
 */


//Selecteur qui servira pour toutes les modale
let globalModalSelector = document.querySelector(".modal");
let crossSelector = document.querySelectorAll(".cross");

//EVENT pour tous
crossSelector.forEach(function(cross){
    cross.addEventListener("click", function () {
        removeAll();
    })
})


/**
 * Cookie modal gestion
 */

//SELECTOR

let cookieBtnSelector = document.querySelector(".cookie");
let cookieModalSelector = document.querySelector(".cookie-modal");

//Function
function cookieToggler() {
    cookieModalSelector.classList.toggle("d-none");
    globalModalSelector.classList.toggle("d-none");
}
//évenement
cookieBtnSelector.addEventListener("click", function (e) {
    cookieToggler()
})


globalModalSelector.addEventListener("click", function (e) {
    if (e.target !== this) {
        return;
    }
    removeAll();
})


/**
 * news-letter modal gestion
 */

//SELECTOR

let newsBtnSelector = document.querySelector(".news-letter");
let newsModalSelector = document.querySelector(".news-letter-modal")
//FUNCTION
function newsToggler(){
    newsModalSelector.classList.toggle("d-none");
    globalModalSelector.classList.toggle("d-none"); 
}

//EVENT
newsBtnSelector.addEventListener("click",function(){
    newsToggler();
})


function removeAll(){
    cookieModalSelector.classList.add("d-none");
    globalModalSelector.classList.add("d-none");
    newsModalSelector.classList.add("d-none")
}