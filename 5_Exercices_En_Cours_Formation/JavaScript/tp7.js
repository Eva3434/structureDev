console.log("Tp numero 7");
// Une fonction qui calcule l'imc d'une personne,
//     Deux paramètre poid et taille
//     la formule poid en kg/ taille² en metre

// Une entrée en kg
// une entrée en cm donc conversion en m
// faire un calcul pour l'imc et afficher le résultat à l'arrondis supérieur
// 1 chiffre après la virgule.

function calcImc(poids, taille){
    taille = taille / 100;
    let imc = poids/(taille*taille)
    return Math.round(imc);
    // console.log(imc)
};
alert(calcImc(50, 150));

// CORRECTION 

let poids = prompt("Quels est votre poid actuel ? en kg");
let taille = prompt("Quel est votre taille ? en cm");

function imc(poids, taille) {
  poids = +poids;
  taille = +taille;

  taille = taille / 100;
  return Math.floor(poids / (taille * taille));
}