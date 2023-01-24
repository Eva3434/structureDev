// for(let i=0; i<10; i++){
//     console.log(i)
// }

// let i = 0;
// while(i<10){
//     console.log(2*i+1);
//     i++
// }

const jc = {
    nom:"Dusse",
    prenom:"jean",
    sePresenter: function() {
        console.log("Bonjour, je m'appelle" + this.prenom + "" + this.nom);
    }
    } 
    for(let key in jc)  {
        console.log(key + " : " + jc[key]);
    }
console.log(jc.nom);
console.log(jc["nom"]);
console.log(jc.sePresenter());
console.log(jc["sePresenter"]());

var personnages = ["Harry", "Hermione","Ron","Voldemort"];
let taille = personnages.length;
for(var i=0; i< personnages.length; i++){
    console.log(personnages[i])
};

const fruits = ["Cerise", "Pomme"];
for(let elt of fruits){
 console.log(elt);
}