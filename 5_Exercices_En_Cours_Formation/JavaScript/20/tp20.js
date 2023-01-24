console.log("DOM TP 20");

// EXEMPLE
//Add event listener
/*
console.log("hello");

let titleSelector = document.querySelector("h1");
let buttonSelector = document.querySelector("button");

console.log(titleSelector, buttonSelector);

buttonSelector.addEventListener("click", function(){

})

window.addEventListener("keypress", function(event){
    console.log(event);
    if(event.key === "a"){
        console.log("vous venez d'appuyer sur a")
    }
})

function hello(){
    console.log("hello");
}
*/

//                TP 20
// - Créez une page html avec un lien et un bouton
// - A l’aide de addEventListener créez un évènement pour supprimer le lien en cliquant dessus.
// - Changez le background color du body en survolant le bouton et faites qu’il redevienne blanc quand la
// souris quitte le bouton.
// - Créez une section avec un h1 dedans et un texte dans la section mais en dehors du h1.

// - Créez un évènement au clique du h1 qui crée une alert disant que vous cliquez sur le h1 et de même pour la section. Que constatez vous ?

let lien = document.querySelector('p');
let buttonSelector = document.querySelector("button");

lien.addEventListener("click", function(){
    supprimer(lien);
});

function supprimer(i){
    i.remove();
};

buttonSelector.addEventListener("mouseenter", function(){
    background(document.body);    
});

buttonSelector.addEventListener("mouseleave", function(){
    background2(document.body);    
});

function background(x){
    x.style.backgroundColor = 'green'; 
}
function background2(x){
    x.style.backgroundColor = 'white'; 
}; 


let section = document.createElement("section");
section.innerText="Texte de la section";
document.body.prepend(section);

let titre = document.createElement("h1");
titre.innerText = "Nouveau titre";
section.prepend(titre);

titre.addEventListener("click", function(event){
     afficherTitre();
     event.stopPropagation();
        
});

section.addEventListener("click", function(event){
        afficherSection();
});

function afficherSection(){
    alert(`Vous avez cliqué sur section`)
};
function afficherTitre(){
    alert(`Vous avez cliqué sur titre`)
};















