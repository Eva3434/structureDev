console.log("TP 24");
// Etape 1 - Sélectionner nos éléments
// Etape 2 - Cacher l'erreur
// Etape 3 - Générer un nombre aléatoire
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// Etape 5 - Agir à l'envoi du formulaire
// Etape 6 - Créer la fonction vérifier
// Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
// deviner le prix d'un produit. Ici, trois possibilités :
// - C'est plus cher
// - C'est moins cher
// - C'est le juste prix !
// Dans cette version du "Juste prix", nous générerons un
// prix aléatoire, et nous calculerons le nombre de coups
// qu'il faut à un joueur pour retrouver le juste prix.
// Ainsi, il pourra se confronter à ses amis pour tenter de
// voir qui retrouve le bon prix avec le moins de coups
// possibles !

/*
1 l'utilisateur click sur "demarer le jeux"     OK
2 le jeux génère un chiffre aleatoire           OK
3 l'utilisateur saisi une valeur 
4 l'utilsiateur click sur "envoyer valeur"
5 on verifie que la valeur soit un nombre entre 1 et 1000 
6 cette valeur est comparer a la valeur aléatoire 
7 si elle est plus grande message affiche "trop cher"
8 si elle est plus petite message affiche "moins cher"
9 si la valeur est identique  message affiche "prix OK*
10 on propose à l'utilisateur de recommencer */

let buttonSelector = document.querySelector("button");
let nombreCache;
let formSelector = document.querySelector("form");

buttonSelector.addEventListener("click", function () {
  for (i = 0; i < 1; i++) {
    // bouton();
    valeur();
  }
});

function valeur() {
  nombreCache = [Math.floor(Math.random() * 1000)];
  console.log(nombreCache);
  // a passer en return
}

// function bouton() {
//   if (valeur == "" || valeur == null || valeur == undefined) {
//     buttonSelector.innerText = "Démarer le jeux";
//   } else {
//     buttonSelector.innerText = "comparer la valeur";
//   }
// }

let message = document.querySelectorAll("p");
message[2].innerText = "C'est plus cher";

// if (valeurduform < nombreCache){
//     message[2].innerText = "C'est plus cher";
// } else if (valeurduform > nombreCache){
//     message[2].innerText = "C'est moins cher";
// } else if (valeurduform == nombreCache){
//     message[2].innerText = " C'est le juste prix !";
// } else {message[2].innerText = "Veuillez saisir valeur correct";};


function afficher() {
  var saisie = document.getElementById("textInput").value;
  // document.getElementById("texte2").value=saisie ;
  console.log(saisie);
}
//convertir textInput en num valeur du form

