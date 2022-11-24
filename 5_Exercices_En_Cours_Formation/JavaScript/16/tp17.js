console.log('DOM TP 17');

/* Maintenant que vous savez sélectionner des éléments vous allez pour voir les modifier.
    - A l’aide de js modifier le texte du h2.
    - A l’aide de js modifier le texte uniquement du deuxième a
 */ 


    
// let h2 = document.querySelector('h2');
// h2.textContent = "MODIFIER"
document.querySelector('h2').textContent = "MODIFIER";


let aAll = document.querySelectorAll('a');
aAll[1].textContent = "modifier";

//CORRECTION

let h2 = document.querySelector("h2");
let a = document.querySelectorAll("a");
h2.textContent = "Montpellier ville de rêves pour vos vacance !";

a[1].textContent = "Nos apparts";

//Version sans déclaration de variable
document.querySelectorAll("a")[1].textContent = "1232";
