console.log('date')


// Je vais vous demander de m’afficher la date actuelle dans ce format : jeudi 20 mai 2021
// Je vous donne deux indices :
// - Une méthode de l’objet date pourra vous être utile.
// - L’objet navigator du BOM pourra également vous être utile.


let date = new Date()

console.log(date)

var j = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
var m = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout", "Septembre", "Octobre","Novembre", "Décembre"]
var d = new Date();
console.log(d.getDay())
console.log(d.getMonth())

console.log(j[d.getDay() - 1]);
console.log(m[d.getMonth()]);