console.log("Tableau TP 1");

//Déclarer un tableau qui en contient deux, ajouter un troisème tableau.
// à l'aide de splice

//Un tableau à deux dimensions
// let array = [
//     ["titi", "tata", "toto"],
//     ["jiji", "jaja", "jojo"],
//   ];

let tab = ["jiji", ["jaja", "jojo"]];
tab.splice(2,0,["titi", "tata", "toto"]);
console.table(tab);