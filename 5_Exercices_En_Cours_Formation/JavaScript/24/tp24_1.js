console.log("TP 24 1")

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

let buttonSelector = document.querySelector('button');
let nombreCache = 0;
let textInput;

buttonSelector.innerText = "Démarer le jeux";

buttonSelector.addEventListener('click', function(){
    valeurAleatoire();    
}); 

function valeurAleatoire(){
    nombreCache = [Math.floor(Math.random() * 1000)];
    console.log(nombreCache);
  // a passer en return
};

// function afficherBouton(){
//     if (nombreCache == undefined || nombreCache == null) {
//             buttonSelector.innerText = "Démarer le jeux";
//           } else {
//             buttonSelector.innerText = "comparer la valeur";
//           }
// };

function afficher(){
    textInput = document.querySelector('input').value;
    console.log('textInput')
}
