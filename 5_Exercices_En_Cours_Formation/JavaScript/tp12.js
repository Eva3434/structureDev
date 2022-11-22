console.log("Tp numero 12");

// Objectif :
// - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat
// - Proposez à l’utilisateur de recommencer
do {
  let choixCalcul = 0;
  do {
    choixCalcul = parseInt(
      prompt(
        `Veuillez choisir un calcul ci dessous: \n1-addition \n2-soustraction \n3-multiplication \n4-division `
      )
    );
  } while (choixCalcul < 0 || choixCalcul > 4 || isNaN(choixCalcul));

  switch (choixCalcul) {
    case 1:
      do {
        choisirValeur1();
      } while (isNaN(nombre1));
      do {
        choisirValeur2();
      } while (isNaN(nombre2));
      addition(nombre1, nombre2);
      break;

    case 2:
      choisirValeur1(nombre1);
      choisirValeur2(nombre2);
      soustraction(nombre1, nombre2);
      break;

    case 3:
      choisirValeur1();
      choisirValeur2();
      multiplication(nombre1, nombre2);
      break;

    case 4:
      choisirValeur1();
      choisirValeur2();
      division(nombre1, nombre2);
      break;

    default:
      console.log("probleme");
  }
} while (confirm("Voulez vous continuer ?"));

/************CHOISIR VALEUR***************/

function choisirValeur1() {
  nombre1 = parseInt(prompt(`Veuillez saisir une valeur`));
  return nombre1;
}
function choisirValeur2() {
  nombre2 = parseInt(prompt(`Veuillez saisir une valeur`));
  return nombre2;
}

/************CALCULS***************/

function addition(nombre1, nombre2) {
  resultat = nombre1 + nombre2;
  alert(resultat);
}
function soustraction(nombre1, nombre2) {
  resultat = nombre1 - nombre2;
  alert(resultat);
}
function multiplication(nombre1, nombre2) {
  resultat = nombre1 * nombre2;
  alert(resultat);
}
function division(nombre1, nombre2) {
  resultat = nombre1 / nombre2;
  alert(resultat);
};
