console.log("DOM TP 18");

// Ajouter un h1 avant la nav dans une div
// - Supprimer l’image

let header = document.querySelector('header');
console.log(header);

let div = document.createElement("div");
header.prepend(div); 
console.log(div);

let h1 = document.createElement("h1");
div.innerText = "Nouveau titre"; 
div.prepend(h1); 


let img = document.querySelector('img');
img.remove();

//CORRECTION

//Ajouter un h1
let nav = document.querySelector("#burger");
let header = document.querySelector("header");
let newDiv = document.createElement("div");

let newTitle = document.createElement("h1");

header.prepend(newDiv);

newDiv.append(newTitle);

//supprimer l'image

let backgroundImg = document.querySelector("img");

backgroundImg.remove();