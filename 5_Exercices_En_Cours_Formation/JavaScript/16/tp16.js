console.log("DOM TP 16");

// Pour inclure nos scripts qui vont intéragir avec le DOM, nous allons les placer avant la fin de la balise
// body.
// - Je vous invite à chercher pourquoi placer nos balise à cette endroit et pas à un autre endroit.
// - Faites un fichier js que vous incluez dans le fichier html que je vais vous donner.
// - Créez et console.logguez les variables qui vont afficher : le h2, tout les « a », la div avec la
// class « text ».
// - Si vous utilisez querySelector et querySelectorAll constatez vous une différence ?

let h2 = document.querySelector('h2');
console.log(h2);
let a = document.querySelectorAll("a");
console.log(a);
let divText = document.querySelector(".text");
console.log(divText);

// CORRECTION 

console.log("Hello World !");

let burger = document.getElementById("burger");
let burgerSelector = document.querySelector("#burger");
let h2 = document.querySelector("h2");
let a = document.querySelectorAll("a");
let text = document.querySelector(".text");

console.log(burger);
console.log(burgerSelector)
console.log(h2);
console.log(a[0]);
console.log(text);