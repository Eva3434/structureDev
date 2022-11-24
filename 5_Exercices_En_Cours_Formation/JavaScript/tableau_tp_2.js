console.log("Tableau TP 2");

// Consigne :

// Créez une fonction qui permet de lire parcourir 
// et de console.log les deux tableaux ci-dessous.
// Le résultat attendu est celui-ci : 

// */

let formateur = ["Ophelie", "Benjamin", "Mathieu", "Leo"];

let benjamin = {
  nom: "Jully",
  prenom: "Boy",
  force: "extreme",
  ego: "surdimensionné",
};

function parcourir(tab, prenom) {
    for(i=0; i<tab.length; i++){
        console.log(i, tab[i]);
    }
    for (const element in prenom) {
        console.log(`${element}: ${prenom[element]}`);
    }

}

parcourir(formateur, benjamin)