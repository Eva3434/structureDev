console.log("Tableau Test");

let tab = ["nom"];
console.log(tab[0]);
console.table(tab);

let movie = {
    'nom' : 'nom_du_film',
    "réalisateur" : "nom_du_réalisateur"
}
console.log(movie['nom']);
movie['nom'] = "changement";

tab.push("hello");